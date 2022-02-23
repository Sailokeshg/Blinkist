import {ComponentMeta,ComponentStory} from "@storybook/react";
import NavHead from "./NavHead";

export default {
    title: "atoms/footer/navlist/navhead/NavHead",
    component: NavHead,
}as ComponentMeta<typeof NavHead>

const Template: ComponentStory<typeof NavHead> = (args) => <NavHead {...args}/>;

export const primary = Template.bind({});

primary.args = {
    headname: "NavHead",
}