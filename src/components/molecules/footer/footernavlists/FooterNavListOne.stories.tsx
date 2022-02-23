import { ComponentMeta,ComponentStory } from "@storybook/react";
import FooterNavListOne from "./FooterNavListOne";
export default {
    title: "molecules/footer/footernavlists/FooterNavListOne",
    component: FooterNavListOne,
}as ComponentMeta<typeof FooterNavListOne>;

const Template: ComponentStory<typeof FooterNavListOne> = () => (
    <FooterNavListOne />
);

export const primary = Template.bind({});