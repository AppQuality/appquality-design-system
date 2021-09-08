import { Story, Meta } from "@storybook/react";
import { Steps, StepsProps } from "./Steps";

export default {
  title: "Steps",
  component: Steps,
} as Meta;

const Template: Story<StepsProps> = (args) => {
  return (
    <Steps {...args}>
      <Steps.Step
        title="step1 completed"
        description="a completed step"
        className="aq-mr-3"
        status="completed"
      />
      <Steps.Step
        title="step2"
        description="the second step"
        className="aq-mr-3"
      />
      <Steps.Step
        title="step3"
        description="the third step"
        className="aq-mr-3"
      />
    </Steps>
  );
};

export const BasicSteps = Template.bind({});
BasicSteps.args = { current: 1 };
