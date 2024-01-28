import React, { useEffect, useState } from 'react';
import { ChainSelect } from '@levellink/web3';
import type { Chain } from '@levellink/web3-common';

import { chain2URL, CHAINS_FOR_PROVIDER } from '../../config';

type ChainWithURL = Chain & {
  url: string;
};

function fetchData(): ChainWithURL[] {
  const response = CHAINS_FOR_PROVIDER.map((item) => {
    return {
      id: item.id,
      name: item.name,
      icon: item.icon,
      browser: {
        icon: item.icon,
      },
      url: chain2URL[item.id as keyof typeof chain2URL],
    };
  }) as ChainWithURL[];
  return response;
}

export const ChainSelectV2: React.FC<{
  className?: string;
  onChange?: (v: ChainWithURL) => void;
}> = ({ className, onChange }) => {
  const [nodes, setNodes] = useState<ChainWithURL[]>();
  const [selectId, setSelectId] = useState('');

  const chains: ChainWithURL[] =
    nodes?.map((item) => ({
      ...item,
      id: item.id,
      name: item.name,
      url: chain2URL[item.id as keyof typeof chain2URL],
    })) || [];

  useEffect(() => {
    async function fetchNodes() {
      const _nodes = await fetchData();
      setNodes(_nodes);
      const nodeIdFromStorage = typeof window !== 'undefined' && localStorage?.getItem('chainId');
      if (nodeIdFromStorage) {
        setSelectId(nodeIdFromStorage);
      } else {
        setSelectId(_nodes?.[0]?.id.toString() || '');
      }
    }
    fetchNodes();
  }, []);

  const setNodeToLocalStorage = (id: string, url: string) => {
    localStorage.setItem('nodeId', id);
    localStorage.setItem('nodeUrl', url);
    localStorage.setItem('chainId', id);
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

  if (!nodes) return <div />;
  console.log(
    chains,
    selectId,
    chains.find((item) => item.id.toString() === selectId.toString()),
  );
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
        currentChain={chains.find((item) => item.id.toString() === selectId.toString())}
      />
    </div>
  );
};
