import React, { useContext } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { Chain } from '@levellink/web3-common';
import { Button, ConfigProvider, Dropdown, Space } from 'antd';
import classNames from 'classnames';

export interface ChainSelectProps {
  className?: string;
  hashId: string;
  chains: Chain[];
  onSwitchChain?: (chain: Chain) => void;
  currentChain?: Chain;
  style?: React.CSSProperties;
}

export const ChainSelect: React.FC<ChainSelectProps> = ({
  className,
  onSwitchChain,
  style,
  chains,
  hashId,
  currentChain,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-chain-select');
  return (
    // text-sm mr-1 cursor-pointer underline max-w-20 truncate
    <Button
      type="link"
      className={`${prefixCls}-button`}
      style={{
        fontSize: '12px',
        marginRight: '4px',
        cursor: 'pointer',
        textDecoration: 'underline',
        maxWidth: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      <Dropdown
        className={classNames(className, hashId, prefixCls)}
        overlayClassName={`${prefixCls}-dropdown`}
        menu={{
          items: chains.map((chain) => ({
            key: chain.id,
            label: chain.name,
            icon: chain.icon,
            onClick: () => {
              onSwitchChain?.(chain);
            },
          })),
        }}
        trigger={['click']}
      >
        <div className={`${prefixCls}-placeholder`} style={style}>
          <Space>
            {currentChain?.icon}
            {currentChain?.name}
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </Button>
  );
};

ChainSelect.displayName = 'ChainSelect';
