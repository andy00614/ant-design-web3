import { Button, Card } from 'antd';
import { formatEther, parseEther } from 'viem';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';

import ERC20ABI from './abi/erc20.json';
import NODEABI from './abi/node.json';
import { contractAddress } from './const';
import styles from './index.module.css';

const gameAddress = '0xa34357486224151ddfdb291e13194995c22df505';
function GGC() {
  const { address, isConnected } = useAccount();
  const { data: allowance, isLoading } = useContractRead({
    address: contractAddress.ERC20 as `0x${string}`,
    abi: ERC20ABI,
    functionName: 'allowance',
    args: [address, contractAddress.NODE as `0x${string}`],
  });

  const { write: resourceIn, status: resouceInStatus } = useContractWrite({
    address: contractAddress.NODE as `0x${string}`,
    abi: NODEABI,
    functionName: 'resourceIn',
  });

  const { status: approveStatus, write: makeApprove } = useContractWrite({
    address: contractAddress.ERC20 as `0x${string}`,
    abi: ERC20ABI,
    functionName: 'approve',
  });

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

  return (
    <Card className={styles.space}>
      <div className={styles.space}>
        allowance: {isLoading ? 'loading...' : formatEther(allowance as bigint)} GGC
      </div>
      <Button style={{ marginRight: '12px' }} onClick={handleDeposite}>
        Approve 100GGC
      </Button>
      <Button onClick={handleResourceIn}>deposit 100GGC</Button>
      <div className={styles.space}>approveStatus: {approveStatus}</div>
      <div className={styles.space}>resouceInStatus: {resouceInStatus}</div>
    </Card>
  );
}

export default GGC;
