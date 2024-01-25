import { ABI_GGC, ABI_NODE } from '@levellink/core';
import { useContractRead, usePrepareContractWrite } from 'wagmi';

import { useCurrentChain } from './useCurrentChainInfo';

export function useGGCContractRead(functionName: string, args?: any[]) {
  const { currentAddressObj } = useCurrentChain();
  console.log('currentAddressObj', currentAddressObj);
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

export function useNodeContractPrepareWrite(functionName: string, args?: any[]) {
  const { currentAddressObj } = useCurrentChain();
  const res = usePrepareContractWrite({
    address: currentAddressObj.Node as `0x${string}`,
    abi: ABI_NODE,
    functionName,
    args,
  });
  return {
    ...res,
  };
}
