import Explore from "./Explore";
import { ComponentMeta,ComponentStory } from "@storybook/react";


export default {
    title: "atoms/explore/Explore",
    Component:Explore,
}as ComponentMeta<typeof Explore>

const Template: ComponentStory<typeof Explore> = (args) => < Explore {...args}/>;

export const Primary = Template.bind({});

Primary.args ={
};