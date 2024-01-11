import React from 'react';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { AccountProvider } from '@levellink/wallet';

import { config } from '../utils/config';
import { getWallet } from '../utils/reply';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AccountProvider applicationName="测试程序" customToast={() => {}} getWallet={getWallet}>
        <WagmiWeb3ConfigProvider config={config} assets={[WalletConnect]}>
          {children}
        </WagmiWeb3ConfigProvider>
      </AccountProvider>
    </div>
  );
}
