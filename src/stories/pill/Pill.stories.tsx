import { Story, Meta } from "@storybook/react";
import { PillProps } from "./_types";
import { Pill } from "./Pill";

export default {
  title: "Pill",
  component: Pill,
} as Meta;

const Template: Story<PillProps> = (args) => (
  <div style={{ padding: "10px" }}>
    <Pill {...args}>Pippo</Pill>
  </div>
);

export const PillBase = Template.bind({});
PillBase.args = {
  type: "primary",
};
