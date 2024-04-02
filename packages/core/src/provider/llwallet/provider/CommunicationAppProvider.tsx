// 给依赖钱包的App去用的
import type { ReactElement } from 'react';
import { useRef } from 'react';

import { COMMUNICATION_IFRAME_URL } from '../../../config';
import { useClientPostMessageListener } from '../sync';

export interface OperateEvent {
  onLogout: () => void;
  onLock: () => void;
  onClearCache: () => void;
  onClose: () => void;
  onNetworkChange?: (value: string | number) => void;
}
export interface CommunicationProviderProps {
  children: ReactElement;
  iframeURL?: string;
  events: OperateEvent;
}

export function CommunicationAppProvider(props: CommunicationProviderProps): ReactElement {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useClientPostMessageListener();

  return (
    <>
      <iframe
        ref={iframeRef}
        src={props.iframeURL || COMMUNICATION_IFRAME_URL}
        title="Communication iframe"
        style={{
          display: 'none',
          width: '500px',
          height: '300px',
          zIndex: '20',
          position: 'absolute',
          bottom: '0',
          left: '20px',
        }}
      />
      {props.children}
    </>
  );
}
