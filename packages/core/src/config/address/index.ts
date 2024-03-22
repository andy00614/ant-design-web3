import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0xDB622eF43ff9fa6C4c14E178d4BE53c5d0393d0D',
    Item: '0xDA268Abe730c8Ab3A8C4CbA5a2F66CdaFe887592',
    GGC: '0xFd4f5829743F55686acAF7eE17e47fE2504056b8',
    CrossChain: '0x79391E1Ba8f7A414D2C062bA22B36e369c76560B',
  },
  [ChainIds.BSCTestNet]: {
    Node: '0x5862b008d4c5a74c33Cd5B23B7C6bC5dB879740B',
    Item: '0x443Ceae0BbcD3a1D39CB9018DB8F75f470314bD0',
    GGC: '0x95164B7EB0A505ECC3011cb623EBC2339D3c2dea',
    CrossChain: '0x5E6f359b7Fd0a09E4F5a6371c4Bf4453fdD71B6e',
  },
  [ChainIds.Sepolia]: {
    Node: '0xd35cBAA35897C805E8ECb84Ee4466b0E13880F77',
    Item: '0x160128af1ea7939c21910F7D852392572C61D0DE',
    GGC: '0x2311482911770C91fae5c39CBbC368fcc51300e7',
    CrossChain: '0x5D17A5a7B7176878c8F9CD276833cC3816A6b324',
  },
};
