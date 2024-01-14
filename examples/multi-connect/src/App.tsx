import { MixConnectButton, Provider } from '@levellink/ui';

import GGC from './GGC';

// import WalletConnectButton from './WalletConnect';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      {/* <MintNft /> */}
      {/* <GGC /> */}
    </Provider>
  );
}

export default App;
