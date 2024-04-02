import { metadata_MetaMask } from '@levellink/web3-assets';
import { type Wallet } from '@levellink/web3-common';

import type { WalletFactory } from '../interface';

export const MetaMask: WalletFactory = {
  name: 'MetaMask',
  create: (): Wallet => {
    return {
      ...metadata_MetaMask,
      hasWalletReady: async () => {
        return !!window.ethereum?.isMetaMask;
      },
      hasExtensionInstalled: async () => {
        return !!window.ethereum?.isMetaMask;
      },
    };
  },
};
