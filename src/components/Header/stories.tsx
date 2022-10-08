import { Story } from '@storybook/preact';
import { h } from 'preact';

import { Header } from '.';
import { HeaderProps } from './types';

export default {
  title: 'Navigation/Header',
  component: Header,
  argTypes: {}
};

const Template: Story<HeaderProps> = (args) => (
  <Header {...args}>
    <div>Children</div>
  </Header>
);

export const Default = Template.bind({});
Default.args = {};
