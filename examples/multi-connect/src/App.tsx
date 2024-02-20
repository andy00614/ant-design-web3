import { Provider } from '@levellink/core';

import './viem';

import ConnectButton from './ConnectButton';

function App() {
  return (
    <Provider applicationName="测试钱包连接" walletURL="https://wallet-test.whyindian.site/">
      <ConnectButton />
    </Provider>
  );
}

export default App;
