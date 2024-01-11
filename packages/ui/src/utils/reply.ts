import { createRequest } from '@levellink/wallet';

export const getWallet = async () => {
  const request = createRequest({
    baseURL: 'https://whyindian.ddns.net/wallet',
    tokenName: 'token',
    encryptBlackList: [],
    publickKey:
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtUFa2cEcTlGbN6MTd2eFut/lo4G4GB46CQjTq3Ah2au8rbY3crBQypQqXKZDqz+JBCGklP3XrfxVydrAXuVuKw7qnK3AiyD++l4K7gJaJpYXeMAT0mlBC/XEav2bZRB6p911DqW6vrrQ3j6sGbEldiDEYBcpZNSa2BvgNrsSrnglfiiXTETWGIy8ZO5+WKJBj3TSB/M6ywdALZIZY9mONHtA2YpNf/9mFdNf9D/VCUq9ShWSbnl/YlG6gX2Qezlw97hUvN5jHLH4A+9skO/SY9PcyFl/gTx0eW9CWoJSO3JY3RfqLnT0lHmcwEeYYPFwobS0Iv/AxKtfCsoyjj9XEwIDAQAB',
  });
  const data = await request('/blockchain/wallet', 'GET');
  return (data as any)?.data;
};
