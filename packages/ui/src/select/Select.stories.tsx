import { useEffect, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import type { TSelectOption } from '.';
import { Select } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    value: '1',
    options: [
      { label: 'Wade Cooper', value: '1' },
      { label: 'Arlene Mccoy', value: '2' },
      { label: 'Devon Webb', value: '3' },
      { label: 'Tom Cook', value: '4' },
      { label: 'Tanya Fox', value: '5' },
      { label: 'Hellen Schmidt', value: '6' },
    ],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
} satisfies Meta<typeof Select>;

export default meta;

export const Template: StoryFn<typeof Select> = (args) => {
  const [v, setV] = useState('1');
  const [list, setList] = useState<TSelectOption[]>([]);
  useEffect(() => {
    setList(args.options);
    setV(args.value);
  }, []);
  return <Select value={v} options={list} onChange={(_v: string) => setV(_v)} />;
};
