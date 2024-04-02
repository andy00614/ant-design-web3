// 假设你有以下的引入
import { genIframe, listenWallet, openIframe } from './iframe';
import { deCrypto } from './utils';

export function connectWalletForIframe(key: string, callback: Function): void {
  genIframe();
  listenWallet(callback, key);
  openIframe();
}

export const connectWalletForURL = (
  applicationName: string = 'The Application',
  URL: string,
): void => {
  if (typeof window === 'undefined') {
    console.log('This script is running in Node.js');
    return;
  }
  const url: string = URL + '/wallet/authorization';
  let jumpURL: string = url;
  jumpURL +=
    '?redirect_uri=' + encodeURIComponent(location.origin + location.pathname + location.search);
  jumpURL += '&game_name=' + encodeURIComponent(applicationName);
  jumpURL += '&type=' + encodeURIComponent('url');
  window.open(jumpURL, '_self');
};

function getAllQueryParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const regex: RegExp = /[?&]([^=#]+)=([^&#]*)/g;
  let match: RegExpExecArray | null;
  const isMatch = (match = regex.exec(url));
  while (isMatch) {
    params[decodeURIComponent(match ? match[1] : '')] = decodeURIComponent(match ? match[2] : '');
  }
  return params;
}

const getDecryptoKey = async (
  url: string,
  decryptKey: string,
): Promise<Record<string, string> | null> => {
  const params = getAllQueryParams(url);
  try {
    const decryptedParams: [string, string][] = await Promise.all(
      Object.entries(params).map(async ([key, value]) => {
        const decryptedValue: any = await deCrypto(value, decryptKey);
        return [key, decryptedValue];
      }),
    );
    const decryptedObj: Record<string, string> = Object.fromEntries(decryptedParams);
    return decryptedObj;
  } catch (error) {
    console.error('Error decrypting parameters:', error);
    return null;
  }
};

export { genIframe, listenWallet, openIframe, getAllQueryParams, getDecryptoKey, deCrypto };
