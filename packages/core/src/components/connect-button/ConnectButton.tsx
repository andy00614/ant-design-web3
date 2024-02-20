import { ConnectButton, Connector } from '@levellink/web3';
import { useDisconnect, useSwitchChain, useAccount as useWasmiAccount } from 'wagmi';

import { useAccount } from '../../';
import RenderConnectButton from './RenderConnectButton';

export function MixConnectButton({ walletURL }: { walletURL?: string }): JSX.Element {
  const { connectWallet, wallet, logout } = useAccount();
  const { isConnected: isConnectedWithLocalWallet, address } = useWasmiAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useWasmiAccount();
  const { switchChain } = useSwitchChain();

  const isConnected = isConnectedWithLocalWallet || wallet;
  const addressToUse = isConnectedWithLocalWallet ? address : wallet?.address;
  const disconnectFn = isConnectedWithLocalWallet
    ? () => {
        disconnect();
        logout();
        localStorage.clear();
      }
    : logout;

  return (
    <div>
      {!isConnected ? (
        <Connector
          availableChains={[]}
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
          walletURL,
          address: addressToUse,
          disconnectFn,
          chain,
          switchNetwork: switchChain,
          isWeb3Wallet: isConnectedWithLocalWallet,
        })
      )}
    </div>
  );
}
