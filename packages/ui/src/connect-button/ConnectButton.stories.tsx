import type { Meta, StoryFn } from '@storybook/react';

import { MixConnectButton } from '.';
import { Provider } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ConnectButton',
  component: MixConnectButton,
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
} satisfies Meta<typeof MixConnectButton>;

export default meta;

export const Template: StoryFn<typeof MixConnectButton> = () => {
  return (
    <Provider>
      <MixConnectButton />
    </Provider>
  );
};
