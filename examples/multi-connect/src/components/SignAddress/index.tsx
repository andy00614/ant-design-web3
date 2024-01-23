import { Button } from 'antd';
import { useAccount, useSignMessage } from 'wagmi';

function SignAddress() {
  const { address } = useAccount();
  const { signMessage, data } = useSignMessage();

  return (
    <div className="mt-4">
      <Button onClick={() => signMessage({ message: address as string })}>Sign Address</Button>
      <div className="mt-4">
        <p>Sign Address: {data}</p>
      </div>
    </div>
  );
}

export default SignAddress;
