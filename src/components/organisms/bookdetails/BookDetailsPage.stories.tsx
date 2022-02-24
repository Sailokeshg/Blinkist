import {ComponentMeta,ComponentStory} from "@storybook/react";
import BookDetailsPage from "./BookDetailsPage";

export default {
    title: "organisms/bookdetails/BookDetailsPage", 
    component: BookDetailsPage,
}as ComponentMeta<typeof BookDetailsPage>
const Template: ComponentStory<typeof BookDetailsPage> = (args) => <BookDetailsPage {...args}/>;

export const primary = Template.bind({});