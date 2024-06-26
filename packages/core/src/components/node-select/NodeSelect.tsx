import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Select } from '..';
import { WALLET_SERVICE_URL } from '../../config';

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
    const response = await fetch(`${WALLET_SERVICE_URL}/wallet/network/list`, {
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

export const NodeSelect: React.FC<{
  className: string;
  onChange?: (v: NetworkData) => void;
}> = ({ className, onChange }) => {
  const [nodes, setNode] = useState<NetworkData[]>();
  const [selectId, setSelectId] = useState('');

  const setNodeToLocalStorage = (id: string, url: string, chainId: string) => {
    localStorage.setItem('nodeId', id);
    localStorage.setItem('nodeUrl', url);
    localStorage.setItem('chainId', chainId);
  };

  useEffect(() => {
    async function fetchNodes() {
      const _nodes = await fetchData();
      setNode(_nodes);
      const nodeIdFromStorage = typeof window !== 'undefined' && localStorage?.getItem('nodeId');
      if (nodeIdFromStorage) {
        setSelectId(nodeIdFromStorage);
      } else {
        const curNode = _nodes[0];
        const id = curNode?.chainId.toString() || curNode?.id.toString();
        setSelectId(id);
        setNodeToLocalStorage(id, curNode.url, curNode.chainId.toString());
      }
    }
    fetchNodes();
  }, []);

  const handleChange = (nodeId: string | number) => {
    const node = nodes!.find((n) => n.id.toString() === nodeId.toString());
    if (node) {
      if (onChange) {
        onChange(node);
      }
      setNodeToLocalStorage(nodeId.toString(), node.url, node.chainId.toString());
      setSelectId(node.id.toString());
      window.location.reload();
    }
  };

  if (!nodes) return <></>;
  return (
    <Select
      className={className}
      prefix={() => {
        return (
          <span
            aria-label={'Online'}
            className={classNames(
              'bg-green-400',
              'inline-block h-2 w-2 flex-shrink-0 rounded-full mr-2',
            )}
          />
        );
      }}
      options={
        nodes?.map((item) => ({
          label: item.name,
          value: item.id.toString(),
        })) || []
      }
      onChange={(v) => handleChange(v)}
      value={selectId || ''}
    />
  );
};
