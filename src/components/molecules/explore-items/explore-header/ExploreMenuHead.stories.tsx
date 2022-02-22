import {ComponentMeta,ComponentStory} from "@storybook/react";
import ExploreMenuHead from "./ExploreMenuHead";

export default {
    title: "molecules/explore-items/explore-header/ExploreMenuHead",
    Component: ExploreMenuHead,
}as ComponentMeta<typeof ExploreMenuHead>

const Template: ComponentStory<typeof ExploreMenuHead> = () => <ExploreMenuHead />;

export const Primary = Template.bind({});