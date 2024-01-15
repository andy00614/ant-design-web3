import { ConnectButton } from '@ant-design/web3';
import { LLChainSelect } from '@levellink/ui';
import { Space } from 'antd';

function ConnectButtonWithLLWallet() {
  return (
    <div style={{ marginTop: '16px' }}>
      <Space.Compact>
        <LLChainSelect />
        <ConnectButton />
      </Space.Compact>
    </div>
  );
}

export default ConnectButtonWithLLWallet;
