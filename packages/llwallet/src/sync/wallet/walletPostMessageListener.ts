// App向钱包拿状态拿状态
export function walletPostMessageListener(event: MessageEvent) {
  if (event.origin !== '*') {
    return;
  }

  console.log('Message received in Wallet:', event.data);
}
