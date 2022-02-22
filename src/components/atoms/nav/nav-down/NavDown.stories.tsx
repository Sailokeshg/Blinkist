import { ComponentMeta,ComponentStory } from "@storybook/react";
import NavDown from "./NavDown";

export default {
    title: "atoms/nav/nav-down/NavDown",
    Component: NavDown,
}as ComponentMeta<typeof NavDown>

const Template: ComponentStory<typeof NavDown> = () => <NavDown />;

export const Primary = Template.bind({});