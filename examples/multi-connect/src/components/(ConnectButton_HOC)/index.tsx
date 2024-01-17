import type { ComponentType } from 'react';
import { MixConnectButton } from '@levellink/core';
import { useAccount } from 'wagmi';

export function ConnectButtonHOC<P extends JSX.IntrinsicAttributes>(
  ButtonComponent: ComponentType<P>,
) {
  const { isConnected } = useAccount();

  return function WrappedComponent(props: P) {
    if (!isConnected) {
      return <MixConnectButton />;
    }

    return <ButtonComponent {...props} />;
  };
}
