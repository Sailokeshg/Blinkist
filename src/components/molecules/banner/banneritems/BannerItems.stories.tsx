import { ComponentMeta, ComponentStory } from "@storybook/react";
import BannerItems from "./BannerItems";

export default {
  title: "molecules/banner/banneritems/BannerItems",
  Component: BannerItems,
} as ComponentMeta<typeof BannerItems>;

const Template: ComponentStory<typeof BannerItems> = () => <BannerItems />;

export const Primary = Template.bind({});
