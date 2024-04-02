import React, { createContext, useEffect, useState } from 'react';

import { NAME_OF_STORAGE_CLEAR, StorageEventEnum, walletTokenName } from '../../../config';
import { useWalletPostMessageListener, walletStorageChangeSender } from '../sync';

interface CommunicationWalletCtxProps {
  triggerLogout: () => void;
  triggerLock: () => void;
  triggerClearCache: () => void;
  triggerClose: () => void;
  triggerNetworkId: (networkId: string) => void;
}

const CommunicationWalletCtx = createContext<CommunicationWalletCtxProps | null>(null);

interface CommunicationWalletProviderProps {
  children: React.ReactElement;
}

export function CommunicationWalletProvider(props: CommunicationWalletProviderProps): JSX.Element {
  // useWalletPostMessage()
  const triggerLogout = () => walletStorageChangeSender(StorageEventEnum.STORAGE_LOGOUT);

  const triggerLock = () => walletStorageChangeSender(StorageEventEnum.STORAGE_LOCK);

  const triggerClearCache = () => walletStorageChangeSender(StorageEventEnum.STORAGE_CLEAR);

  const triggerClose = () => walletStorageChangeSender(StorageEventEnum.STORAGE_CLOSE);

  const triggerNetworkId = (nodeId: string) =>
    walletStorageChangeSender(StorageEventEnum.STORAGE_NETWORK_ID, nodeId);

  useWalletPostMessageListener();

  // useEffect(() => {
  //   function exec(event: any) {
  //     console.log('you event change',event)
  //     // 捕获到消息，现在通知宿主页面
  //     window.parent.postMessage({ key: event.key, value: event.newValue }, '*');
  //   }
  //   window.addEventListener('storage', exec);
  //   return () => {
  //     window.removeEventListener('storage', exec);
  //   }
  // }, [])

  const [cookiesCleared, setCookiesCleared] = useState(true); // 添加一个新的状态来跟踪cookie是否已经被清空

  useEffect(() => {
    function getCookie(name: string) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=') as any[];
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function checkCookie() {
      const cookieToken = getCookie(walletTokenName);
      // 如果检测到cookie被清空并且状态表示它还没有被清空
      if (!cookieToken && !cookiesCleared) {
        setCookiesCleared(true); // 更新状态
        window.parent.postMessage({ key: NAME_OF_STORAGE_CLEAR, value: null }, '*');
      }
      // 如果cookie没有被清空，可以重置该状态（这是可选的，取决于你的需求）
      else if (cookieToken) {
        setCookiesCleared(false);
      }
    }

    // 设置每隔一定时间（例如1秒）检查一次
    const intervalId = setInterval(checkCookie, 1500);

    return () => {
      // 组件卸载时清除定时器
      clearInterval(intervalId);
    };
  }, [cookiesCleared]);

  const value = {
    triggerLogout,
    triggerLock,
    triggerClearCache,
    triggerClose,
    triggerNetworkId,
  };

  return (
    <CommunicationWalletCtx.Provider value={value}>
      {props.children}
    </CommunicationWalletCtx.Provider>
  );
}

export const useCommunicationWallet = () => {
  const context = React.useContext(CommunicationWalletCtx);
  if (context === null) {
    throw new Error('useCommunicationWallet must be used within a CommunicationWalletProvider');
  }
  return context;
};
