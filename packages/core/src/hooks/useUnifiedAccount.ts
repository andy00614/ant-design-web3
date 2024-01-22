import { useAccount as useWagmiAccount } from 'wagmi';

import { useAccount as useMyWalletAccount } from '../provider';

// Extract the return types of the two hooks
type WagmiAccountType = ReturnType<typeof useWagmiAccount>;
type MyWalletAccountType = ReturnType<typeof useMyWalletAccount>;

// Create a new type that is the union of both types with every property optional
// and override isConnected to be of type boolean
type UnifiedAccountType = Partial<
  WagmiAccountType &
    MyWalletAccountType & {
      whichWallet: 'locale' | 'myWallet';
    }
>;

export function useUnifiedAccount(): UnifiedAccountType {
  const wagmiAccount = useWagmiAccount();
  const myWalletAccount = useMyWalletAccount();
  const whichWallet = getWhichWallet(wagmiAccount.isConnected, myWalletAccount.isConnected);

  const isConnected = someLogicToDetermineIsConnected(
    wagmiAccount.isConnected,
    myWalletAccount.isConnected,
  );

  let account = {};
  if (whichWallet === 'locale') {
    account = wagmiAccount;
  } else if (whichWallet === 'myWallet') {
    account = myWalletAccount;
  }

  return {
    ...account,
    whichWallet,
    // @ts-ignore wagmi1.x的版本这里类型定义的有问题
    isConnected,
  };
}

function someLogicToDetermineIsConnected(
  wagmiIsConnected: boolean,
  myWalletIsConnected: boolean,
): boolean {
  // Custom logic, for example:
  return wagmiIsConnected || myWalletIsConnected;
}

function getWhichWallet(
  wagmiIsConnected: boolean,
  myWalletIsConnected: boolean,
): 'locale' | 'myWallet' | undefined {
  // Custom logic, for example:
  if (!wagmiIsConnected && !myWalletIsConnected) {
    return;
  }
  return wagmiIsConnected ? 'locale' : 'myWallet';
}
