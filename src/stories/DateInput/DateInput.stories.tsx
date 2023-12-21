import { DateInput } from ".";
import { Story, Meta } from "@storybook/react";
import { DatepickerGlobalStyle } from "./_style";

export default {
  title: "Inputs/DateInput",
  component: DateInput,
} as Meta;

const DatepickerTemplate: Story = (args) => (
  <>
    <DatepickerGlobalStyle />
    <h2>Seleziona una data nel formato gg-mm-aaaa</h2>
    <DateInput {...args} id="test1" i18n={{ placeholder: "28-03-2013" }} />
  </>
);
export const DatepickerInput = DatepickerTemplate.bind({});
DatepickerInput.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
};
