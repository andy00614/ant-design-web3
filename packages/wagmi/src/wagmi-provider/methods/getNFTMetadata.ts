import { fillAddressWith0x, requestWeb3Asset, type NFTMetadata } from '@levellink/web3-common';
import { readContract } from '@wagmi/core';

export async function getNFTMetadata(
  address: string,
  tokenId: bigint,
  chainId?: number,
): Promise<NFTMetadata> {
  const tokenURI = await readContract({
    address: fillAddressWith0x(address),
    args: [tokenId],
    chainId,
    abi: [
      {
        name: 'tokenURI',
        inputs: [
          {
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        outputs: [{ name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'tokenURI',
  });
  const metaInfo = await requestWeb3Asset(tokenURI as string);
  return metaInfo;
}
