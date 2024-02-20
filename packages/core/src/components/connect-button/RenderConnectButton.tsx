import React from 'react';
import { ConnectButton } from '@levellink/web3';
import type { Chain } from '@levellink/web3-common';
import { Button, Space } from 'antd';

import { CHAINS_FOR_WAGMI } from '../../config';
import { ChainSelectV2 } from '../node-select-v2';

interface RenderConnectButtonProps {
  address?: string;
  disconnectFn: () => void;
  chain: Chain | undefined;
  switchNetwork: any;
  isWeb3Wallet: boolean;
  walletURL?: string;
}

const RenderConnectButton: React.FC<RenderConnectButtonProps> = ({
  address,
  disconnectFn,
  chain,
  switchNetwork,
  isWeb3Wallet,
  walletURL,
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
      {walletURL && <Button onClick={() => window.open(walletURL, '_blank')}>Go To Wallet</Button>}
    </Space.Compact>
  );
};

export default RenderConnectButton;
