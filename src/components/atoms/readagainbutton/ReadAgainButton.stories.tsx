import {ComponentMeta,ComponentStory} from "@storybook/react";
import ReadAgainButton from "./ReadAgainButton";

export default {
    title: "atoms/readagain/ReadAgainButton",
    Component: ReadAgainButton,
}as ComponentMeta<typeof ReadAgainButton>

const Template: ComponentStory<typeof ReadAgainButton> = (args) => <ReadAgainButton {...args} />;

export const Primary = Template.bind({});

Primary.args={
    handleReadAgain: () => null,
    name:"bookname",
}