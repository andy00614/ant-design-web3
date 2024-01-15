import type { FC } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

import { connectWalletForURL, deCrypto } from '../../../utils';
import { CommunicationAppProvider } from './CommunicationAppProvider';

export const TOKEN_NAME = 'token';
export const NODE_ID_NAME = 'nodeId';
export const DECRYPTOKEY = 'andytest123456auth';
export const GAME_TOKEN = 'gameToken';
export const PUBLIC_KEY = 'publicKey';

type WalletInfo = any; // 定义更具体的类型

interface MyContextProps {
  wallet: WalletInfo | null;
  connectWallet: (name?: string) => Promise<void>;
  logout: () => void;
  checkWhetherConnectHOC: (fn: Function) => any;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

interface ContextProps {
  customToast: any;
  getWallet: () => Promise<WalletInfo>;
  onLogout?: () => void;
  onNetworkChange?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
  applicationName: string;
  iframeURL?: string;
}

export const useAccount = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within a AccountProvider');
  }
  return context;
};

export const AccountProvider: FC<ContextProps> = ({
  getWallet,
  children,
  onLogout,
  onNetworkChange,
  onClose,
  applicationName,
  customToast,
  iframeURL,
}) => {
  const [wallet, setWallet] = useState<WalletInfo | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const updateWalletInfo = async () => {
    try {
      const data = await getWallet();
      setWallet(data);
    } catch (error) {
      console.error('Error updating wallet info:', error);
      // 处理错误，例如显示通知
    }
  };

  const initialize = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get(TOKEN_NAME) && decodeURIComponent(urlParams.get(TOKEN_NAME)!);
      const nodeId =
        urlParams.get(NODE_ID_NAME) && decodeURIComponent(urlParams.get(NODE_ID_NAME)!);
      const publicKey = urlParams.get(PUBLIC_KEY) && decodeURIComponent(urlParams.get(PUBLIC_KEY)!);

      if (token && nodeId) {
        const decodedToken = await deCrypto(token, DECRYPTOKEY);
        const decodedNodeId = await deCrypto(nodeId, DECRYPTOKEY);
        localStorage.setItem(TOKEN_NAME, decodedToken!);
        localStorage.setItem(NODE_ID_NAME, decodedNodeId!);
        localStorage.setItem(PUBLIC_KEY, publicKey!);

        // 移除特定的查询参数，保留其他参数
        urlParams.delete(TOKEN_NAME);
        urlParams.delete(NODE_ID_NAME);
        urlParams.delete(GAME_TOKEN);
        urlParams.delete(PUBLIC_KEY);

        // 构建新的 URL
        const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
        const newQueryString = urlParams.toString();
        const cleanURL = newQueryString ? `${newUrl}?${newQueryString}` : newUrl;

        window.history.replaceState({}, document.title, cleanURL);
      }

      if (localStorage.getItem(TOKEN_NAME)) {
        updateWalletInfo();
      }
    } catch (error) {
      console.error('Error during initialization:', error);
      // 处理错误
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const logout = () => {
    onLogout?.();
    setWallet(null);
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(NODE_ID_NAME);
  };

  const connectWallet = async (name?: string) => {
    await connectWalletForURL(name || applicationName);
  };

  const checkWhetherConnectHOC = (fn: Function, errorFunction?: Function) => {
    if (!wallet) {
      return async () => {
        if (errorFunction) {
          errorFunction();
        }
        customToast.custom((t: any) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p
                    className="flex items-center text-base text-yellow-600 font-medium "
                    style={{ color: '#ffa940' }}
                  >
                    <InfoCircleOutlined style={{ fontSize: '22px', marginRight: '12px' }} />
                    Please Connect Wallet
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Jumping to the wallet connection page...
                  </p>
                </div>
              </div>
            </div>
          </div>
        ));
        setTimeout(() => {
          connectWallet();
        }, 2000);
      };
    }
    return fn;
  };

  return (
    <MyContext.Provider value={{ wallet, connectWallet, logout, checkWhetherConnectHOC }}>
      <CommunicationAppProvider
        iframeURL={iframeURL}
        events={{
          onLogout: logout,
          onLock: logout,
          onClearCache: logout,
          // @ts-ignore
          onClose: onClose,
          onNetworkChange: onNetworkChange,
        }}
      >
        <>
          {children}
          {showDialog && (
            <Modal
              title="Sign in your wallet"
              open={showDialog}
              onCancel={() => setShowDialog(false)}
            >
              <div className="flex flex-col items-center">
                <div className="flex text-center my-6 leading-6 text-base">
                  Your wallet session has expired or has been logged out for security reasons.
                  Please log in again.
                </div>
                <button
                  onClick={() => connectWallet(applicationName)}
                  type="button"
                  style={{
                    marginTop: '1rem',
                    color: 'white',
                    backgroundColor: '#3b82f6', // bg-blue-700
                    fontWeight: '500', // font-medium
                    borderRadius: '0.5rem', // rounded-lg
                    fontSize: '0.875rem', // text-sm
                    padding: '0.5rem 1.25rem', // px-5 py-2.5
                    marginRight: '0.5rem', // me-2
                    marginBottom: '0.5rem', // mb-2
                    outline: 'none', // focus:outline-none
                    // hover and focus ring styles cannot be added as inline styles
                  }}
                >
                  Sign in
                </button>
              </div>
            </Modal>
          )}
        </>
      </CommunicationAppProvider>
    </MyContext.Provider>
  );
};

export default AccountProvider;
