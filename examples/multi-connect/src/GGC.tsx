import { Button, Card } from 'antd';
import { formatGwei, parseGwei } from 'viem';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';

import ERC20ABI from './abi/erc20.json';
import NODEABI from './abi/node.json';
import { contractAddress } from './const';
import styles from './index.module.css';

function GGC() {
  const { address } = useAccount();
  const { data: allowance, isLoading } = useContractRead({
    address: contractAddress.ERC20 as `0x${string}`,
    abi: ERC20ABI,
    functionName: 'allowance',
    args: [address, contractAddress.ERC20 as `0x${string}`],
  });

  const { write: resourceIn } = useContractWrite({
    address: contractAddress.NODE as `0x${string}`,
    abi: NODEABI,
    functionName: 'resourceIn',
  });

  const {
    status: approveStatus,
    isLoading: approveLoading,
    write: makeApprove,
  } = useContractWrite({
    address: contractAddress.ERC20 as `0x${string}`,
    abi: ERC20ABI,
    functionName: 'approve',
  });

  const handleDeposite = async () => {
    await makeApprove({ args: [address, parseGwei('100')] });
  };

  const handleResourceIn = async () => {
    await resourceIn({
      args: ['0xa34357486224151ddfdb291e13194995c22df505', parseGwei('100')],
    });
  };

  return (
    <Card className={styles.space}>
      <div className={styles.space}>
        allowance: {isLoading ? 'loading...' : formatGwei(allowance as bigint)}
      </div>
      <Button style={{ marginRight: '12px' }} onClick={handleDeposite}>
        Apprve 100GGC
      </Button>
      <Button onClick={handleResourceIn}>deposit 100GGC</Button>
      <div className={styles.space}>approveStatus: {approveStatus}</div>
    </Card>
  );
}

export default GGC;
