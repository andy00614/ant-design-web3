import React from 'react';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@levellink/web3-wagmi';

import { getWallet } from '../api';
import { wagmiConfig } from '../config';
import { AccountProvider } from './';

type TProviderProps = {
  applicationName?: string;
  children?: React.ReactNode;
  customToast?: () => void;
  getWallet?: () => void;
};

export const Provider: React.FC<TProviderProps> = ({ children, applicationName }) => {
  return (
    <div>
      <AccountProvider
        applicationName={applicationName || ''}
        customToast={() => {}}
        getWallet={getWallet}
      >
        <WagmiWeb3ConfigProvider config={wagmiConfig} assets={[WalletConnect]}>
          {children}
        </WagmiWeb3ConfigProvider>
      </AccountProvider>
    </div>
  );
};
