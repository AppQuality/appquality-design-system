import Input from "./Input";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Inputs",
  component: Input,
} as Meta;

export const SimpleInput: Story = () => (
  <Input id="input" type="text" placeholder="Placeholder" disabled={false} />
);
export const SearchInput: Story = () => (
  <Input id="input" type="search" placeholder="Placeholder" disabled={false} />
);
export const InvalidInput: Story = () => (
  <Input
    id="input"
    type="text"
    isInvalid={true}
    placeholder="Placeholder"
    disabled={false}
  />
);
export const ReadonlyInput: Story = () => (
  <Input
    id="input"
    type="text"
    placeholder="Placeholder"
    value="My value"
    disabled={true}
  />
);
