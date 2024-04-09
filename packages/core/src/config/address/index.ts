import type { TContractType } from '../../type';
import { ChainIds } from '../chains';

export type TAddressObj = Record<TContractType, string>;
export const contractAddresses: Record<number, TAddressObj> = {
  [ChainIds.DEVELOP]: {
    Node: '0xDD1A741c2B001157A6786539179246372918bB1A',
    Item: '0xb6EF003e313C503b47F99EcE12E04AE56776B327',
    GGC: '0x7EF9296a5a66889cd419C4b7945ADEeD83947df6',
    CrossChain: '0xcDFA9a75093f854b2fd30Fb372D7Dca86d469A75',
  },
  [ChainIds.BSCTestNet]: {
    Node: '0x57712Ed608cB7470DBBce3F2E0643588bE7CF50f',
    Item: '0x3FB236F17054c24DB20FDf6135Ce334DE7451928',
    GGC: '0xC376Ef652f7559eE5cA942663d90242225309027',
    CrossChain: '0xE166045b3A5f656f43Cb2369eC828e049f7FC769',
  },
  [ChainIds.Sepolia]: {
    Node: '0x7a60aC8Ab8199A1f75A5609d61DafDaC842AFf8E',
    Item: '0xce9ac78E568dE69FEaf1DE7f922CC51e53345008',
    GGC: '0x8d16CF861817c37688e6e3c08BA13bd3217A627D',
    CrossChain: '0x4Fa52183D799b5Cf95612Ca4f3e5CFCF8DCE4cd0',
  },
};
