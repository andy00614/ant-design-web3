import type { WalletMetadata } from '@levellink/web3-common';
import { ChromeCircleColorful, MetaMaskColorful } from '@levellink/web3-icons';

export const metadata_MetaMask: WalletMetadata = {
  icon: <MetaMaskColorful />,
  name: 'MetaMask',
  remark: 'MetaMask Wallet',
  app: {
    link: 'https://metamask.io/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
  group: 'Popular',
};
