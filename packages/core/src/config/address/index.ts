import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0xDD1A741c2B001157A6786539179246372918bB1A',
    Item: '0xb6EF003e313C503b47F99EcE12E04AE56776B327',
    GGC: '0x7EF9296a5a66889cd419C4b7945ADEeD83947df6',
    CrossChain: '0xcDFA9a75093f854b2fd30Fb372D7Dca86d469A75',
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
