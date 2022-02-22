import { ComponentMeta,ComponentStory } from "@storybook/react";
import Timer from "./TimerIcon";

export default {
    title: "atoms/timer/Timer",
    Component: Timer,
}as ComponentMeta<typeof Timer>

const Template: ComponentStory<typeof Timer> = () => <Timer />;

export const Primary = Template.bind({});