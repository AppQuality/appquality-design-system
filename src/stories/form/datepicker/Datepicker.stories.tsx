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
    <Datepicker {...args} id="test1" placeholder="Select a date... " />
  </>
);
export const DatepickerInput = DatepickerTemplate.bind({});
DatepickerInput.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
};
export const DatepickerInputItalian = DatepickerTemplate.bind({});
DatepickerInputItalian.args = {
  locale: "it",
  setText: "Conferma",
  cancelText: "Annulla",
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

export const DatepickerInputWithMaximum = DatepickerTemplate.bind({});
DatepickerInputWithMaximum.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
  maxDate: new Date("04-01-2022"),
};

export const DatePickerWithValue = DatepickerTemplate.bind({});
DatePickerWithValue.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
  value: new Date("04-01-2022"),
};

export const DatepickerTime = DatepickerTemplate.bind({});
DatepickerTime.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
  control: "time",
};
