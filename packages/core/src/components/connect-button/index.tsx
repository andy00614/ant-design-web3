import React from 'react';
import { useWeb3Modal } from '@levellink/wagmimodal/react';
import { ConnectButton } from '@levellink/web3';
import { Button, message, Space } from 'antd';

import { useCurrentChain } from '../../hooks';
import { useUnifiedAccount } from '../../hooks/useUnifiedAccount';
import { ChainSelectV2 } from '../node-select-v2';

const LoginButton: React.FC = () => {
  const { chain: currentChain } = useCurrentChain();
  const { isConnected, address, disconnect, whichWallet } = useUnifiedAccount();
  const { open } = useWeb3Modal();

  if (!isConnected) {
    return <Button onClick={() => open()}>Wallect Connect</Button>;
  }
  const _ConnectButton = () => (
    <ConnectButton
      account={{ address: address as string }}
      profileModal={{
        footer: (
          <div className="flex flex-col gap-2 w-full">
            {whichWallet === 'myWallet' && (
              <Button
                type="link"
                onClick={() => {
                  window.open(
                    process.env.NEXT_PUBLIC_WALLET_URL!,
                    '__blank',
                    'noopener,noreferrer',
                  );
                }}
              >
                Go To Wallet
              </Button>
            )}
            <div className="flex w-full gap-2 justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(address as string);
                  message.success('Address Copied');
                }}
              >
                Copy Address
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  disconnect?.();
                  message.success('Disconnect Success');
                }}
              >
                Disconnect
              </Button>
            </div>
          </div>
        ),
      }}
    />
  );

  if (whichWallet === 'myWallet') {
    return (
      <Space.Compact>
        <ChainSelectV2 />
        {_ConnectButton()}
      </Space.Compact>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <a
        className="text-sm mr-1 cursor-pointer underline text-slate-700"
        onClick={() => open({ view: 'Networks' })}
      >
        {currentChain?.name}
      </a>
      {_ConnectButton()}
    </div>
  );
};

export default LoginButton;
