import { MixConnectButton, Provider } from '@levellink/core';

import Mint from './components/Powerups';
import SignAddress from './components/SignAddress';
import GGC from './components/Vault';
import VaultV2 from './components/VaultV2';

import './viem';

function App() {
  return (
    <Provider applicationName="测试钱包连接">
      <MixConnectButton />
      <GGC />
      <Mint />
      <VaultV2 />
      <SignAddress />
    </Provider>
  );
}

export default App;
