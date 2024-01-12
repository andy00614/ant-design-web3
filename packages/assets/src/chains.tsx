import { ChainIds, createGetBrowserLink, type Chain } from '@ant-design/web3-common';
import {
  ArbitrumCircleColorful,
  AvalancheCircleColorful,
  BSCCircleColorful,
  EthereumCircleColorful,
  EthereumFilled,
  EtherscanCircleColorful,
  OptimismCircleColorful,
  PolygonCircleColorful,
} from '@ant-design/web3-icons';

export const Mainnet: Chain = {
  id: ChainIds.Mainnet,
  name: 'Ethereum',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EtherscanCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://etherscan.io'),
  },
  nativeCurrency: { icon: <EthereumFilled />, name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Goerli: Chain = {
  id: ChainIds.Goerli,
  name: 'Goerli',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://goerli.etherscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Sepolia: Chain = {
  id: ChainIds.Sepolia,
  name: 'Sepolia',
  icon: <EthereumCircleColorful />,
  browser: {
    icon: <EthereumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://sepolia.etherscan.io'),
  },
  nativeCurrency: { name: 'Sepolia ETH', symbol: 'Sepolia ETH', decimals: 18 },
};

export const Polygon: Chain = {
  id: ChainIds.Polygon,
  name: 'Polygon',
  icon: <PolygonCircleColorful />,
  browser: {
    icon: <PolygonCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://polygonscan.com'),
  },
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
};

export const BSC: Chain = {
  id: ChainIds.BSC,
  name: 'BNB Smart Chain',
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://bscscan.com'),
  },
  nativeCurrency: { decimals: 18, name: 'BNB', symbol: 'BNB' },
};

export const BSCTestNet: Chain = {
  id: ChainIds.BSCTestNet,
  name: 'BNB Smart Chain TestNet',
  icon: <BSCCircleColorful />,
  browser: {
    icon: <BSCCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://testnet.bscscan.com'),
  },
  nativeCurrency: { decimals: 18, name: 'TBNB', symbol: 'TBNB' },
};

export const Arbitrum: Chain = {
  id: ChainIds.Arbitrum,
  name: 'Arbitrum One',
  icon: <ArbitrumCircleColorful />,
  browser: {
    icon: <ArbitrumCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://arbiscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Optimism: Chain = {
  id: ChainIds.Optimism,
  name: 'OP Mainnet',
  icon: <OptimismCircleColorful />,
  browser: {
    icon: <OptimismCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://optimistic.etherscan.io'),
  },
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export const Avalanche: Chain = {
  id: ChainIds.Avalanche,
  name: 'Avalanche',
  icon: <AvalancheCircleColorful />,
  browser: {
    icon: <AvalancheCircleColorful />,
    getBrowserLink: createGetBrowserLink('https://snowtrace.io'),
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
};
