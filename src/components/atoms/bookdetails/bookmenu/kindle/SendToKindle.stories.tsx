import { ComponentMeta,ComponentStory } from "@storybook/react";
import SendToKindle from "./SendToKindle";

export default {
    title: "atoms/bookdetails/bookmenu/kindle/SendToKindle",
    component: SendToKindle,
}as ComponentMeta<typeof SendToKindle>

const Template: ComponentStory<typeof SendToKindle> = () => <SendToKindle />;

export const primary = Template.bind({});
