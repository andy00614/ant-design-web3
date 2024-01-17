import { ABI_GGC } from '@levellink/core';
import { useContractRead } from 'wagmi';

import { useCurrentChain } from './useCurrentChainInfo';

export function useGGCContractRead(functionName: string, args?: any[]) {
  const { currentAddressObj } = useCurrentChain();
  const res = useContractRead({
    address: currentAddressObj.GGC as `0x${string}`,
    abi: ABI_GGC,
    functionName,
    args,
  });
  return {
    ...res,
  };
}
