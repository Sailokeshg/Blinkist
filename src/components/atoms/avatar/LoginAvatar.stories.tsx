import { ComponentMeta,ComponentStory } from "@storybook/react";
import LoginAvatar from "./LoginAvatar";

export default {
    title: "atoms/avatar/LoginAvatar",
    Component: LoginAvatar,
}as ComponentMeta<typeof LoginAvatar>

const Template: ComponentStory<typeof LoginAvatar> = () => < LoginAvatar />;

export const Primary = Template.bind({});
