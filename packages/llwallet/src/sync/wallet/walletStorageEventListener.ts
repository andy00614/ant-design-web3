import { StorageEventEnum } from '../const';
import { walletPostMessageSender } from './walletPostMessageSender';

export function walletStorageEventListener(event: StorageEvent) {
  console.log('event from walletStorageEventListener', event);
  if (event.key !== 'storage_event' || !event.newValue) {
    return;
  }
  const storageData = JSON.parse(event.newValue);
  console.log('walletStorageEventListener', storageData);

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
