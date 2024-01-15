import React, { useEffect, useState } from 'react';
import { ChainSelect } from '@levellink/web3';
import type { Chain } from '@levellink/web3-common';

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

export const ChainSelectV2: React.FC<{
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
      const _nodes = await fetchData();
      console.log('_nodes', _nodes);
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

  console.log(chains);

  if (!nodes) return <></>;
  return (
    <div>
      <ChainSelect
        className={className}
        chains={chains}
        hashId="css-dev-only-do-not-override-dkbvqv"
        onSwitchChain={(_chain) => {
          const id = _chain.id;
          handleChange(id);
        }}
        currentChain={chains.find((item) => item.id.toString() === selectId)}
      />
    </div>
  );
};
