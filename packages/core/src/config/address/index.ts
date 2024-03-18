import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0x96547c3984BfA42B9553f84D880a776Fa4DCfb79',
    Item: '0x1c17CFA5F6Ab595663B9ad19aF12682E68516BA4',
    GGC: '0xD92ecA92602bCBafAE252035502765e900a099E5',
    CrossChain: '0xB308B9Ee0f811e0C0f48a09c32725c851B1A5B06',
  },
  [ChainIds.BSCTestNet]: {
    Node: '0xf28C7dcf617385B55Ae92aAaEc71f8FF78aa7D3A',
    Item: '0x7F374334aa764A8b07266FD799A4916360CcA5f4',
    GGC: '0x4CA5F86347ccfA365A81Bb1F49661fACE4a16d14',
    CrossChain: '0xD1154ea0f3cCE4384E207182A768b7E816A93169',
  },
  [ChainIds.Sepolia]: {
    Node: '0xeb0ef4B4062EF0cb88Fc42e0B4868B1A617ad8BA',
    Item: '0x320f505ef883eddf0823109655171824D4254784',
    GGC: '0xAE7191101578c821C44956b7530bD9Ee0F952BA4',
    CrossChain: '0x65e322b0e053Cb997E5da84619ACF6A2814759F4',
  },
};
