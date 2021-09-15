import { BSCol, Container } from "../layout/Layout";
import { Card } from "../card/Card";
import { Select } from "./Select";
import { SelectProps } from "./_types";
import { basicOptions, getAsyncOptions, groupedOptions } from "./_data";
import { Story, Meta } from "@storybook/react";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { ThemeProvider } from "styled-components";

export default {
  title: "Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  return (
    <ThemeProvider theme={aqBootstrapTheme}>
      <Container>
        <BSCol size="col-lg-9">
          <Card>
            <Select {...args} />
          </Card>
        </BSCol>
      </Container>
    </ThemeProvider>
  );
};

export const SelectBase = Template.bind({});
SelectBase.args = {
  options: basicOptions,
  value: { label: "", value: "" },
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
