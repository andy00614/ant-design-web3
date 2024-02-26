import { useAccount } from 'wagmi';

import type { TAddressObj } from '../config';
import { contractAddresses, DEFAULT_CHAIN_ID } from '../config';

export interface TChainResult {
  isSupport: boolean;
  chainAddresses: TAddressObj;
}

export function useCurrentChain() {
  const { chain } = useAccount();
  const chainId = (chain?.id || DEFAULT_CHAIN_ID) as number;
  const currentAddressObj = contractAddresses[chainId] || {};
  return {
    chain,
    currentAddressObj,
  };
}
