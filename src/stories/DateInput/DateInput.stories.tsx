import DateInput from ".";
import { Story, Meta } from "@storybook/react";
import { DatepickerGlobalStyle } from "./_style";

export default {
  title: "Datepicker",
  component: DateInput,
} as Meta;

const DatepickerTemplate: Story = (args) => (
  <>
    <DatepickerGlobalStyle />
    <h2>Seleziona una data</h2>
    <DateInput {...args} id="test1" placeholder="Select a date... " />
  </>
);
export const DatepickerInput = DatepickerTemplate.bind({});
DatepickerInput.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
};
export const DatepickerInputWithIcon = DatepickerTemplate.bind({});
DatepickerInput.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
  enableManualInput: true,
};
