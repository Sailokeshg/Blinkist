import {ComponentMeta,ComponentStory} from "@storybook/react";
import UserIcon from "./UserIcon";

export default {
    title: "atoms/usericon/UserIcon",
    component: UserIcon,
}as ComponentMeta<typeof UserIcon>

const Template: ComponentStory<typeof UserIcon> = () => <UserIcon />;

export  const primary = Template.bind({});