import { Meta, StoryFn } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { ProgressBarProps, ProgressBarType } from "./_types";

const { DANGER, INFO, WARNING, SUCCESS } = ProgressBarType;

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    type: {
      options: [DANGER, INFO, WARNING, SUCCESS],
      control: {
        type: "select",
      },
    },
  },
} as Meta;

const ProgressBarTemplate: StoryFn<ProgressBarProps> = (
  props: ProgressBarProps,
) => {
  return <ProgressBar {...props} />;
};

export const BasicProgressBar = ProgressBarTemplate.bind({
  disabled: false,
});
