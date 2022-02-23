import { ComponentMeta,ComponentStory } from "@storybook/react";
import MyLibraryHeading from "./MyLibraryHeading";


export default {
    title: "atoms/mylibrary/mylibrary-heading/MyLibraryHeading",
    Component: MyLibraryHeading,
}as     ComponentMeta<typeof MyLibraryHeading>


const Template: ComponentStory<typeof MyLibraryHeading> = () => <MyLibraryHeading />;

export const Primary = Template.bind({});