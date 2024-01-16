import { MixConnectButton, Provider } from '@levellink/core';

import Mint from './components/Powerups';
import GGC from './components/Vault';
import VaultV2 from './components/VaultV2';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      <GGC />
      <Mint />
      <VaultV2 />
    </Provider>
  );
}

export default App;
