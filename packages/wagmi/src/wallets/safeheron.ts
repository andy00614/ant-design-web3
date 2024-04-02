import { metadata_Safeheron } from '@levellink/web3-assets';
import { type Wallet } from '@levellink/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory } from '../interface';

export const SafeheronWallet: WalletFactory = {
  name: 'Safeheron',
  create: (connector): Wallet => {
    return {
      ...metadata_Safeheron,
      hasWalletReady: async () => {
        return !!(connector as Connector)?.ready;
      },
      hasExtensionInstalled: async () => {
        return !!(connector as Connector)?.ready;
      },
    };
  },
};
