import { formatEther } from 'viem';
import { useAccount, useBalance } from 'wagmi';

import { useGGCContractRead } from '../../hooks/useLLContractRead';
import renderKV from '../RenderKV';

export default function Balance() {
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address,
  });

  const { data: balance } = useGGCContractRead('balanceOf', [address]);

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      {renderKV('Base Token', `${data?.formatted} ${data?.symbol}`)}
      {renderKV('GGC Balance', `${balance && formatEther(balance as bigint)} GGC`)}
    </div>
  );
}
