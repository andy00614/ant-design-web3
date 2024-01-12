import { BSC, BSCTestNet, Sepolia } from '@ant-design/web3-wagmi';
import type { Chain } from 'wagmi';
import { configureChains, createConfig } from 'wagmi';
import { bsc, bscTestnet, sepolia } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

export const CHAINS = [BSCTestNet, BSC, Sepolia];
export const configChains = [
  { ...sepolia, ...Sepolia },
  { ...bsc, ...BSC },
  { ...bscTestnet, ...BSCTestNet },
];

const { publicClient, chains } = configureChains(configChains as Chain[], [publicProvider()]);
// @ts-ignore
export const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '172711aeeee9a791272b6ecbfd45d270',
      },
    }),
  ],
});
