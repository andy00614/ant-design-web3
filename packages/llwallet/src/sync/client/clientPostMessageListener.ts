import { executeStorageEventAction } from './executeStorageEventAction';

export function clientPostMessageListener(event: MessageEvent) {
  // TODO: 这里后面要限制是钱包过来的地址才可以
  // if (event.origin !== '*') {
  //   return;
  // }
  // 处理接收到的消息
  executeStorageEventAction(event.data);
}
