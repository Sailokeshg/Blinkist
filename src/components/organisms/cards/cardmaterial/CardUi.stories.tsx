import {ComponentMeta,ComponentStory} from "@storybook/react";
import CardUi from "./CardUi";

export default {
    title: "organisms/cards/cardmaterial/CardUi",
    component: CardUi,
}as ComponentMeta<typeof CardUi>

const Template: ComponentStory<typeof CardUi> = (args) => <CardUi {...args} />;

export const primary = Template.bind({});

