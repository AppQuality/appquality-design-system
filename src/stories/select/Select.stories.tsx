import { Select } from "./Select";
import { SelectProps } from "./_types";
import { basicOptions, getAsyncOptions, groupedOptions } from "./_data";
import { Story, Meta } from "@storybook/react";
import { geocodeByPlaceId } from "react-google-places-autocomplete";

export default {
  title: "Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  return <Select {...args} />;
};

export const SelectBase = Template.bind({});
SelectBase.args = {
  options: basicOptions,
  value: { label: "", value: "" },
};

export const CreatableSelect = Template.bind({});
CreatableSelect.args = {
  options: basicOptions,
  value: { label: "", value: "" },
  onCreate: (value) => {
    console.log(value);
  },
};

export const SelectDisabled = Template.bind({});
SelectDisabled.args = {
  label: "My label",
  options: basicOptions,
  value: { label: "", value: "" },
  isDisabled: true,
};

export const SelectDisabledWithContent = Template.bind({});
SelectDisabledWithContent.args = {
  label: "My label",
  options: basicOptions,
  value: basicOptions[0],
  isDisabled: true,
};

export const GroupedAsync = Template.bind({});
GroupedAsync.args = {
  options: groupedOptions,
  isSearchable: true,
  value: { label: "", value: "" },
};

export const SelectAsync = Template.bind({});
SelectAsync.args = {
  options: getAsyncOptions,
  isSearchable: true,
  value: { label: "", value: "" },
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  isMulti: true,
  options: basicOptions,
  value: [
    { label: basicOptions[0].label, value: basicOptions[0].value },
    { label: basicOptions[1].label, value: basicOptions[1].value },
  ],
};
