import { BrowserLink } from '@levellink/web3';

const App: React.FC = () => {
  return (
    <div
      style={{
        fontSize: 64,
      }}
    >
      <BrowserLink iconOnly address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />
    </div>
  );
};

export default App;
