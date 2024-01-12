import { Button } from 'antd';
import { useContractWrite } from 'wagmi';

import contractABI from './abi.json';

const contractAddress = '0xe01e8ee9504b6eaef9ce2a79af2ced3761efca19';

function MintNft() {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'mint',
  });

  console.log({ data, isLoading, isSuccess, write });
  return (
    <div style={{ marginTop: '12px' }}>
      <Button onClick={() => write()}>Mint NFT</Button>
    </div>
  );
}

export default MintNft;
