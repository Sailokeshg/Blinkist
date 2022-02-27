import { ComponentMeta,ComponentStory } from "@storybook/react";
import MainSearch from "./MainSearch";
import React from "react";

export default {
    title: "organisms/search/MainSearch",
    component: MainSearch,
}as ComponentMeta<typeof MainSearch>

const Template: ComponentStory<typeof MainSearch> = (args) => <MainSearch {...args}/>;

export const Primary = Template.bind({});
