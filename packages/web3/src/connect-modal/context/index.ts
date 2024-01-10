import React from 'react';
import { defaultLocale } from '@ant-design/web3-common';

import type { IntlType } from '../../hooks/useIntl';
import type { PanelRoute, Wallet } from '../interface';

export type ConnectModalContext = {
  prefixCls: string;
  selectedWallet?: Wallet;
  updateSelectedWallet: (wallet?: Wallet, triggerConnect?: boolean) => void;
  panelRoute: PanelRoute;
  updatePanelRoute: (route: PanelRoute, clear?: boolean) => void;
  panelRouteBack: () => void;
  canBack: boolean;
  localeMessage: IntlType<'ConnectModal'>['messages'];
  getMessage: IntlType<'ConnectModal'>['getMessage'];
  onCancel: (e?: any) => void;
};

export const connectModalContext = React.createContext<ConnectModalContext>({
  prefixCls: 'ant-web3-connect-modal',
  selectedWallet: undefined,
  updateSelectedWallet: () => {},
  panelRoute: 'init',
  updatePanelRoute: () => {},
  panelRouteBack: () => {},
  canBack: false,
  localeMessage: defaultLocale.ConnectModal,
  getMessage: () => '',
  onCancel: () => {},
});

export const ConnectModalContextProvider = connectModalContext.Provider;
