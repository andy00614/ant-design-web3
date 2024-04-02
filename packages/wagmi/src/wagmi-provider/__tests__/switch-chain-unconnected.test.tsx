import { ConnectButton, Connector } from '@levellink/web3';
import { Mainnet, Polygon } from '@levellink/web3-assets';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { mainnet, polygon } from 'wagmi/chains';

import { MetaMask } from '../../wallets';
import { AntDesignWeb3ConfigProvider } from '../config-provider';

const mockConnector = {
  name: 'MetaMask',
};

vi.mock('wagmi', () => {
  return {
    // https://wagmi.sh/react/hooks/useAccount
    useAccount: () => {
      return {
        address: undefined,
        connector: mockConnector,
      };
    },
    useConnect: () => {
      return {
        connectors: [mockConnector],
      };
    },
    useDisconnect: () => {
      return {
        disconnectAsync: () => {},
      };
    },
    useNetwork: () => {
      return {
        chain: undefined,
      };
    },
    useSwitchNetwork: () => {
      return {
        switchNetwork: () => {},
      };
    },
    useBalance: () => {
      return {
        data: {
          value: 1230000000000000000,
          symbol: 'WETH',
          decimals: 18,
        },
      };
    },
  };
});

describe('switch chain when not conncted', () => {
  it('switch chain when not conncted', () => {
    const App = () => (
      <AntDesignWeb3ConfigProvider
        availableConnectors={[]}
        availableChains={[mainnet, polygon]}
        assets={[Mainnet, Polygon, MetaMask]}
      >
        <Connector>
          <ConnectButton />
        </Connector>
      </AntDesignWeb3ConfigProvider>
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button-text')?.textContent).toBe(
      'Connect Wallet',
    );
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Ethereum',
    );
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button-chain-select')!);
    fireEvent.click(baseElement.querySelectorAll('.ant-dropdown-menu-item')[1]);
    expect(baseElement.querySelector('.ant-web3-connect-button-chain-select')?.textContent).toBe(
      'Polygon',
    );
  });
});
