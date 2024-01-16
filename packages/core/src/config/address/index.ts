import { ChainIds } from '../chains';

export type TAddressObj = Record<'Item' | 'GGC' | 'Node' | 'Market' | 'CrossChain', string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Item: '0xa660096913E961161c645DCe077bDbb079467500',
    GGC: '0x08e78c476d9adB51A2EC66f4163f5f3F55650a04',
    Node: '0x83C22B7E4befa81b55944e605F17E6C0638502D1',
    Market: '0x08cDA72130cc3d2A5742c9700a228DB9320B9086',
    CrossChain: '0xDd7A00b075ED504adCe38b71A3A809005778Ff49',
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
