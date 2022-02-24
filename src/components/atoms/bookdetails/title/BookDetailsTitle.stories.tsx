import {ComponentMeta,ComponentStory} from "@storybook/react";
import BookDetailsTitle from "./BookDetailsTitle";

export default {
    title: "atoms/bookdetails/title/BookDetailsTitle",
    component: BookDetailsTitle,
}as ComponentMeta<typeof BookDetailsTitle>

const Template: ComponentStory<typeof BookDetailsTitle> = () => <BookDetailsTitle />;

export const primary = Template.bind({});