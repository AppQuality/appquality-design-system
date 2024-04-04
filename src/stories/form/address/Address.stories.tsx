import { Meta, StoryFn } from "@storybook/react";
import Address from "./Address";

export default {
  title: "Address",
  component: Address,
} as Meta;

export const SimpleAddress: StoryFn = () => (
  <Address
    id="address"
    onChange={(data) => {
      console.log(data);
    }}
    placeholder="Select an address"
  />
);

export const PrefilledAddress: StoryFn = () => (
  <Address
    id="address"
    initialValue="Via dell'Innovazione Digitale, 3, Cremona, CR, Italia"
    onChange={(data) => {
      console.log(data);
    }}
    placeholder="Select an address"
  />
);
