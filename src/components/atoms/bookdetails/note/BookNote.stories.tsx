import { ComponentMeta,ComponentStory } from "@storybook/react";
import BookNote from "./BookNote";

export default {
    title: "atoms/bookdetails/note/BookNote",
    component: BookNote,
}as ComponentMeta<typeof BookNote>

const Template: ComponentStory<typeof BookNote> = () => <BookNote />;
export  const primary = Template.bind({});