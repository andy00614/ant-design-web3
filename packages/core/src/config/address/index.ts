import { ChainIds } from '../chains';

export type TAddressObj = Record<'Item' | 'GGC' | 'Node' | 'Market' | 'CrossChain', string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Item: '0x3461979a90D700A290338957BfB09Fb297694A0e',
    GGC: '0x2bD4b92BE7a436DC043Dfd4710D5cBE52C94d39b',
    Node: '0x7A4d9623B0e9D2F59F8311f6A9D072c5351E57ca',
    Market: '0xd87f89Afaa80f40F6Be59c75a359941F1495768b',
    CrossChain: '0x7694eF167eD9A743aEf17673DB97F3b4AD8Bc5A3',
  },
  [ChainIds.BSCTestNet]: {
    Item: '0xc029D19ee76D57DC3DAFe7816ef237F99198cE0d',
    GGC: '0x9BaC1EFC9A5933F87fEc88E87d951915b256ce63',
    Node: '0xF033B9055f81FB46444695B82381D01b4935890b',
    Market: '0x7CED476aBbB20Dfe7B6eeaE796e5ac94cE1410fA',
    CrossChain: '0xc95Dd21581773A3D38ed5073F5BB710C0b78aF5B',
  },
  [ChainIds.Sepolia]: {
    Item: '0x7A72f4283d4a7125afA7DA47f122fA09621C630F',
    GGC: '0x1785b2C2B206aBd4F5C504597d0a4294a7fF58C2',
    Node: '0xb8C5c606bE163C7747eFfaAcb3a0Bb33D6e0793c',
    Market: '0x816d52979fF205984F6029eF04c5f7b82d0b0252',
    CrossChain: '0xa854A85ED3CDEE4520009dd1A45f8402e8089398',
  },
};
