import { BrowserLink } from '@levellink/web3';
import { Mainnet } from '@levellink/web3-assets';

const App: React.FC = () => {
  return <BrowserLink chain={Mainnet} address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />;
};

export default App;
