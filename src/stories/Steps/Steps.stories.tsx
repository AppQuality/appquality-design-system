import { Story, Meta } from "@storybook/react";
import { Steps, StepsProps } from "./Steps";
import { useState } from "react";
import { BSCol, BSGrid } from "../layout/Layout";
import { set } from "husky";

export default {
  title: "Steps",
  component: Steps,
} as Meta;

const Template: Story<StepsProps> = (args) => {
  return (
    <Steps {...args} current={1} className="aq-m-3">
      <Steps.Step
        title="step1 completed"
        description="a completed step"
        isCompleted
      />
      <Steps.Step title="step2 current" description="the second step" />
      <Steps.Step title="step3 next" description="the third step" />
      <Steps.Step title="step4 next" description="the fourth step" />
    </Steps>
  );
};
const TemplateClickable: Story<StepsProps> = (args) => {
  const [active, setActive] = useState(0);
  return (
    <Steps {...args} current={active} onChange={setActive} className="aq-m-3">
      <Steps.Step
        title="step1 completed"
        description="a completed step"
        isCompleted
      />
      <Steps.Step title="step2 current" description="the second step" />
      <Steps.Step title="step3 next" description="the third step" />
      <Steps.Step title="step4 next" description="the fourth step" />
    </Steps>
  );
};

export const BasicSteps = Template.bind({});
export const ClickableSteps = TemplateClickable.bind({});
