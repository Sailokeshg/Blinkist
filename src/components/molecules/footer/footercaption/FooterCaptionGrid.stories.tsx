import { ComponentMeta, ComponentStory } from "@storybook/react";

import FooterCaptionGrid from "./FooterCaptionGrid";

export default {
  title: "molecules/footer/footercaption/FooterCaptionGrid",
  component: FooterCaptionGrid,
} as ComponentMeta<typeof FooterCaptionGrid>;

const Template: ComponentStory<typeof FooterCaptionGrid> = () => (
  <FooterCaptionGrid />
);
export const primary = Template.bind({});
