import { metadata_CoinbaseWallet } from '@levellink/web3-assets';
import { type Wallet } from '@levellink/web3-common';

import type { WalletFactory } from '../interface';

export const CoinbaseWallet: WalletFactory = {
  name: 'Coinbase Wallet',
  create: (): Wallet => {
    return {
      ...metadata_CoinbaseWallet,
      hasWalletReady: async () => {
        return true;
      },
    };
  },
};
