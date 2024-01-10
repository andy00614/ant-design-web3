import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

import { encrypt } from './crypto';

export interface TConfig {
  baseURL: string;
  tokenName: string;
  encryptBlackList: string[];
  publickKey: string;
  noAuthCallback?: () => void;
  toast?: (text: string, type: 'success' | 'error' | 'info' | 'warning') => void;
}

export function getAuthorizationAndToken(token: string) {
  if (typeof token !== 'string' || !token.includes('.')) {
    console.error('Invalid token format');
    return { jwtToken: '', authentication: '' };
  }

  const parts = token.split('.');
  const authentication = parts.length > 0 ? decodeURIComponent(parts[0]) : '';
  const jwtToken = parts.length > 1 ? decodeURIComponent(parts.slice(1).join('.')) : '';

  return {
    jwtToken,
    authentication,
  };
}

export function createRequest(config: TConfig) {
  const { baseURL, publickKey, tokenName, toast } = config;
  return async <T>(
    url: string,
    method: AxiosRequestConfig['method'] = 'GET',
    data: any = null,
    headers: AxiosRequestConfig['headers'] = {},
    // @ts-ignore
  ): Promise<T> => {
    const token = Cookies.get(tokenName) || localStorage.getItem(tokenName);
    const { jwtToken, authentication } = getAuthorizationAndToken(token!);
    const completeUrl = url.includes('/root') ? url.replace('/root', '') : `${baseURL}${url}`;
    const encryptAuthorization = await encrypt(`${authentication}_${Date.now()}`, publickKey);
    const encryptBlackList = ['/blockchain/mnemonic', '/blockchain/encryptKey', '/network/list'];

    let headerWithAuth;

    if (encryptBlackList.includes(url)) {
      headerWithAuth = {
        ...headers,
        token: jwtToken,
      };
    } else {
      headerWithAuth = {
        ...headers,
        token: jwtToken,
        Authorization: encryptAuthorization,
      };
    }
    const options: AxiosRequestConfig = {
      url: completeUrl,
      method,
      headers: {
        ...headerWithAuth,
        networkId: localStorage.getItem('nodeId'),
        requestId:
          Date.now().toString() + completeUrl.slice(-4) + Math.floor(Math.random() * 100000),
      },
      withCredentials: false,
    };

    if (data && method === 'POST') options.data = data;

    if (data && method === 'GET') options.params = data;

    try {
      const response = await axios(options);
      if (response.data.code !== 200) {
        if (response.data.code === 999) {
          toast?.('系统错误，请联系管理员', 'error');
        } else {
          toast?.(response.data.message, 'error');
        }
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (error) {
      const status = (error as any)?.response?.status;

      if (status === 401) {
        toast?.('Authentication failed, redirecting to the homepage.', 'error');
        setTimeout(() => {
          localStorage.clear();
          config.noAuthCallback?.();
        }, 2000);
      } else if (status >= 400 && status < 600) {
        // 处理 4xx 和 5xx 状态码
        const message = (error as any)?.response?.data?.message || '未知错误';
        toast?.(`错误 ${status}: ${message}`, 'error');
      }

      console.error(error);
      throw error;
    }
  };
}
