import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReadCount from './ReadCount';

export default {
    title: 'molecules/readcount/ReadCount',
    component: ReadCount,
}as ComponentMeta<typeof ReadCount>

const Template: ComponentStory<typeof ReadCount> = (args) => <ReadCount {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    readcount: '1k reads',
}