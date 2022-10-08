import { Story } from '@storybook/preact';
import { h } from 'preact';

import { Menu } from '.';
import { MENU_MOCK } from './mocks';
import { MenuProps } from './types';

export default {
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' }
  },
  args: {
    menu: MENU_MOCK
  }
};

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
