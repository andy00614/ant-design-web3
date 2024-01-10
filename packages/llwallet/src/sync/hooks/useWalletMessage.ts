import { useEffect } from 'react';

import { walletPostMessageListener, walletStorageEventListener } from '../wallet';

export function useWalletPostMessageListener() {
  useEffect(() => {
    window.addEventListener('message', walletPostMessageListener);
    return () => {
      window.removeEventListener('message', walletPostMessageListener);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('storage', walletStorageEventListener);
  });
}
