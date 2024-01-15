import { ConnectButton, Connector } from '@levellink/web3';
import { CoinbaseWallet, WagmiWeb3ConfigProvider } from '@levellink/web3-wagmi';
import { configureChains, createConfig, mainnet } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

const { publicClient, chains } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
    }),
    new WalletConnectConnector({
      chains,
      options: {
        showQrModal: false,
        projectId: YOUR_WALLET_CONNET_PROJECT_ID,
      },
    }),
  ],
});

const App: React.FC = () => {
  return (
    <WagmiWeb3ConfigProvider balance assets={[CoinbaseWallet]} config={config}>
      <Connector>
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
