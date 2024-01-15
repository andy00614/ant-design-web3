import { ConnectButton, Connector } from '@ant-design/web3';
import { useAccount } from '@levellink/wallet';
import { useAccount as useWasmiAccount } from 'wagmi';

function WalletConnect() {
  const { connectWallet, wallet, logout } = useAccount();
  const { isConnected: isConnectedWithLocalWallet } = useWasmiAccount();
  const _isConnected = isConnectedWithLocalWallet || wallet;

  if (!_isConnected || isConnectedWithLocalWallet) {
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
              onClick() {
                connectWallet();
              },
            },
          ]}
        >
          <ConnectButton />
        </Connector>
      </div>
    );
  }

  if (wallet) {
    return (
      <div>
        <ConnectButton
          account={{
            address: wallet.address,
            name: `${wallet.address.slice(0, 6)}...${wallet.address.slice(-6)}`,
          }}
          avatar={{
            src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
          }}
          onDisconnectClick={() => {
            logout();
          }}
          actionsMenu
          onMenuItemClick={(item) => {
            if (item?.key === 'disconnect') {
              logout();
            }
          }}
        />
      </div>
    );
  }
}

export default WalletConnect;