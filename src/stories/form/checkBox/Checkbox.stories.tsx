import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

export const CheckboxStates: StoryFn = () => (
  <>
    <Checkbox
      id="simple"
      disabled={false}
      label="simple checkbox"
      className="aq-mb-2"
    />
    <Checkbox
      id="simple2"
      disabled={false}
      defaultChecked
      label={<span>checked checkbox with ReactNode as label</span>}
      className="aq-mb-2"
    />
    <Checkbox
      className="aq-mb-2"
      id="invalid"
      label="invalid checkbox"
      isInvalid={true}
      disabled={false}
    />
    <Checkbox
      className="aq-mb-2"
      id="disabled"
      label="disabled checkbox"
      value="My value"
      disabled={true}
    />
    <Checkbox
      className="aq-mb-2"
      id="disabled checked"
      label="default checked checkbox"
      value="My value"
      defaultChecked
      disabled={true}
    />
    <Checkbox
      className="aq-mb-2"
      id="disabled checked"
      label="checkbox with a very very long label, so long that somebody thinks that has a good chance of taking multiple lines, at least on mobile devices or narrow column. It's important to note that we don't really know this but it's an educated guess I think. Check this checkbox if you agree with me!"
    />
  </>
);
