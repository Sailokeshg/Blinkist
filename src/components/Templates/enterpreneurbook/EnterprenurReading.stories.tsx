import {ComponentMeta,ComponentStory} from "@storybook/react";
import EnterprenurReading from "./EnterpreneurReading";

export default {
    title: "Templates/enterpreneurbook/EnterprenurReading",  
    component: EnterprenurReading,
}as ComponentMeta<typeof EnterprenurReading>

const Template: ComponentStory<typeof EnterprenurReading> = (args) => <EnterprenurReading {...args}/>;

export const primary = Template.bind({});

primary.args ={
       value:"2",
}
