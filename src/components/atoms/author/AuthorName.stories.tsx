import { ComponentStory, ComponentMeta } from "@storybook/react";
import AuthorName from "./AuthorName";


export default {
    title: "atoms/author/AuthorName",
    Component:AuthorName,
}as ComponentMeta<typeof AuthorName>

const Template: ComponentStory<typeof AuthorName> = (args) => < AuthorName {...args}/>;

export const Primary = Template.bind({});

Primary.args ={
    authorName:"AuthorName",
};