import {ComponentMeta,ComponentStory} from "@storybook/react";
import FooterCaption from "./FooterCaption";

export default {
    title: "atoms/footer/footercaption/FooterCaption",
    component: FooterCaption,
}as ComponentMeta<typeof FooterCaption>

const Template: ComponentStory<typeof FooterCaption> = () => <FooterCaption />;

export const primary = Template.bind({});