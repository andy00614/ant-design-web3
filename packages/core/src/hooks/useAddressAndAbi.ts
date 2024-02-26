import type { Abi } from 'viem';

import { ABI_GGC, ABI_ITEM, ABI_MARKET, ABI_NODE } from '../config';
import type { TContractType } from '../type';
import { useCurrentChain } from './useCurrentChain';

export default function useAddressAndAbi(contractType: TContractType) {
  const { currentAddressObj } = useCurrentChain();
  const contractAddress = currentAddressObj[contractType];
  const abi = {
    GGC: ABI_GGC,
    Item: ABI_ITEM,
    Node: ABI_NODE,
    Market: ABI_MARKET,
  }[contractType] as Abi;
  return {
    contractAddress,
    abi,
  };
}
