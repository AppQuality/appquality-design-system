import { Spinner, SpinnerWrapper } from "./Spinner";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Spinner",
  component: Spinner,
} as Meta;

const SpinnerTemplate: Story = () => <Spinner />;
export const BasicSpinner = SpinnerTemplate.bind({});
const SpinnerWrapperTemplate: Story = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);
export const BasicSpinnerFullpage = SpinnerWrapperTemplate.bind({});
