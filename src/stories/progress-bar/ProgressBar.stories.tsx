import { ProgressBar } from "./ProgressBar";
import { Meta, Story } from "@storybook/react";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import styled, { ThemeProvider } from "styled-components";
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

const ProgressBarTemplate: Story<ProgressBarProps> = (
  props: ProgressBarProps
) => {
  return (
    <DemoWrapper>
      <ThemeProvider theme={aqBootstrapTheme}>
        <ProgressBar {...props} />
      </ThemeProvider>
    </DemoWrapper>
  );
};

export const BasicProgressBar = ProgressBarTemplate.bind({
  disabled: false,
});

const DemoWrapper = styled.div`
  margin: 1rem;
`;
