import { MixConnectButton, Provider } from '@levellink/core';

import Mint from './components/Powerups';
import GGC from './components/Vault';

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
