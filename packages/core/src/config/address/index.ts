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
    Node: '0xD8FF9F1590dF7c80Df144F113DB36b8b8c1f79fC',
    Item: '0x40A2a78148f9708F7A803e9f4762D85dF1AD73E2',
    GGC: '0x451493C2fa7421DEbb8F5B05038b5548AcE903bC',
    CrossChain: '0x12f100144DDB7aAe104F99c61b6A9aA676592568',
  },
  [ChainIds.BSC]: {
    Node: '0x7Aa858A3Dc72caDDe3D52Fe791Bd9f0BdC7C4304',
    Item: '0x0862f28Ca9905Dc47F67Efc41cC910cF8cBF0CC6',
    GGC: '0xf4B1Bff3BCfd0b394e8eD7D348Cb5d79A53840FD',
    CrossChain: '0x5552164cD27c3321ADa14C5dBf34d8B6d4f6c8d5',
  },
};
