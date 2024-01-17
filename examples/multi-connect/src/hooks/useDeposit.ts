import { ABI_GGC, ABI_NODE, aggregateErrors } from '@levellink/core';
import { formatEther, parseEther } from 'viem';
import { useContractRead, useContractWrite } from 'wagmi';

import { useCurrentChain } from './useCurrentChainInfo';

export function useDeposit() {
  const { currentAddressObj } = useCurrentChain();

  const {
    data: allowance,
    isLoading,
    refetch,
    error: allowanceError,
    isError: allowanceIsError,
  } = useContractRead({
    address: currentAddressObj.GGC as `0x${string}`,
    abi: ABI_GGC,
    functionName: 'allowance',
  });

  const {
    write: approveInContract,
    isError: isApproveError,
    error: approveError,
  } = useContractWrite({
    address: currentAddressObj.GGC as `0x${string}`,
    abi: ABI_GGC,
    functionName: 'approve',
  });

  const {
    data: resouceInResult,
    write: resourceIn,
    status: resouceInStatus,
    isError: isResouceInError,
    error: resouceInError,
  } = useContractWrite({
    address: currentAddressObj.Node as `0x${string}`,
    abi: ABI_NODE,
    functionName: 'resourceIn',
  });

  const allowanceNumber = allowance ? formatEther(allowance as bigint) : 0;

  const deposit = async (amount: string, gameAddress: string) => {
    if (allowanceNumber < amount) {
      approveInContract({
        args: [currentAddressObj.Node, parseEther(amount.toString())],
      });
      return;
    }
    resourceIn({
      args: [[gameAddress, parseEther(amount.toString())]],
    });
  };

  const aggregatedError = aggregateErrors(allowanceError, approveError, resouceInError);

  return {
    allowance,
    isLoading,
    refetch,
    approveInContract,
    resouceInResult,
    resourceIn,
    deposit,
    resouceInStatus,
    aggregatedError,
    isError: allowanceIsError || isApproveError || isResouceInError,
  };
}
