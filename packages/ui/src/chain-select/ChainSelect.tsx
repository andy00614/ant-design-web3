import React, { useEffect, useState } from 'react';
import { ChainSelect } from '@ant-design/web3';
import type { Chain } from '@ant-design/web3-common';

const MOCK_LIST = [
  { id: 1, name: 'Sepolia' },
  { id: 2, name: 'BNB Mainnet' },
  { id: 3, name: 'BNB Testnet' },
] as NetworkData[];

export interface NetworkData {
  id: number;
  url: string;
  webSiteUrl: string;
  chainId: number;
  name: string;
  sort: null;
  createTime: null | string; // 假设这是一个日期字符串或 null
  updateTime: null | string; // 假设这是一个日期字符串或 null
  contractAddress: {
    NODE: string[];
    ERC20: string[];
    ERC721: string[];
  };
}

async function fetchData() {
  try {
    const response = await fetch('https://whyindian.ddns.net/wallet/network/list', {
      method: 'GET', // GET 请求
      headers: {
        'Content-Type': 'application/json',
        requestId: Date.now().toString(), // 添加带有时间戳的 requestId 头部
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data; // 返回解析后的 JSON 数据
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  }
}

export const LLChainSelect: React.FC<{
  className?: string;
  onChange?: (v: NetworkData) => void;
}> = ({ className, onChange }) => {
  const [nodes, setNode] = useState<NetworkData[]>();
  const [selectId, setSelectId] = useState('');

  const chains: Chain[] =
    nodes?.map((item) => ({
      id: item.id,
      name: item.name,
    })) || [];

  useEffect(() => {
    async function fetchNodes() {
      // const _nodes = await fetchData();
      // TODO: 今天网坏了，先mock
      const _nodes = MOCK_LIST;
      setNode(_nodes);
      const nodeIdFromStorage = typeof window !== 'undefined' && localStorage?.getItem('nodeId');
      if (nodeIdFromStorage) {
        setSelectId(nodeIdFromStorage);
      } else {
        setSelectId(_nodes?.[0]?.id.toString());
      }
    }
    fetchNodes();
  }, []);

  const setNodeToLocalStorage = (id: string, url: string) => {
    localStorage.setItem('nodeId', id);
    localStorage.setItem('nodeUrl', url);
  };

  const handleChange = (nodeId: string | number) => {
    const node = nodes!.find((n) => n.id.toString() === nodeId.toString());
    if (node) {
      if (onChange) {
        onChange(node);
      }
      setNodeToLocalStorage(nodeId.toString(), node.url);
      setSelectId(node.id.toString());
      window.location.reload();
    }
  };

  if (!nodes) return <></>;
  return (
    <div>
      <ChainSelect
        className={className}
        chains={chains}
        hashId="chainlistll"
        onSwitchChain={(_chain) => {
          const id = _chain.id;
          handleChange(id);
        }}
        currentChain={chains.find((item) => item.id.toString() === selectId)}
      />
    </div>
  );
};
