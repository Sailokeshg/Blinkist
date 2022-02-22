import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToolBarHeader from './ToolBarHeader';

export default {
    title: 'organisms/header/toolbar/ToolBarHeader',
    component: ToolBarHeader,
}as ComponentMeta<typeof ToolBarHeader>

const Template: ComponentStory<typeof ToolBarHeader> = (args) => <ToolBarHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    icon: false,
}