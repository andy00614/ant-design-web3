import { ConnectButton, Connector } from '@ant-design/web3';
import { useAccount } from '@levellink/wallet';
import { Space } from 'antd';
import type { Chain } from 'wagmi';
import { useDisconnect, useNetwork, useSwitchNetwork, useAccount as useWasmiAccount } from 'wagmi';

import { CHAINS, LLChainSelect } from '..';

function RenderConnectButton({
  address,
  disconnectFn,
  chain,
  switchNetwork,
  isWeb3Wallet,
}: {
  address?: string;
  disconnectFn: () => void;
  chain: Chain | undefined;
  switchNetwork: ((chainId_?: number | undefined) => void) | undefined;
  isWeb3Wallet: boolean;
}) {
  // 判断当前链接的是哪个钱包
  if (isWeb3Wallet) {
    return (
      <div>
        <ConnectButton
          chain={chain}
          availableChains={CHAINS}
          onSwitchChain={async (c) => {
            if (switchNetwork) {
              switchNetwork(c.id);
            }
          }}
          account={{
            address: address || '',
            name: `${address?.slice(0, 6)}...${address?.slice(-6)}`,
          }}
          avatar={{
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU4V4IdJCFgzipxegSL4G9INDy5HshFWPLrJIDUXSHXrKAB9Qh',
          }}
          onDisconnectClick={disconnectFn}
        />
      </div>
    );
  }
  return (
    <Space.Compact>
      <LLChainSelect />
      <ConnectButton
        onSwitchChain={async (c) => {
          if (switchNetwork) {
            switchNetwork(c.id);
          }
        }}
        account={{
          address: address || '',
          name: `${address?.slice(0, 6)}...${address?.slice(-6)}`,
        }}
        avatar={{
          src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU4V4IdJCFgzipxegSL4G9INDy5HshFWPLrJIDUXSHXrKAB9Qh',
        }}
        onDisconnectClick={disconnectFn}
      />
    </Space.Compact>
  );
}

export function MixConnectButton() {
  const { connectWallet, wallet, logout } = useAccount();
  const { isConnected: isConnectedWithLocalWallet, address } = useWasmiAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const isConnected = isConnectedWithLocalWallet || wallet;
  const addressToUse = isConnectedWithLocalWallet ? address : wallet?.address;
  const disconnectFn = isConnectedWithLocalWallet ? disconnect : logout;

  return (
    <div>
      {!isConnected ? (
        <Connector
          customWallets={[
            {
              name: 'LL Wallet',
              remark: 'Online wallet',
              key: 'llwallet',
              icon: 'https://svgl.vercel.app/library/steam.svg',
              group: 'Suggestion',
              onClick: connectWallet,
            },
          ]}
        >
          <ConnectButton />
        </Connector>
      ) : (
        RenderConnectButton({
          address: addressToUse,
          disconnectFn,
          chain,
          switchNetwork,
          isWeb3Wallet: isConnectedWithLocalWallet,
        })
      )}
    </div>
  );
}
