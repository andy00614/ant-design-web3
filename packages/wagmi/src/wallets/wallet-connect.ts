import { metadata_WalletConnect } from '@levellink/web3-assets';
import { type Wallet } from '@levellink/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory } from '../interface';

export const WalletConnect: WalletFactory = {
  name: 'WalletConnect',
  create: (connector?: Connector | Connector[]): Wallet => {
    const getQrCode = async () => {
      const provider = await (connector as Connector)?.getProvider();
      return new Promise<{ uri: string }>((resolve) => {
        provider.on('display_uri', (uri: string) => {
          resolve({
            uri,
          });
        });
      });
    };
    return {
      ...metadata_WalletConnect,
      hasWalletReady: async () => {
        return true;
      },
      getQrCode: (connector as Connector)?.options.showQrModal === false ? getQrCode : undefined,
    };
  },
};
