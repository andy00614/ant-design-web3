/**
 * ConnectButtonHOC is a higher-order component that wraps a component and provides wallet connection functionality.
 * It renders the wrapped component when the wallet is connected, and renders a connect button or custom disconnected content when the wallet is disconnected.
 *
 * @param Component - The component to be wrapped, which will be rendered when the wallet is connected.
 * @param title - The title or text to be displayed on the connect button when the wallet is disconnected.
 * @returns A new component that includes the wallet connection functionality.
 *
 * @example
 * const CustomConnectButton = ConnectButtonHOC(Button, 'Connect Wallet');
 *
 * <CustomConnectButton>
 *   Connected content
 * </CustomConnectButton>
 *
 * @example
 * const CustomConnectButton = ConnectButtonHOC(Button, 'Connect Wallet');
 *
 * <CustomConnectButton
 *   renderDisconnected={(open) => (
 *     <div onClick={open}>
 *       Custom disconnected content
 *     </div>
 *   )}
 * >
 *   Connected content
 * </CustomConnectButton>
 */

import type { ComponentType } from 'react';
import React from 'react';
import { useWeb3Modal } from '@levellink/wagmimodal/react';
import { Button } from 'antd';

import { useUnifiedAccount } from '../..';

type ConnectButtonHOCProps<P> = P & {
  renderDisconnected?: (open: () => void) => React.ReactNode;
};

export function ConnectButtonHOC<
  P extends JSX.IntrinsicAttributes & { children?: React.ReactNode },
>(Component: ComponentType<P>, title?: string): ComponentType<ConnectButtonHOCProps<P>> {
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
