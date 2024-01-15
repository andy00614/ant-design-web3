import { MixConnectButton, Provider } from '@levellink/core';

import GGC from './GGC';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      <GGC />
    </Provider>
  );
}

export default App;
