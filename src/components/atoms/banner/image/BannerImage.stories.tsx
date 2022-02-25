
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BannerImage } from "./BannerImage";

export default {
    title:'atoms/banner/banner-image/BannerImage',
    Component: BannerImage,
}as ComponentMeta<typeof BannerImage>

const Template:ComponentStory<typeof BannerImage> = ()=><BannerImage />;

export const Primary = Template.bind({});