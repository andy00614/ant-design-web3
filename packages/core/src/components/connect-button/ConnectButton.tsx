import { ConnectButton, Connector } from '@levellink/web3';
import { useDisconnect, useNetwork, useSwitchNetwork, useAccount as useWasmiAccount } from 'wagmi';

import { useAccount } from '../../';
import RenderConnectButton from './RenderConnectButton';

export function MixConnectButton(): JSX.Element {
  const { connectWallet, wallet, logout } = useAccount();
  const { isConnected: isConnectedWithLocalWallet, address } = useWasmiAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const isConnected = isConnectedWithLocalWallet || wallet;
  const addressToUse = isConnectedWithLocalWallet ? address : wallet?.address;
  const disconnectFn = isConnectedWithLocalWallet
    ? () => {
        disconnect();
        localStorage.removeItem('Token');
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
