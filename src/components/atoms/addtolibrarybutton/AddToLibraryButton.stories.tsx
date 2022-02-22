import { ComponentMeta,ComponentStory } from "@storybook/react";
import  AddToLibraryButton  from "./AddToLibraryButton";

export default {
    title: "atoms/addtolibrarybutton/AddToLibraryButton",
    Component:AddToLibraryButton,
}as ComponentMeta<typeof AddToLibraryButton>

const Template: ComponentStory<typeof AddToLibraryButton> = () => <AddToLibraryButton/>;

export const Primary = Template.bind({});
