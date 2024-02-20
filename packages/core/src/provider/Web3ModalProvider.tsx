import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { bscTestnet, mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'd7c9656afba296efe5638ee2fc6c7129';

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const config = createConfig({
  chains: [mainnet, sepolia, bscTestnet],
  transports: {
    [mainnet.id]: http('https://eth-sepolia.g.alchemy.com/v2/Z8G6iIkfebqzuDnW8okiVqdiOFBozrjM'),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/Z8G6iIkfebqzuDnW8okiVqdiOFBozrjM'),
    [bscTestnet.id]: http('https://data-sepolia.g.alchemy.com/v2/Z8G6iIkfebqzuDnW8okiVqdiOFBozrjM'),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
});

// 3. Create modal
createWeb3Modal({
  // @ts-ignore
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

// @ts-ignore
const Web3ModalProvider: React.FC<any> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
export default Web3ModalProvider;
