import { Meta, StoryFn } from "@storybook/react";
import { Radio } from "./Radio";

export default {
  title: "Radio",
  component: Radio,
} as Meta;

export const RadioStates: StoryFn = () => (
  <>
    <Radio
      id="simple"
      name="states"
      disabled={false}
      label="simple radio"
      className="aq-mb-2"
      value="simple"
      onChange={(val) => console.log(val)}
    />
    <Radio
      id="simple2"
      name="states"
      disabled={false}
      checked
      label={<span>checked radio with ReactNode as label</span>}
      className="aq-mb-2"
      value="checked_with_react"
      onChange={(val) => console.log(val)}
    />
    <Radio
      className="aq-mb-2"
      name="states"
      id="invalid"
      label="invalid radio"
      isInvalid={true}
      disabled={false}
      value="invalid"
      onChange={(val) => console.log(val)}
    />
    <Radio
      className="aq-mb-2"
      id="disabled"
      name="states"
      label="disabled radio"
      value="disabled"
      disabled={true}
      onChange={(val) => console.log(val)}
    />
    <Radio
      className="aq-mb-2"
      name="states"
      id="disabled checked"
      label="default checked radio"
      value="default_checked"
      onChange={(val) => console.log(val)}
      checked={true}
      disabled={true}
    />
    <Radio
      className="aq-mb-2"
      name="states"
      id="disabled checked"
      label="radio with a very very long label, so long that somebody thinks that has a good chance of taking multiple lines, at least on mobile devices or narrow column. It's important to note that we don't really know this but it's an educated guess I think. Check this radio if you agree with me!"
      value="long_radio"
      onChange={(val) => console.log(val)}
    />
  </>
);
