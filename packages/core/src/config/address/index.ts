import { ChainIds } from '../chains';

export type TAddressObj = Record<'Item' | 'GGC' | 'Node' | 'Market' | 'CrossChain', string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Item: '0x708C1e9715077916a2e2D61c38181186d480714C',
    GGC: '0x2bD4b92BE7a436DC043Dfd4710D5cBE52C94d39b',
    Node: '0x7A4d9623B0e9D2F59F8311f6A9D072c5351E57ca',
    Market: '0xd87f89Afaa80f40F6Be59c75a359941F1495768b',
    CrossChain: '0x7694eF167eD9A743aEf17673DB97F3b4AD8Bc5A3',
  },
  [ChainIds.BSCTestNet]: {
    Item: '0xE796317ad02D500F9704b6dF624D44c3723b117f',
    GGC: '0xAEEFAde6321763c6a6062A7E5F8E62073A46fBF4',
    Node: '0x628E1aE3389b0b51eEf9C689673164cdD188C825',
    Market: '0xA42a63745182fc175Fc4F519439423f4E61561Aa',
    CrossChain: '',
  },
  [ChainIds.Sepolia]: {
    Item: '0x7A72f4283d4a7125afA7DA47f122fA09621C630F',
    GGC: '0x1785b2C2B206aBd4F5C504597d0a4294a7fF58C2',
    Node: '0x2593eBdf5B417804C93af5A5A05e32e5f9f6033c',
    Market: '0xA8337F9BbA23382F5d0f12595e3bA76e6b5B8B80',
    CrossChain: '0x231319E85DD32a636615e89D75E9798A5D6950Ac',
  },
};
