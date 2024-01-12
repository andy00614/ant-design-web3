import { MixConnectButton, Provider } from '@levellink/ui';

import MintNft from './MintNft';

// import WalletConnectButton from './WalletConnect';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      <MintNft />
    </Provider>
  );
}

export default App;
