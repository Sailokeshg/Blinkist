import {ComponentMeta,ComponentStory} from "@storybook/react";
import ReadNow from "./ReadNow";

export default {
    title: "atoms/bookdetails/bookmenu/readnow/ReadNow",
    component: ReadNow,
}as ComponentMeta<typeof ReadNow>

const Template: ComponentStory<typeof ReadNow> = () => <ReadNow />;

export const primary = Template.bind({});