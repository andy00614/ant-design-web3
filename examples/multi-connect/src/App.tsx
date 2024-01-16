import { MixConnectButton, Provider } from '@levellink/core';

import GGC from './components/GGC';
import Mint from './components/Mint';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      <GGC />
      <Mint />
    </Provider>
  );
}

export default App;
