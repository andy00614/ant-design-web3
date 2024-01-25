import { Button } from 'antd';
import { useAccount, useSignMessage, useWalletClient } from 'wagmi';

import { useCurrentChain } from '../../hooks/useCurrentChainInfo';

function SignAddress() {
  const { address } = useAccount();
  const { signMessage, data } = useSignMessage();
  const { chain } = useCurrentChain();
  console.log(chain);
  const { data: walletClient } = useWalletClient();

  const sendRawTransation = async () => {
    await walletClient?.sendRawTransaction({
      serializedTransaction:
        '0xf8d44c845f78a7788302086694708c1e9715077916a2e2d61c38181186d480714c88016345785d8a0000b8a47fb9a06300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001cd84f31d909b7470e390423db794482efbe5b33c83eeabc539c10e1f38ceed6595d1e951321bed13e5cc021c7decb13e981582bee94f1d368f96a301b06915309830228078080',
    });
    console.log('res', data);
  };

  return (
    <div className="mt-4">
      <Button onClick={() => signMessage({ message: address as string })}>Sign Address</Button>
      <div className="mt-4">
        <p>Sign Address: {data}</p>
      </div>

      <div>
        <h2>SendRawTransaction</h2>
        <Button onClick={sendRawTransation}>发送签名数据</Button>
      </div>
    </div>
  );
}

export default SignAddress;
