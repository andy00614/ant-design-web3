import { deCrypto } from './utils';

const iFrameId = 'info-iframe';

export const genIframe = () => {
  if (document.getElementById(iFrameId)) {
    console.warn('An iframe with the same ID already exists.');
    return;
  }

  const container = document.createElement('div');
  container.id = iFrameId;
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.width = '90%';
  container.style.height = '60%';
  container.style.border = '2px solid #000';
  container.style.overflow = 'hidden';
  container.style.background = '#fff';
  container.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.1)';

  const iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.src = `${URL}/wallet/authorization?type=iframe`;

  const closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.right = '10px';
  closeButton.style.top = '10px';
  closeButton.style.padding = '5px 10px';
  closeButton.style.border = 'none';
  closeButton.style.background = '#f00';
  closeButton.style.color = '#fff';
  closeButton.style.cursor = 'pointer';
  closeButton.style.zIndex = '10';
  closeButton.addEventListener('click', () => {
    const iframeContainer = document.getElementById(iFrameId);
    if (iframeContainer) {
      document.body.removeChild(iframeContainer);
    } else {
      console.warn('Failed to remove iframe container: element not found.');
    }
  });

  container.appendChild(iframe);
  container.appendChild(closeButton);
  document.body.appendChild(container);
};

export const listenWallet = (callback: Function, decryptKey: string) => {
  if (typeof window === 'undefined') {
    console.warn('This script is running in Node.js');
    return;
  }

  window.addEventListener('message', async (event) => {
    const { publicKey, ...authInfo } = event.data;
    const decryptedParams = await Promise.all(
      Object.entries(authInfo).map(async ([key, value]: any) => {
        const decryptedValue = await deCrypto(value, decryptKey);
        return [key, decryptedValue];
      }),
    );
    const decryptedObj = Object.fromEntries(decryptedParams);

    if (publicKey) {
      const iframeContainer = document.getElementById(iFrameId);
      if (iframeContainer) {
        document.body.removeChild(iframeContainer);
        callback(decryptedObj);
      } else {
        console.warn('Failed to remove iframe container: element not found.');
      }
    }
  });
};

export const openIframe = () => {
  const iframe = document.getElementById(iFrameId);
  if (iframe) {
    iframe.style.display = 'block';
    iframe.style.width = '90%';
    iframe.style.height = '50%';
    iframe.style.position = 'fixed';
    iframe.style.top = '40%';
  } else {
    console.warn('Failed to open iframe: element not found.');
  }
};
