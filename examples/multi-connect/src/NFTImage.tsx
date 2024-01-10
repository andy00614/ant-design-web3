import { NFTImage } from '@ant-design/web3';

function NFTImageComponent() {
  return (
    <div>
      <NFTImage width={300} address="0x79fcdef22feed20eddacbb2587640e45491b757f" tokenId={8540} />
    </div>
  );
}

export default NFTImageComponent;
