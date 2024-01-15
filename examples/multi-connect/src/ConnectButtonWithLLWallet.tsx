import { ConnectButton } from '@ant-design/web3';
import { ChainSelectV2 } from '@levellink/core';
import { Space } from 'antd';

function ConnectButtonWithLLWallet() {
  return (
    <div style={{ marginTop: '16px' }}>
      <Space.Compact>
        <ChainSelectV2 />
        <ConnectButton />
      </Space.Compact>
    </div>
  );
}

export default ConnectButtonWithLLWallet;
