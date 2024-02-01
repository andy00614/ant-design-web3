import React from 'react';
import { WagmiWeb3ConfigProvider, WalletConnect } from '@levellink/web3-wagmi';

import { getWallet } from '../api';
import { CHAINS_FOR_WAGMI, wagmiConfig } from '../config';
import type { ContextProps } from './';
import { AccountProvider } from './';

type TProviderProps = {
  applicationName?: string;
  children?: React.ReactNode;
  customToast?: () => void;
  getWallet?: () => void;
  onLineWalletProps?: ContextProps;
  walletURL: string;
};

export const Provider: React.FC<TProviderProps> = ({
  children,
  applicationName,
  onLineWalletProps,
  walletURL,
}) => {
  return (
    <div>
      <AccountProvider
        applicationName={applicationName || ''}
        customToast={() => {}}
        getWallet={getWallet}
        walletURL={walletURL}
        {...onLineWalletProps}
      >
        <WagmiWeb3ConfigProvider config={wagmiConfig} assets={[...CHAINS_FOR_WAGMI, WalletConnect]}>
          {children}
        </WagmiWeb3ConfigProvider>
      </AccountProvider>
    </div>
  );
};
