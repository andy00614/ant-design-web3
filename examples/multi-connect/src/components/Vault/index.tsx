import { useEffect } from 'react';
import { ABI_GGC, ABI_NODE, contractAddresses, DEFAULT_CHAIN_ID } from '@levellink/core';
import { Button, Card, message } from 'antd';
import { formatEther, parseEther } from 'viem';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from 'wagmi';

import styles from './index.module.css';

const gameAddress = '0xa34357486224151ddfdb291e13194995c22df505';

function GGC() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const chainId = (chain?.id || DEFAULT_CHAIN_ID) as number;
  const currentAddressObj = contractAddresses[chainId];

  const {
    data: allowance,
    isLoading,
    refetch,
  } = useContractRead({
    // TODO: 这里的address需要根据选择的链不同，动态的去替换
    address: currentAddressObj.GGC as `0x${string}`,
    abi: ABI_GGC,
    functionName: 'allowance',
    args: [address, currentAddressObj.Node as `0x${string}`],
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

  const {
    data: approveResult,
    status: approveStatus,
    write: makeApprove,
    error: approveError,
    isError: isApproveError,
  } = useContractWrite({
    address: currentAddressObj.GGC as `0x${string}`,
    abi: ABI_GGC,
    functionName: 'approve',
  });

  const { isLoading: isLoadingForApprove, isSuccess: isSuccessForApprove } = useWaitForTransaction({
    hash: approveResult?.hash,
  });

  const { isLoading: loadingForResouceIn, isSuccess: isSuccessForResourceIn } =
    useWaitForTransaction({
      hash: resouceInResult?.hash,
    });

  useEffect(() => {
    if (isSuccessForApprove) {
      message.success('approve success');
      refetch();
    }
  }, [isSuccessForApprove]);

  useEffect(() => {
    if (isSuccessForResourceIn) {
      message.success('deposite success');
      refetch();
    }
  }, [isSuccessForResourceIn]);

  const handleDeposite = async () => {
    await makeApprove({ args: [currentAddressObj.Node, parseEther('100')] });
  };

  const handleResourceIn = async () => {
    await resourceIn({
      args: [gameAddress, parseEther('100')],
    });
  };

  if (!isConnected) {
    return <div />;
  }

  const allowanceNumber = allowance ? formatEther(allowance as bigint) : 0;

  const renderAllowance = (_isLoading: boolean) => {
    if (_isLoading) {
      return 'loading...';
    }
    if (allowance) {
      return allowanceNumber;
    }
    return '0';
  };

  return (
    <Card className={styles.space}>
      <div className={styles.space}>allowance: {renderAllowance(isLoading)} GGC</div>
      <Button
        disabled={!isConnected}
        loading={isLoadingForApprove}
        style={{ marginRight: '12px' }}
        onClick={handleDeposite}
      >
        {isLoadingForApprove ? 'Approving' : 'Approve 100GGC'}
      </Button>
      <Button
        loading={loadingForResouceIn}
        disabled={!(allowanceNumber && Number(allowanceNumber) >= 100) || !isConnected}
        onClick={handleResourceIn}
      >
        {loadingForResouceIn ? 'Depositing' : 'Deposite 100GGC'}
      </Button>
      <div className={styles.space}>approveStatus: {approveStatus}</div>
      <div className={styles.space}>resouceInStatus: {resouceInStatus}</div>
      {(isApproveError || approveError) && (
        <p style={{ color: 'red' }}>Error: {approveError?.message}</p>
      )}
      {(isResouceInError || resouceInError) && (
        <p style={{ color: 'red' }}>Error: {resouceInError?.message}</p>
      )}
    </Card>
  );
}

export default GGC;
