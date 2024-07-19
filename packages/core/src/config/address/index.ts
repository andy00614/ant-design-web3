import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0x0AD61A3312aB48d24B714DB368d2F9AE03A39f31',
    Item: '0x1dAFAf1b2afCe7CD8B985Ed7e98f491043efB542',
    GGC: '0x281Ff91326C020206D8B472c4De657413a35829D',
    CrossChain: '0x352A40cc430d8d87fCbA44516a583e424567F9Dd',
    MarketPlace: '0x612272a323776ea72F13f1c794D026B7Ac3a44d6',
  },
  [ChainIds.BSCTestNet]: {
    Node: '0x57712Ed608cB7470DBBce3F2E0643588bE7CF50f',
    Item: '0x3FB236F17054c24DB20FDf6135Ce334DE7451928',
    GGC: '0xC376Ef652f7559eE5cA942663d90242225309027',
    CrossChain: '0xE166045b3A5f656f43Cb2369eC828e049f7FC769',
    MarketPlace: '0x9058D8d9b486192E5c2235c1E915c9D67E1EF45d',
  },
  [ChainIds.Sepolia]: {
    Node: '0xD8FF9F1590dF7c80Df144F113DB36b8b8c1f79fC',
    Item: '0x40A2a78148f9708F7A803e9f4762D85dF1AD73E2',
    GGC: '0x451493C2fa7421DEbb8F5B05038b5548AcE903bC',
    CrossChain: '0x12f100144DDB7aAe104F99c61b6A9aA676592568',
    MarketPlace: '',
  },
  [ChainIds.BSC]: {
    Node: '0x7Aa858A3Dc72caDDe3D52Fe791Bd9f0BdC7C4304',
    Item: '0x0862f28Ca9905Dc47F67Efc41cC910cF8cBF0CC6',
    GGC: '0xf4B1Bff3BCfd0b394e8eD7D348Cb5d79A53840FD',
    CrossChain: '0x5552164cD27c3321ADa14C5dBf34d8B6d4f6c8d5',
    MarketPlace: '',
  },
};
