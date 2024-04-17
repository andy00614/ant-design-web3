import { Provider } from '@levellink/core';

import './viem';

function App() {
  return (
    <Provider
      applicationName="测试钱包连接"
      walletURL="https://wallet-test.whyindian.site/"
      publicKey="abc"
      walletServiceURL="d"
    />
  );
}

export default App;
