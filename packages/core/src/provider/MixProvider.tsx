import React from 'react';

import { createRequest } from '../utils';
import type { ContextProps } from './';
import { AccountProvider } from './';

type TProviderProps = {
  applicationName?: string;
  children?: React.ReactNode;
  customToast?: () => void;
  getWallet?: () => void;
  onLineWalletProps?: ContextProps;
  walletURL: string;
  publicKey: string;
  walletServiceURL: string;
  beforeLogin?: () => void;
  afterLogin?: () => void;
};

export const Provider: React.FC<TProviderProps> = ({
  children,
  applicationName,
  onLineWalletProps,
  walletURL,
  walletServiceURL,
  publicKey,
  beforeLogin,
  afterLogin,
}) => {
  const _getWallet = async () => {
    const request = createRequest({
      baseURL: `${walletServiceURL}`,
      tokenName: 'token',
      encryptBlackList: [],
      publicKey: publicKey,
    });
    const data = await request('/blockchain/wallet', 'GET');
    return (data as any)?.data;
  };
  return (
    <AccountProvider
      applicationName={applicationName || ''}
      customToast={() => {}}
      getWallet={_getWallet}
      walletURL={walletURL}
      beforeLogin={beforeLogin}
      afterLogin={afterLogin}
      {...onLineWalletProps}
    >
      {children}
    </AccountProvider>
  );
};
