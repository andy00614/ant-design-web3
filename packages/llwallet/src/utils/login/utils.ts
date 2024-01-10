import CryptoJS from 'crypto-js';

export function deCrypto(encryptedMessage: string, key: string) {
  if (!encryptedMessage || typeof encryptedMessage !== 'string') {
    console.error('encryptedMessage is empty or not a string');
  }
  if (!key || typeof key !== 'string') {
    console.error('key is empty or not a string');
  }
  if (typeof window === 'undefined') {
    console.error('This script is running in Node.js');
    return;
  }

  const bytes = CryptoJS.AES.decrypt(decodeURIComponent(encryptedMessage), key);
  let decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

  decryptedMessage = decryptedMessage.replace(/ /g, '+');
  return decryptedMessage;
}
