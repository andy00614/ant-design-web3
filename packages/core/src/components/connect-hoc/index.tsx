import type { ComponentType } from 'react';
import React from 'react';
import { useWeb3Modal } from '@levellink/wagmimodal/react';
import { Button } from 'antd';

import { useUnifiedAccount } from '../..';

type ConnectButtonHOCProps<P> = P & {
  renderDisconnected?: (open: () => void) => React.ReactNode;
};

export function ConnectButtonHOC<P>(
  Component: ComponentType<P>,
  title?: string,
): ComponentType<ConnectButtonHOCProps<P>> {
  return function WrappedComponent(props: ConnectButtonHOCProps<P>) {
    const account = useUnifiedAccount();
    const { open } = useWeb3Modal();

    if (!account.isConnected) {
      if (props.renderDisconnected) {
        return <>{props.renderDisconnected(open)}</>;
      }

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
