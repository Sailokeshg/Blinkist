import {ComponentMeta,ComponentStory} from '@storybook/react';
import AddableCard from './AddableCard';

export default {
    title:'organisms/cards/addable-card/AddableCard',
    Component: AddableCard,
}as       ComponentMeta<typeof AddableCard>

const Template:ComponentStory<typeof AddableCard> = (args)=><AddableCard {...args} />;

export const Primary = Template.bind({});