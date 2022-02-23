import { ComponentMeta,ComponentStory } from "@storybook/react";
import Policies from "./Policies";

export default {
    title: "atoms/footer/service-policies/Policies",
    component: Policies,
}as     ComponentMeta<typeof Policies>

const Template: ComponentStory<typeof Policies> = () => <Policies />;

export const primary = Template.bind({});