import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0x37D5EfE4620A3960d89cAeCba554EA686aD352c8',
    Item: '0x0E3d1E2a733190C3C0063BC1605D3DBC3FC25cB9',
    GGC: '0x1C33ee37b989b3AAE63D577A6Dd896C2A4a5B94F',
    CrossChain: '0x27f25Fb760f61c9954Ad5Dc2C1BE75095170cbBe',
  },
  [ChainIds.BSCTestNet]: {
    Node: '0x3C36AEe39fAC113264DAA979FC0f203097498007',
    Item: '0xED1E6Cf2B510Eff7df075574EBB127eCEADA2BC2',
    GGC: '0x9fbCDA81905Cf0aD562C43Eb3C99c91B424342A0',
    CrossChain: '0x46396bF5D9dE1664418CE080957577669B72917c',
  },
  [ChainIds.Sepolia]: {
    Node: '0xC63Dcf36B0965564841AeB0b4Ec9092F1857563a',
    Item: '0x1A441EDfBE0c32179e758723cCA05ae70b71e36E',
    GGC: '0x3EF95027836e8c35d1Fa3900eBfA1f553871A78E',
    CrossChain: '0xD36a7C371B05309b73E57d28b91A8577dD76e47A',
  },
};
