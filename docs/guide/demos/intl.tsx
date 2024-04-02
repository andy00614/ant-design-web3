import { ConnectButton } from '@levellink/web3';

const App: React.FC = () => {
  return (
    <ConnectButton
      locale={{
        connect: '连接钱包',
      }}
    />
  );
};

export default App;
