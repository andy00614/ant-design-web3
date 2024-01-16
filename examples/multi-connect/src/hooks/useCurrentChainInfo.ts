import type { TAddressObj } from '@levellink/core';
import { contractAddresses, DEFAULT_CHAIN_ID } from '@levellink/core';
import { useNetwork } from 'wagmi';

export interface TChainResult {
  isSupport: boolean;
  chainAddresses: TAddressObj;
}

export function useCurrentChain() {
  const { chain } = useNetwork();
  const chainId = (chain?.id || DEFAULT_CHAIN_ID) as number;
  const currentAddressObj = contractAddresses[chainId];
  return {
    chain,
    currentAddressObj,
  };
}
