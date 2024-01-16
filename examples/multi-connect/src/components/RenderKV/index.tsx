import { Typography } from 'antd';

const { Text } = Typography;

const renderKV = (key: string, value: string) => {
  return (
    <div className="flex gap-4">
      <Text strong>{key}:</Text>
      <Text strong type="warning">
        {value}
      </Text>
    </div>
  );
};

export default renderKV;
