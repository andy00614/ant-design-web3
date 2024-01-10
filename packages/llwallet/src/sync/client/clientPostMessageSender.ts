// 主要会send是否登录了
export function clientPostMessageSender(message: any, targetIframe: HTMLIFrameElement) {
  // TODO： * 这里其实应该是钱包的地址
  if (targetIframe && targetIframe.contentWindow) {
    targetIframe.contentWindow.postMessage(message, '*');
  } else {
    console.error('targetIframe is null');
  }
}
