import { MixConnectButton, Provider } from '@levellink/ui';

import NFTImage from './NFTImage';

// import WalletConnectButton from './WalletConnect';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      <NFTImage />
    </Provider>
  );
}

export default App;
