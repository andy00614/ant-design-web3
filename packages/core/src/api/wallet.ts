import { requestInstance } from './instance';

export const getWallet = async () => {
  const data = await requestInstance('/blockchain/wallet', 'GET');
  return (data as any)?.data;
};

export const getNetworkList = async () => {
  const data = await requestInstance('/network/list', 'GET');
  return data?.data;
};
