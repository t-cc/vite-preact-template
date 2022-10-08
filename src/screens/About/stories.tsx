import { Story } from '@storybook/preact';
import { h } from 'preact';

import { About } from '.';

export default {
  title: 'About',
  component: About,
  argTypes: {}
};

const Template: Story = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};
