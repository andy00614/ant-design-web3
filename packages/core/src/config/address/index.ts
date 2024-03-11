import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Item: '0x9385E72A7Bf34dB6EBcca3AD264c000E19394936',
    GGC: '0xb0A1Ddd9F66C7d554bfBeec393211d0B90f0587E',
    Node: '0x85846135EB3F83D3FE4374Baabd5DD3015d3426c',
    CrossChain: '0x7446113F1Ec3Ad7C663d3F8FA39e59ae54Bc31c5',
  },
  [ChainIds.BSCTestNet]: {
    Item: '0x5b7b701893E0287a60D79B7eAD47ff5040c93573',
    GGC: '0x4A9a88B3281572DDa4D16518758b4b0D3BF7ED6b',
    Node: '0x646c6B6D7047f3Ebeb4ebceA9c69f5cCdC91B965',
    CrossChain: '0x933484243fb8BB22994C0AcE171cC6718655b56a',
  },
  [ChainIds.Sepolia]: {
    Item: '0x12aDCa1c59A2FADAbb380734F86F4a30b837Ce14',
    GGC: '0x533Dec7F4C02Df68080A869DDFf6cD2CaD0af8b0',
    Node: '0x75f7e0c756E600c40B5FF016A58FaF1D64966b5f',
    CrossChain: '0xF253e97b41644e7D2c5AeACeA6E7fEB2B729912A',
  },
};
