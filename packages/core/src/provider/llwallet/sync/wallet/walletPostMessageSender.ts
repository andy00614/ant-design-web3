export function walletPostMessageSender(message: any, targetOrigin: string) {
  window.parent.postMessage(message, targetOrigin);
}
