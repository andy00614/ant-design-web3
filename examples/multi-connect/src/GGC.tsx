import { useEffect } from 'react';
import { Button, Card, message } from 'antd';
import { formatEther, parseEther } from 'viem';
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi';

import ERC20ABI from './abi/erc20.json';
import NODEABI from './abi/node.json';
import { contractAddress } from './const';
import styles from './index.module.css';

const gameAddress = '0xa34357486224151ddfdb291e13194995c22df505';
function GGC() {
  const { address, isConnected } = useAccount();
  const {
    data: allowance,
    isLoading,
    refetch,
  } = useContractRead({
    address: contractAddress.ERC20 as `0x${string}`,
    abi: ERC20ABI,
    functionName: 'allowance',
    args: [address, contractAddress.NODE as `0x${string}`],
  });

  const {
    data: resouceInResult,
    write: resourceIn,
    status: resouceInStatus,
  } = useContractWrite({
    address: contractAddress.NODE as `0x${string}`,
    abi: NODEABI,
    functionName: 'resourceIn',
  });

  const {
    data: approveResult,
    status: approveStatus,
    write: makeApprove,
  } = useContractWrite({
    address: contractAddress.ERC20 as `0x${string}`,
    abi: ERC20ABI,
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
    await makeApprove({ args: [contractAddress.NODE, parseEther('100')] });
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

  console.log('allowance', allowance, allowanceNumber);
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
    </Card>
  );
}

export default GGC;
