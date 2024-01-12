import { useMintToken } from '@levellink/ui';
import { Button } from 'antd';

function MintNft() {
  const { mint } = useMintToken();
  return (
    <div style={{ marginTop: '12px' }}>
      <Button onClick={mint}>Mint NFT</Button>
    </div>
  );
}

export default MintNft;
