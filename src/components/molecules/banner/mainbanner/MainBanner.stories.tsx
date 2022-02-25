import {ComponentMeta,ComponentStory} from '@storybook/react';
import MainBanner from './MainBanner';

export default {
    title:'molecules/banner/mainbanner/MainBanner',
    Component: MainBanner,
}as        ComponentMeta<typeof MainBanner>

const Template:ComponentStory<typeof MainBanner> = ()=><MainBanner />;

export const Primary = Template.bind({});