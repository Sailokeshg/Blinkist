import {ComponentMeta,ComponentStory} from "@storybook/react";
import KeyIdeas from "./KeyIdeas";


export default {
    title: "atoms/bookdetails/keyideas/KeyIdeas",
    component: KeyIdeas,
}as ComponentMeta<typeof KeyIdeas>

const Template: ComponentStory<typeof KeyIdeas> = () => <KeyIdeas />;

export const primary = Template.bind({});