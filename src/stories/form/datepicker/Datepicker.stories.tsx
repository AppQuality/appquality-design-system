import { Datepicker } from "./Datepicker";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Datepicker",
  component: Datepicker,
} as Meta;

const DatepickerTemplate: Story = (args) => <Datepicker {...args} />;
export const DatepickerWithScrollbar = DatepickerTemplate.bind({});
export const DatepickerWithoutScrollbar = DatepickerTemplate.bind({});
DatepickerWithoutScrollbar.args = {
  showScrollbar: false,
};
