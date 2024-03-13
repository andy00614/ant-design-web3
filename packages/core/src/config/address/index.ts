import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0xc384f415B16dB2468fb8A335eD55e5C8779dD3c9',
    Item: '0xA1D396579F5d8CB5AC114F4e42CbFBdD950266e2',
    GGC: '0x66C04dE21F242A0A24e0d851E6D396348B3aA23c',
    CrossChain: '0x8D234675aF7efB79E7Dd158381C662f1963b27F9',
  },
  [ChainIds.BSCTestNet]: {
    Node: '0xA62fcE5B6a8Ee2809fAA4664BC9748018Ddb48E9',
    Item: '0xeB0bD69f2867472C4C863b4777Ed78974789E6BE',
    GGC: '0xd9251127525F78c4Fe38Aa9C37B1C7E7AcF58BD6',
    CrossChain: '0xc88c6c8703CE43F5935820c748FA5f8E1426Fa1D',
  },
  [ChainIds.Sepolia]: {
    Node: '0xed71627e8c3E7d3Ec9772326a965b841670A5E4F',
    Item: '0xb776d077ddDD549b415EB04265a2e6e37e11BfE0',
    GGC: '0x47301a818D66Ae7b8d72e6A89F993C9b72AD5024',
    CrossChain: '0xb87B8A02e57D7f15281b2E8B8dEeC62CB6778317',
  },
};
