import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0xC21e63f6FFf69cb0805fE774fe2e8c0F63FAA31B',
    Item: '0x8d7993d09622d172eAF4E663EB11884da46F96E4',
    GGC: '0x4D72e79cDe3bad974289a0E21F6aD475e354954E',
    CrossChain: '0x393914322593DCe456Fb110B8F163Df7f5B62F83',
  },
  [ChainIds.BSCTestNet]: {
    Node: '0x57712Ed608cB7470DBBce3F2E0643588bE7CF50f',
    Item: '0x3FB236F17054c24DB20FDf6135Ce334DE7451928',
    GGC: '0xC376Ef652f7559eE5cA942663d90242225309027',
    CrossChain: '0xE166045b3A5f656f43Cb2369eC828e049f7FC769',
  },
  [ChainIds.Sepolia]: {
    Node: '0x99A9A84B1281d1D3Afd74472CA233f7CF3b9091E',
    Item: '0x948F2c759B3724848dC827AD437E1c3dbC391E83',
    GGC: '0xf58E0ed0216A8079e9B48959a669DCC013F25279',
    CrossChain: '0x88744485689E57b582b5C6b6fA8dF4a69a215f28',
  },
};
