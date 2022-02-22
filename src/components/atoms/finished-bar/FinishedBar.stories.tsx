import { ComponentMeta, ComponentStory } from "@storybook/react";
import FinishedBar from "./FinishedBar";

export default {
    title:'atoms/finished-bar/FinishedBar',
    Component: FinishedBar,
}as ComponentMeta<typeof FinishedBar>

const Template:ComponentStory<typeof FinishedBar> = ()=><FinishedBar/>;

export const Primary = Template.bind({});

