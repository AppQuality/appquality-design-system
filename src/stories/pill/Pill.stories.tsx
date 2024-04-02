import { Meta, StoryFn } from "@storybook/react";
import { Pill } from "./Pill";
import { PillProps } from "./_types";

export default {
  title: "Pill",
  component: Pill,
} as Meta;

const Template: StoryFn<PillProps> = (args) => (
  <div style={{ padding: "10px" }}>
    <Pill {...args}>Pippo</Pill>
  </div>
);

export const PillBase = Template.bind({});
PillBase.args = {
  type: "primary",
};
