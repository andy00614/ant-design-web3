import type { Meta, StoryObj } from '@storybook/react';

import { NodeSelect } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/NodeSelect',
  component: NodeSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // 展示组件的页面高度自定义
    layout: 'centered',
  },
  args: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' }
  },
} satisfies Meta<typeof NodeSelect>;

export default meta;

type Story = StoryObj<typeof NodeSelect>;

export const Primary: Story = {
  args: {},
};
