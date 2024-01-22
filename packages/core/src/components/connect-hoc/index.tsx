import type { ComponentType } from 'react';
import React from 'react';

import { MixConnectButton, useUnifiedAccount } from '../..';

export function ConnectButtonHOC<
  P extends JSX.IntrinsicAttributes & { children?: React.ReactNode },
>(Component: ComponentType<P>): ComponentType<P> {
  return function WrappedComponent(props: P) {
    const account = useUnifiedAccount();

    if (!account.isConnected) {
      return <MixConnectButton />;
    }

    return <Component {...props} />;
  };
}
