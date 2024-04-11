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
    Node: '0x54c50514934052Bc45bCb241E39e4D566ecB4cF5',
    Item: '0x42476d30C65C5CC5481A7F61dC3cB3D295Be3eAc',
    GGC: '0x59Baa2B74900Cc72cBD5a4650f338bE707693fb7',
    CrossChain: '0x4F80970b19a52EDB42691F6Abbc2197c68Cf983B',
  },
};
