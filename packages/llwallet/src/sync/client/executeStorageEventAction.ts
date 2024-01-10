import { StorageEventEnum } from '../const';
import type { TStorageSender } from '../wallet';

// 根据event.data.type来判断是什么类型的消息，然后做相应的处理
export function executeStorageEventAction(data: TStorageSender) {
  if (data.type === StorageEventEnum.STORAGE_LOGOUT) {
    alert('logout');
  }
  if (data.type === StorageEventEnum.STORAGE_LOCK) {
    alert('lock');
  }
  if (data.type === StorageEventEnum.STORAGE_NETWORK_ID) {
    alert(data.value);
  }
}
