import { useContractWrite } from 'wagmi';

import contractABI from './abi.json';

const contractAddress = '0xb322311c483212ee14466C3A9ea7FbdeCFD1Fc87';

export function useMintToken() {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'mint',
    args: [],
  });
  return {
    write,
  };
}
