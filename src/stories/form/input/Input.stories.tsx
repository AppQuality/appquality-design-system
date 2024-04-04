import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Inputs",
  component: Input,
} as Meta;

export const SimpleInput: StoryFn = () => (
  <Input id="input" type="text" placeholder="Placeholder" disabled={false} />
);
export const SearchInput: StoryFn = () => (
  <Input id="input" type="search" placeholder="Placeholder" disabled={false} />
);
export const InvalidInput: StoryFn = () => (
  <Input
    id="input"
    type="text"
    isInvalid={true}
    placeholder="Placeholder"
    disabled={false}
  />
);
export const ReadonlyInput: StoryFn = () => (
  <Input
    id="input"
    type="text"
    placeholder="Placeholder"
    value="My value"
    disabled={true}
  />
);

export const PasswordInput: StoryFn = () => (
  <Input
    id="input"
    type="password"
    placeholder="Placeholder"
    disabled={false}
  />
);
