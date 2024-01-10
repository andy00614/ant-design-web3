import { WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { AccountProvider } from '@levellink/wallet';

import { config } from './config';
import WalletConnectButton from './WalletConnect';

const getWallet = async () => {
  const data = await fetch('/api/wallet/blockchain/wallet', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,zh;q=0.8',
      authorization:
        'oXr+hXu6fJceVNHNK4xUl0+ug+9zQ3ur1aXLdzEjUJb8UNGjv2AEFyWPDpkeFdgRK0JLO+PFgH1jGx8Ab+6TvJ8ElcFY+5rfqMkiVh/pWDKwwpYq51DB5Ob0I2weL/djJ3qQpzNCvN3aG/6ao8xPGkbQaEsvWDDPUUpOU8vjP3OMbt6WcfWYE4yWdPsxZcd+ujXgBFYpigfv6chCLuFg2rphUV9hqMf1VJ9kqciU05Yl+aW399BM2lC/liuCYkE/YjNP6aQUxNtD3WHosZU4jgX5EEUdbLK9DWa3B3L19X1EhJA5bA55gPNlNleeK6rgAXn95Lutu0zDHw4qu7zqEA==',
      'cache-control': 'no-cache',
      networkid: '1',
      pragma: 'no-cache',
      requestid: Math.random().toString(36),
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRlIjoxNzA0ODg2NTU3NTQxLCJzdWIiOiIweDRkMTFkZjkyMGUwZTQ4YzdlMTMyZTVhOTc1NGM3ZTc1NGNkNmViZmIifQ.yFB6bUXEdzyeHv8qGYj80uQxFq_O8Y56KGyDIXePF1Y',
    },
    referrer: 'https://wallet.whyindian.site/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  });
  const json = await data.json();
  return json.data;
};

function App() {
  return (
    <AccountProvider applicationName="测试程序" customToast={() => {}} getWallet={getWallet}>
      <WagmiWeb3ConfigProvider config={config} assets={[WalletConnect]}>
        <header>
          <WalletConnectButton />
        </header>
      </WagmiWeb3ConfigProvider>
    </AccountProvider>
  );
}

export default App;
