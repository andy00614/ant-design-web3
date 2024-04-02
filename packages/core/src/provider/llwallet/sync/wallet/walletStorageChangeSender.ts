import type { StorageEventEnum } from '../../../..';
import { storageEventName } from '../../../..';

export interface TStorageSender {
  type: StorageEventEnum;
  timestamp: string;
  value?: string;
}

export function walletStorageChangeSender(type: StorageEventEnum, value?: string) {
  const data: TStorageSender = {
    type,
    timestamp: Date.now().toString(),
    value,
  };
  localStorage.setItem(storageEventName, JSON.stringify(data));
}
