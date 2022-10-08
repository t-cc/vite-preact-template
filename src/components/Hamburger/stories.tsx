import { Story } from '@storybook/preact';
import { h } from 'preact';

import { Hamburger } from '.';
import { HamburgerProps } from './types';

export default {
  title: 'Navigation/Hamburger',
  component: Hamburger,
  argTypes: { open: { control: { type: 'boolean' } } }
};

const Template: Story<HamburgerProps> = (args) => <Hamburger {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: false
};

export const Open = Template.bind({});
Open.args = {
  open: true
};
