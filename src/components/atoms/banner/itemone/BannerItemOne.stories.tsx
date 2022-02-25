import {ComponentMeta,ComponentStory} from '@storybook/react';
import { BannerItemOne } from './BannerItemOne';

export default {
    title:'atoms/banner/banner-itemone/BannerItemOne',
    Component: BannerItemOne,
}as ComponentMeta<typeof BannerItemOne>

const Template:ComponentStory<typeof BannerItemOne> = ()=><BannerItemOne />;

export const Primary = Template.bind({});