import type { WalletMetadata } from '@levellink/web3-common';
import { WalletConnectColorful } from '@levellink/web3-icons';

export const metadata_WalletConnect: WalletMetadata = {
  icon: <WalletConnectColorful />,
  name: 'WalletConnect',
  remark: 'Connect with mobile APP',
  app: {
    link: 'https://walletconnect.com/',
  },
};
