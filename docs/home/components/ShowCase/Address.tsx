import { Address } from '@levellink/web3';
import { Space } from 'antd';

import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.cardBg}>
      <span className={styles.title}>Address</span>
      <Space direction="vertical" size={32}>
        <Address ellipsis address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} />
        <Address
          ellipsis={{
            headClip: 4,
            tailClip: 4,
          }}
          copyable
          address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'}
        />
        <Address address={'3ea2cfd153b8d8505097b81c87c11f5d05097c18'} format={true} />
      </Space>
    </div>
  );
};
