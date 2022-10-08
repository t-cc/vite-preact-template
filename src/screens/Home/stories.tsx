import { Story } from '@storybook/preact';
import { h } from 'preact';

import { Home } from './index';

export default {
  title: 'Home',
  component: Home,
  argTypes: {}
};

const Template: Story = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
