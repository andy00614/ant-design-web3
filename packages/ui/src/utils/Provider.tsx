import React from 'react';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { AccountProvider } from '@levellink/wallet';

import { config } from './config';
import { getWallet } from './reply';

type TProviderProps = {
  applicationName?: string;
  children?: React.ReactNode;
  customToast?: () => void;
  getWallet?: () => void;
};

export const Provider: React.FC<TProviderProps> = ({ children, applicationName }) => {
  console.log(applicationName);
  return (
    <div>
      <AccountProvider
        applicationName={applicationName || ''}
        customToast={() => {}}
        getWallet={getWallet}
      >
        <WagmiWeb3ConfigProvider config={config} assets={[WalletConnect]}>
          {children}
        </WagmiWeb3ConfigProvider>
      </AccountProvider>
    </div>
  );
};
