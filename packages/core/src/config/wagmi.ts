import { configureChains, createConfig } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

import { CHAINS_FOR_WAGMI } from './chains';
import { WALLET_CONNECT_ID } from './const';

const { publicClient, chains } = configureChains(CHAINS_FOR_WAGMI as any, [publicProvider()]);

export const wagmiConfig: any = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WALLET_CONNECT_ID,
      },
    }),
  ],
});
