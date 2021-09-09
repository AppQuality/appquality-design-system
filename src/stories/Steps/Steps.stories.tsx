import { Story, Meta } from "@storybook/react";
import { Steps, StepsProps } from "./Steps";
import { useState } from "react";

export default {
  title: "Steps",
  component: Steps,
} as Meta;

const { Step } = Steps;

const data = [
  {
    title: "Step 1 completed",
    desc: "a completed step",
    completed: true,
  },
  {
    title: "Step 2",
    desc: "the second step",
  },
  {
    title: "Step 3",
    desc: "the third step",
  },
  {
    title: "Step 4",
    desc: "the fourth step",
  },
];

const Template: Story<StepsProps> = (args) => {
  return (
    <Steps {...args} className="aq-m-3">
      {data.map((item) => (
        <Step
          title={item.title}
          description={item.desc}
          isCompleted={item.completed}
        />
      ))}
    </Steps>
  );
};
const TemplateClickable: Story<StepsProps> = (args) => {
  const [active, setActive] = useState(0);
  return (
    <Steps
      {...args}
      current={active}
      clickHandler={setActive}
      className="aq-m-3"
    >
      {data.map((item) => (
        <Step
          title={item.title}
          description={item.desc}
          isCompleted={item.completed}
        />
      ))}
    </Steps>
  );
};

const TemplateClickableControl: Story<StepsProps> = (args) => {
  const [active, setActive] = useState(1);

  const handleChange = (index: number, current: number) => {
    if (index < current || data[current].completed) {
      setActive(index);
    } else {
      alert("you can go on only if you complete the step");
    }
  };
  return (
    <Steps
      {...args}
      current={active}
      clickHandler={handleChange}
      className="aq-m-3"
    >
      {data.map((item) => (
        <Step
          title={item.title}
          description={item.desc}
          isCompleted={item.completed}
        />
      ))}
    </Steps>
  );
};

export const BasicSteps = Template.bind({ current: 1 });
export const ClickableSteps = TemplateClickable.bind({ current: 1 });
export const ClickableStepsWithControl = TemplateClickableControl.bind({});
