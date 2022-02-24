import { ComponentMeta,ComponentStory } from "@storybook/react";
import FinishReading from "./FinishReading";

export default {
    title: "atoms/bookdetails/bookmenu/finish/FinishReading",
    component: FinishReading,
}as ComponentMeta<typeof FinishReading>

const Template: ComponentStory<typeof FinishReading> = (args) => <FinishReading{...args} />;

export const primary = Template.bind({});

