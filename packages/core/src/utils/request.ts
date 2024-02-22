import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

import { encrypt } from './crypto';
import { getNaMs } from './time';

export interface TConfig {
  baseURL: string;
  tokenName: string;
  encryptBlackList: string[];
  publicKey: string; // 更正拼写
  noAuthCallback?: () => void;
  toast?: (text: string, type: 'success' | 'error' | 'info' | 'warning') => void;
}

// 状态码常量
const STATUS_CODE = {
  OK: 200,
  SYSTEM_ERROR: 999,
  AUTH_FAILED: 401,
  // ...其他状态码
};

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
  const { baseURL, publicKey, tokenName, toast } = config;

  return async <T>(
    url: string,
    method: AxiosRequestConfig['method'] = 'GET',
    data: any = null,
    headers: AxiosRequestConfig['headers'] = {},
  ): Promise<T> => {
    const token = Cookies.get(tokenName) || localStorage.getItem(tokenName);
    const { jwtToken, authentication } = getAuthorizationAndToken(token || '');
    const completeUrl = url.includes('/root') ? url.replace('/root', '') : `${baseURL}${url}`;
    const encryptAuthorization = jwtToken
      ? await encrypt(`${authentication}_${Date.now()}`, publicKey)
      : '';

    const headerWithAuth = { ...headers, token: jwtToken };
    if (!config.encryptBlackList.includes(url)) {
      // @ts-ignore
      headerWithAuth.Authorization = encryptAuthorization;
    }

    const options: AxiosRequestConfig = {
      url: completeUrl,
      method,
      headers: {
        ...headerWithAuth,
        networkId: localStorage.getItem('nodeId'),
        requestId: getNaMs(),
      },
      withCredentials: false,
    };

    if (data && (method === 'POST' || method === 'PUT' || method === 'DELETE')) {
      options.data = data;
    }

    if (data && method === 'GET') {
      options.params = data;
    }

    try {
      const response = await axios(options);
      if (response.data.code !== STATUS_CODE.OK) {
        if (response.data.code === STATUS_CODE.SYSTEM_ERROR) {
          toast?.('系统错误，请联系管理员', 'error');
        } else {
          toast?.(response.data.message, 'error');
        }
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (error) {
      const status = (error as any)?.response?.status;
      if (status === STATUS_CODE.AUTH_FAILED) {
        toast?.('Authentication failed, redirecting to the homepage.', 'error');
        setTimeout(() => {
          localStorage.clear();
          config.noAuthCallback?.();
        }, 2000);
      } else if (status >= 400 && status < 600) {
        const message = (error as any)?.response?.data?.message || '未知错误';
        toast?.(`错误 ${status}: ${message}`, 'error');
      }

      console.error(error);
      throw error;
    }
  };
}
