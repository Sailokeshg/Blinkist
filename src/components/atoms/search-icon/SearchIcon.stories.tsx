import { ComponentMeta,ComponentStory } from "@storybook/react";
import SearchIcon from "./SearchIcon";

export default {
    title: "atoms/search-icon/SearchIcon",
    Component: SearchIcon,
}as ComponentMeta<typeof SearchIcon>

const Template: ComponentStory<typeof SearchIcon> = () => < SearchIcon />;

export const Primary = Template.bind({});
