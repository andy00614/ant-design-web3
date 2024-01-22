import { ConnectButtonHOC } from '@levellink/core';
import { Button, Card, InputNumber } from 'antd';

import Balance from '../Balance';

function VaultV2() {
  const ButtonWithAuth = ConnectButtonHOC(Button);
  return (
    <Card className="mt-4">
      <Balance />
      <div className="mt-4">
        <div className="flex items-center">
          <InputNumber min={1} placeholder="amount" />
          <ButtonWithAuth className="ml-4">Deposit</ButtonWithAuth>
        </div>

        <div className="flex items-center mt-4">
          <InputNumber min={1} placeholder="amount" />
          <ButtonWithAuth className="ml-4">Withdraw</ButtonWithAuth>
        </div>
      </div>
    </Card>
  );
}

export default VaultV2;
