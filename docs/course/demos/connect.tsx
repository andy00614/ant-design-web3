import { ConnectButton, Connector } from '@levellink/web3';
import { WagmiWeb3ConfigProvider } from '@levellink/web3-wagmi';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
  ],
});

export default () => {
  return (
    <WagmiWeb3ConfigProvider config={config}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};
