// 给依赖钱包的App去用的
import type { ReactElement } from 'react';
import { useRef } from 'react';

import { COMMUNICATION_IFRAME_URL } from '../const';
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

function CommunicationAppProvider(props: CommunicationProviderProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useClientPostMessageListener();

  // useAppPostMessage(iframeRef.current,props.events)

  // const handleMessage = useCallback((event: MessageEvent) => {
  //   const { key, value } = event.data;
  //   if (key === NAME_OF_STORAGE_LOGOUT) {
  //     props.events.onLogout();
  //     return
  //   }
  //   if (key === NAME_OF_STORAGE_LOCK) {
  //     props.events.onLock();
  //     return
  //   }
  //   if (key === NAME_OF_STORAGE_NETWORK) {
  //     console.log('swichNode', {key,value})
  //     localStorage.setItem('nodeId',value)
  //     location.reload()
  //     // props.events.onNetworkChange(value);
  //     return
  //   }
  //   if (key === NAME_OF_STORAGE_CLOSE) {
  //     props.events.onClose();
  //     return
  //   }
  //   if (key === NAME_OF_STORAGE_CLEAR) {
  //     props.events.onClearCache();
  //     return
  //   }
  // }, [])

  // useEffect(() => {
  //   window.addEventListener('message', handleMessage);
  //   return () => {
  //     window.removeEventListener('message', handleMessage);
  //   };
  // }, []);

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

export default CommunicationAppProvider;
