import { BitcoinCircleColorful, EthereumFilled } from '@levellink/web3-icons';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space wrap>
      <BitcoinCircleColorful />
      <EthereumFilled />
    </Space>
  );
};

export default App;
