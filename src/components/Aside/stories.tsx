import { Story } from '@storybook/preact';
import { h } from 'preact';

import { Aside } from '.';
import { AsideProps } from './types';

export default {
  title: 'Navigation/Aside',
  component: Aside,
  argTypes: { open: { control: { type: 'boolean' } } }
};

const Template: Story<AsideProps> = (args) => (
  <Aside {...args}>
    <div>Children</div>
  </Aside>
);

export const Default = Template.bind({});
Default.args = {
  open: true
};
