import FinishedButton from "./FinishedButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/finishedbutton/FinishedButton',
    Component: FinishedButton,
}as ComponentMeta<typeof FinishedButton>

const Template:ComponentStory<typeof FinishedButton> = (args)=><FinishedButton  {...args}/>;

export const Primary = Template.bind({});


