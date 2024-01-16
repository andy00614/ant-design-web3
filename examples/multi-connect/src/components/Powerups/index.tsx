import { Card } from 'antd';
import { useAccount } from 'wagmi';

function Mint() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <div />;
  }

  return <Card>Mint Todo...</Card>;
}

export default Mint;
