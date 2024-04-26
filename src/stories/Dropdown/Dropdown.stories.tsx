import { Meta, StoryFn } from "@storybook/react";
import { Dropdown } from ".";
import { colourOptions } from "./data";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

const Template: StoryFn = (args) => {
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

export const CreatableDropdown = Template.bind({});
CreatableDropdown.args = {
  className: "creatable-single",
  defaultValue: colourOptions[0],
  name: "color",
  onCreateOption: async (inputValue: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(`Creating ${inputValue}`);
  },
  options: colourOptions,
};

export const CreatableMultiDropdown = Template.bind({});
CreatableMultiDropdown.args = {
  isMulti: true,
  className: "creatable-multi",
  defaultValue: colourOptions[0],
  name: "color",
  onCreateOption: async (inputValue: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(`Creating ${inputValue}`);
  },
  options: colourOptions,
};
