import { StorageEventEnum } from '../../../..';
import { walletPostMessageSender } from './walletPostMessageSender';

export function walletStorageEventListener(event: StorageEvent) {
  if (event.key !== 'storage_event' || !event.newValue) {
    return;
  }
  const storageData = JSON.parse(event.newValue);

  if (
    storageData &&
    storageData.type &&
    StorageEventEnum[storageData.type as keyof typeof StorageEventEnum]
  ) {
    // TODO: 这里的地址是client的地址
    walletPostMessageSender(storageData, '*');
  }
}

// window.addEventListener('storage', walletStorageEventListener);
