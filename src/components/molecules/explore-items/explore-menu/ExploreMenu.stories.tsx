import ExploreMenu from "./ExploreMenu";
import {ComponentMeta,ComponentStory} from "@storybook/react";

export default {
    title: "molecules/explore-items/explore-menu/ExploreMenu",
    Component:ExploreMenu,
}as ComponentMeta<typeof ExploreMenu>

const Template: ComponentStory<typeof ExploreMenu> = (args) => < ExploreMenu {...args}/>;

export const Primary = Template.bind({});
