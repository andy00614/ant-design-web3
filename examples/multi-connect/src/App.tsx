import { MixConnectButton, Provider } from '@levellink/ui';

import ConnectButtonWithLLWallet from './ConnectButtonWithLLWallet';

// import WalletConnectButton from './WalletConnect';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      <ConnectButtonWithLLWallet />
      {/* <MintNft /> */}
      {/* <GGC /> */}
    </Provider>
  );
}

export default App;
