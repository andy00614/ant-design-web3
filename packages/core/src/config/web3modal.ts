import { defineChain } from 'viem';
import { cookieStorage, createConfig, createStorage, http } from 'wagmi';
import { bscTestnet, mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

import { ChainIds } from './chains';

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Level Link Website',
  description: 'The Level Link Website',
  url: 'https://testnet.whyindian.site/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chainConfigWithDevChain = defineChain({
  id: ChainIds.DEVELOP,
  name: '开发测试链',
  network: 'develop chain',
  nativeCurrency: {
    decimals: 18,
    name: 'GGC',
    symbol: 'GGC',
  },
  rpcUrls: {
    default: { http: ['https://whyindian.ddns.net/chain/'] },
    public: { http: ['https://whyindian.ddns.net/chain/'] },
  },
  blockExplorers: {
    etherscan: { name: 'developScan', url: 'https://testnet.bscscan.com' },
    default: { name: 'developScan', url: 'https://testnet.bscscan.com' },
  },
  testnet: true,
});

export const chains = [mainnet, sepolia, bscTestnet, chainConfigWithDevChain];

// Create wagmiConfig
export const config = createConfig({
  chains: chains as any,
  transports: {
    [mainnet.id]: http('https://eth-sepolia.g.alchemy.com/v2/Z8G6iIkfebqzuDnW8okiVqdiOFBozrjM'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/Z8G6iIkfebqzuDnW8okiVqdiOFBozrjM'),
    [bscTestnet.id]: http('https://data-seed-prebsc-2-s1.bnbchain.org:8545'),
    [chainConfigWithDevChain.id]: http('https://whyindian.ddns.net/chain/'),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
