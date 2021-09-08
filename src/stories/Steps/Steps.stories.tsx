import { Story, Meta } from "@storybook/react";
import { Steps, StepsProps } from "./Steps";

export default {
  title: "Steps",
  component: Steps,
} as Meta;

const Template: Story<StepsProps> = (args) => {
  return (
    <Steps {...args}>
      <Steps.Step title="step1" description="the first step" />
      <Steps.Step title="step2" description="the second step" />
      <Steps.Step title="step3" description="the third step" />
    </Steps>
  );
};

export const BasicSteps = Template.bind({});
BasicSteps.args = { current: 0 };
