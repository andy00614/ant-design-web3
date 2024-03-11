import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0x7557195212c1846640beb486C34797EBBf56DA75',
    Item: '0xE28177a0874f42bc30244Ae48B65507CB97e902d',
    GGC: '0x64677E2D9306eB88fbd183Ac13067A1BF56501dE',
    CrossChain: '0xB74Ac04F3347B27f4105A8b39A04a003937D8Ff3',
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
