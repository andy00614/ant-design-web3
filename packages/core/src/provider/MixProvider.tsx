import React from 'react';

import { getWallet } from '../api';
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
        {children}
      </AccountProvider>
    </div>
  );
};
