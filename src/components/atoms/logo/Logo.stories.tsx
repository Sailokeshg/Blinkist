import Logo from "./Logo";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title:'atoms/logo/Logo',
    component: Logo,
}as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const primary = Template.bind({});

