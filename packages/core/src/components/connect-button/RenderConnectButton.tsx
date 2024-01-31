import React from 'react';
import { ConnectButton } from '@levellink/web3';
import type { Chain } from '@levellink/web3-common';
import { Space } from 'antd';

import { CHAINS_FOR_WAGMI } from '../../config';
import { ChainSelectV2 } from '../node-select-v2';

interface RenderConnectButtonProps {
  address?: string;
  disconnectFn: () => void;
  chain: Chain | undefined;
  switchNetwork: ((chainId_?: number | undefined) => void) | undefined;
  isWeb3Wallet: boolean;
}

const RenderConnectButton: React.FC<RenderConnectButtonProps> = ({
  address,
  disconnectFn,
  chain,
  switchNetwork,
  isWeb3Wallet,
}) => {
  // 提取公共的 ConnectButton 属性
  const commonConnectButtonProps = {
    onSwitchChain: async (c: any) => {
      if (switchNetwork) {
        switchNetwork(c.id);
      }
    },
    account: {
      address: address || '',
      name: `${address?.slice(0, 6)}...${address?.slice(-4)}`,
    },
    onDisconnectClick: disconnectFn,
  };
  if (isWeb3Wallet) {
    return (
      <div>
        <ConnectButton
          {...commonConnectButtonProps}
          chain={chain}
          availableChains={CHAINS_FOR_WAGMI}
        />
      </div>
    );
  }

  return (
    <Space.Compact>
      <ChainSelectV2 />
      <ConnectButton {...commonConnectButtonProps} />
    </Space.Compact>
  );
};

export default RenderConnectButton;
