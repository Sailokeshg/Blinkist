import {ComponentMeta,ComponentStory} from "@storybook/react";
import NavItem from "./NavItem";

export default {
    title: 'atoms/footer/navlist/navitem/NavItem',
    component: NavItem,
}as ComponentMeta<typeof NavItem>

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args}/>;

export const primary = Template.bind({});

primary.args = {
    itemname:"firstitem"
}