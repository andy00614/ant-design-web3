export const encrypt = async (data: string, publicKey: string) => {
  if (!publicKey) {
    throw new Error('No publickey!');
  }
  // @ts-ignore
  const JSEncrypt = (await import('jsencrypt')).default;
  const Encryptor = new JSEncrypt();
  Encryptor.setPublicKey(publicKey);
  return Encryptor.encrypt(data) as string;
};
