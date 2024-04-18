import { Meta, StoryFn } from "@storybook/react";
import { SelectNew } from ".";

export default {
  title: "SelectNew",
  component: SelectNew,
} as Meta;

const Template: StoryFn<SelectProps> = (args) => {
  return <SelectNew {...args} />;
};

export const SelectBase = Template.bind({});
SelectBase.args = {
  value: { label: "", value: "" },
};
