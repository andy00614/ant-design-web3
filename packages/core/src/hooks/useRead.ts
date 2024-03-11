import { useEffect } from 'react';
import { useReadContract, type UseReadContractParameters } from 'wagmi';

import type { TContractType } from '../type';
import useAddressAndAbi from './useAddressAndAbi';

export function useContractRead(contractType: TContractType, obj: UseReadContractParameters) {
  const { contractAddress, abi } = useAddressAndAbi(contractType);
  if (!contractAddress) {
    throw new Error(`Address for ${contractType} contract not found.`);
  }

  if (!abi) {
    throw new Error(`ABI for ${contractType} contract not found.`);
  }

  const result = useReadContract({
    address: contractAddress as `0x${string}`,
    abi,
    ...obj,
  });

  useEffect(() => {
    if (result.isError) {
      console.error('Error in useContractRead', result.error);
    }
  }, [result.isError]);

  return result;
}

export const useGGCContractRead = (target: UseReadContractParameters) =>
  useContractRead('GGC', target);
export const useItemContractRead = (target: UseReadContractParameters) =>
  useContractRead('Item', target);
export const useNodeContractRead = (target: UseReadContractParameters) =>
  useContractRead('Node', target);
