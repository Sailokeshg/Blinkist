import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterMain from "./FooterMain";

export default {
  title: "molecules/footer/mainfooter/FooterMain",
  component: FooterMain,
} as ComponentMeta<typeof FooterMain>;

const Template: ComponentStory<typeof FooterMain> = () => <FooterMain />;

export const primary = Template.bind({});
