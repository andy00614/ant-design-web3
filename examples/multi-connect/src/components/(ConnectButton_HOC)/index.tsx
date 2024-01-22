import type { ComponentType } from 'react';
import { MixConnectButton, useUnifiedAccount } from '@levellink/core';

export function ConnectButtonHOC<P extends JSX.IntrinsicAttributes>(
  ButtonComponent: ComponentType<P>,
) {
  const account = useUnifiedAccount();
  return function WrappedComponent(props: P) {
    if (!account.isConnected) {
      return <MixConnectButton />;
    }

    return <ButtonComponent {...props} />;
  };
}
