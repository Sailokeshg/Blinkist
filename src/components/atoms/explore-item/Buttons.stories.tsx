import Buttons from "./Buttons";
import { ComponentMeta,ComponentStory } from "@storybook/react";

export default {
    title: "atoms/explore-item/Buttons",
    Component:Buttons,
}as ComponentMeta<typeof Buttons>

const Template: ComponentStory<typeof Buttons> = (args) => < Buttons {...args}/>;

export const Primary = Template.bind({});

Primary.args ={
    itemname: "itemname",
}