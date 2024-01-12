import { MixConnectButton, Provider } from '@levellink/ui';

// import WalletConnectButton from './WalletConnect';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
    </Provider>
  );
}

export default App;
