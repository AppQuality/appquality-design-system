import { Meta, StoryFn } from "@storybook/react";
import Dropdown, { DropdownProps } from ".";
import { colourOptions } from "./data";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => {
  return <Dropdown {...args} />;
};

export const SingleDropdown = Template.bind({});
SingleDropdown.args = {
  className: "basic-single",
  defaultValue: colourOptions[0],
  name: "color",
  options: colourOptions,
};

export const MultiDropdown = Template.bind({});
MultiDropdown.args = {
  isMulti: true,
  className: "basic-multi",
  defaultValue: [colourOptions[2], colourOptions[3]],
  name: "colors",
  options: colourOptions,
};
