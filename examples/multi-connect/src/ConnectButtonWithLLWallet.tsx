import { ConnectButton } from '@ant-design/web3';
import { LLChainSelect } from '@levellink/core';
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
