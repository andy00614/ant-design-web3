import { useEffect } from 'react';

import { clientPostMessageListener } from '../client';

export function useClientPostMessageListener() {
  useEffect(() => {
    window.addEventListener('message', clientPostMessageListener);
    return () => {
      window.removeEventListener('message', clientPostMessageListener);
    };
  }, []);
}
