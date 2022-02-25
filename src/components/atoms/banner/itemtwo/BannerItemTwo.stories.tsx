import {ComponentMeta,ComponentStory} from '@storybook/react';
import BannerItemTwo from './BannerItemTwo';

export default {
    title:'atoms/banner/banner-itemtwo/BannerItemTwo',
    Component: BannerItemTwo,
}as         ComponentMeta<typeof BannerItemTwo>

const Template:ComponentStory<typeof BannerItemTwo> = ()=><BannerItemTwo />;

export const Primary = Template.bind({});