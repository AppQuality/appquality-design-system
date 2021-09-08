import { Story, Meta } from "@storybook/react";
import { Wizard, WizardProps } from "./Wizard";

export default {
  title: "Wizard",
  component: Wizard,
} as Meta;

const Template: Story<WizardProps> = (args) => {
  return (
    <Wizard {...args} active="step1">
      <Wizard.Step id="step1">
        <div className="aq-m-3">Lorem ipsum dolor sit amet</div>
      </Wizard.Step>
    </Wizard>
  );
};

export const BasicWizard = Template.bind({});
BasicWizard.args = { active: "step1" };
