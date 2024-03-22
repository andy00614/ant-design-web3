import type { ComponentType } from 'react';
import React from 'react';
import { useWeb3Modal } from '@levellink/wagmimodal/react';
import { Button } from 'antd';

import { useUnifiedAccount } from '../..';

export function ConnectButtonHOC<
  P extends JSX.IntrinsicAttributes & { children?: React.ReactNode },
>(Component: ComponentType<P>, title: string): ComponentType<P> {
  return function WrappedComponent(props: P) {
    const account = useUnifiedAccount();
    const { open } = useWeb3Modal();

    if (!account.isConnected) {
      return (
        <Button
          onClick={() => {
            open();
          }}
        >
          {title || 'Wallet Connect'}
        </Button>
      );
    }

    return <Component {...props} />;
  };
}
