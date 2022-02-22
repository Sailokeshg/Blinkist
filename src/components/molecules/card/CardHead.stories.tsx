import CardHead from "./CardHead";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "molecules/card/CardHead",
    Component:CardHead,
}as ComponentMeta<typeof CardHead>

const Template : ComponentStory<typeof CardHead> = (args) => < CardHead {...args}/>;

export const Primary = Template.bind({});

Primary.args ={
    image:"image1",
    bookName:"BookTitle",
    authorName:"AuthorName",
    time:"time"
}