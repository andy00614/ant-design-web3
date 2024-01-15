import type { Chain } from '@levellink/web3-common';
import { BSCCircleColorful, EthereumCircleColorful } from '@levellink/web3-icons';
import { defineChain } from 'viem';
import { bsc, bscTestnet, sepolia } from 'wagmi/chains';

export const createGetBrowserLink = (url: string) => (address: string, type: string) => {
  if (type === 'address') {
    return `${url}/address/${address}`;
  } else if (type === 'transaction') {
    return `${url}/tx/${address}`;
  }
  throw new Error(`getBrowserLink unsupported type ${type}`);
};

export enum ChainIds {
  Mainnet = 1,
  Polygon = 137,
  BSC = 56,
  Arbitrum = 42_161,
  Optimism = 10,
  Goerli = 5,
  Avalanche = 43_114,
  Sepolia = 11155111,
  BSCTestNet = 97,
  DEVELOP = 141319,
}

export const BSC: Chain = {
  id: ChainIds.BSC,
  name: 'BSC MainNet',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://bscscan.com'),
  },
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const BSCTestNet: Chain = {
  id: ChainIds.BSCTestNet,
  name: '币安测试网',
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://testnet.bscscan.com'),
  },
  nativeCurrency: { decimals: 18, name: 'TBNB', symbol: 'TBNB' },
};

export const DEVELOP_CHAIN: Chain = {
  id: ChainIds.DEVELOP,
  name: 'WDT测网',
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://whyindian.ddns.net'),
  },
  nativeCurrency: { decimals: 18, name: 'GGC', symbol: 'GGC' },
};

export const Sepolia: Chain = {
  id: ChainIds.Sepolia,
  name: 'eth-sepolia',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://sepolia.etherscan.io'),
  },
  nativeCurrency: { name: 'Sepolia ETH', symbol: 'Sepolia ETH', decimals: 18 },
};

const chainConfigWithDevChain = defineChain({
  id: ChainIds.DEVELOP,
  name: '开发测试链',
  network: 'develop chain',
  nativeCurrency: {
    decimals: 18,
    name: 'GGC',
    symbol: 'GGC',
  },
  rpcUrls: {
    default: { http: ['https://whyindian.ddns.net/'] },
    public: { http: ['https://whyindian.ddns.net/'] },
  },
  blockExplorers: {
    etherscan: { name: 'developScan', url: 'https://testnet.bscscan.com' },
    default: { name: 'developScan', url: 'https://testnet.bscscan.com' },
  },
  testnet: true,
});

export const CHAINS_FOR_PROVIDER = [DEVELOP_CHAIN, BSC, BSCTestNet, Sepolia];

export const CHAINS_FOR_WAGMI: Chain[] = [
  chainConfigWithDevChain,
  { ...sepolia, ...Sepolia },
  { ...bsc, ...BSC },
  { ...bscTestnet, ...BSCTestNet },
];
