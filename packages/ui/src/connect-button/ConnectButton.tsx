import { ConnectButton, Connector } from '@ant-design/web3';
import { useAccount } from '@levellink/wallet';
import { useDisconnect, useAccount as useWasmiAccount } from 'wagmi';

import { Provider } from './Provider';

function renderConnectButton(address: string, disconnectFn: () => void) {
  return (
    <ConnectButton
      account={{
        address: address || '',
        name: `${address?.slice(0, 6)}...${address?.slice(-6)}`,
      }}
      avatar={{
        src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU4V4IdJCFgzipxegSL4G9INDy5HshFWPLrJIDUXSHXrKAB9Qh',
      }}
      onDisconnectClick={disconnectFn}
      actionsMenu
      onMenuItemClick={(item) => {
        if (item?.key === 'disconnect') {
          disconnectFn();
        }
      }}
    />
  );
}

export function Button() {
  const { connectWallet, wallet, logout } = useAccount();
  const { isConnected: isConnectedWithLocalWallet, address } = useWasmiAccount();
  const { disconnect } = useDisconnect();

  const isConnected = isConnectedWithLocalWallet || wallet;

  if (!isConnected) {
    return (
      <div>
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
      </div>
    );
  }

  const addressToUse = isConnectedWithLocalWallet ? address : wallet?.address;
  const disconnectFn = isConnectedWithLocalWallet ? disconnect : logout;

  return <div>{renderConnectButton(addressToUse, disconnectFn)}</div>;
}

export function WalletConnectButton() {
  return (
    <Provider>
      <Button />
    </Provider>
  );
}
