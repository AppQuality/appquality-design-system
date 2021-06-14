import { Datepicker } from "./Datepicker";
import { Story, Meta } from "@storybook/react";
import { DatepickerGlobalStyle } from "./_style";

export default {
  title: "Datepicker",
  component: Datepicker,
} as Meta;

const DatepickerTemplate: Story = (args) => (
  <>
    <DatepickerGlobalStyle />
    <h2>Seleziona una data</h2>
    <Datepicker {...args} id="test1" />
  </>
);
export const DatepickerInput = DatepickerTemplate.bind({});
DatepickerInput.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
};
export const DatepickerInputWithMinimum = DatepickerTemplate.bind({});
DatepickerInputWithMinimum.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
  minDate: new Date("01-01-2020"),
};

const now = new Date();
export const DatepickerInputWithMaximum = DatepickerTemplate.bind({});
DatepickerInputWithMaximum.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
  maxDate: new Date(now.getFullYear() - 18, now.getMonth(), now.getDate()),
};
