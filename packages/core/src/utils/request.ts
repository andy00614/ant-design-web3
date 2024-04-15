import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

import { encrypt } from './crypto';
import { getNaMs } from './time';

export interface TConfig {
  baseURL: string;
  tokenName: string;
  encryptBlackList: string[];
  publicKey: string;
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
  return { jwtToken, authentication };
}

const requestCache: Record<string, { requestId: string; timestamp: number }> = {};
const MAX_CACHE_SIZE = 100; // 请求缓存的最大大小
const CACHE_EXPIRATION_TIME = 5000; // 请求缓存的过期时间（毫秒）

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

    const requestId = getNaMs().toString();
    const cacheKey = `${completeUrl}_${JSON.stringify(data)}_${JSON.stringify(headers)}`;

    // 检查请求缓存中是否已存在相同的请求地址和 requestId
    if (requestCache[cacheKey] && requestCache[cacheKey].requestId === requestId) {
      const currentTime = Date.now();
      const cachedTime = requestCache[cacheKey].timestamp;

      if (currentTime - cachedTime <= CACHE_EXPIRATION_TIME) {
        // 如果请求缓存中的请求未过期，则跳过该请求
        console.warn(
          `Duplicate request detected for ${cacheKey} with requestId: ${requestId}. Skipping the request.`,
        );
        return Promise.resolve(null as any);
      } else {
        // 如果请求缓存中的请求已过期，则从缓存中移除
        delete requestCache[cacheKey];
      }
    }

    // 将请求添加到请求缓存中
    requestCache[cacheKey] = { requestId, timestamp: Date.now() };

    // 如果请求缓存的大小超过了最大限制，则移除最早添加的请求缓存
    if (Object.keys(requestCache).length > MAX_CACHE_SIZE) {
      const oldestCacheKey = Object.keys(requestCache)[0];
      delete requestCache[oldestCacheKey];
    }

    const options: AxiosRequestConfig = {
      url: completeUrl,
      method,
      headers: {
        ...headerWithAuth,
        networkId: localStorage.getItem('nodeId'),
        requestId,
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
        config.noAuthCallback?.();
      } else if (status >= 400 && status < 600) {
        const message = (error as any)?.response?.data?.message || '未知错误';
        toast?.(`错误 ${status}: ${message}`, 'error');
      }
      console.error(error);
      throw error;
    }
  };
}
