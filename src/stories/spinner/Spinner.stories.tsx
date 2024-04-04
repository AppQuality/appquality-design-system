import { Meta, StoryFn } from "@storybook/react";
import { Spinner, SpinnerWrapper } from "./Spinner";

export default {
  title: "Spinner",
  component: Spinner,
} as Meta;

const SpinnerTemplate: StoryFn = () => <Spinner />;
export const BasicSpinner = SpinnerTemplate.bind({});
const SpinnerWrapperTemplate: StoryFn = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);
export const BasicSpinnerFullpage = SpinnerWrapperTemplate.bind({});
