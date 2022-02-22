import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderLeft from './HeaderLeft';

export default {
    title: 'organisms/header/header-left/HeaderLeft',
    Component: HeaderLeft,
}as ComponentMeta<typeof HeaderLeft>

const Template: ComponentStory<typeof HeaderLeft> = (args) => <HeaderLeft {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    icon: true,
}