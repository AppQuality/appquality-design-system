import Address from "./Address";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Address",
  component: Address,
} as Meta;

export const SimpleAddress: Story = () => (
  <Address
    id="address"
    onChange={(data) => {
      console.log(data);
    }}
    placeholder="Select an address"
  />
);

export const PrefilledAddress: Story = () => (
  <Address
    id="address"
    initialValue="Via dell'Innovazione Digitale, 3, Cremona, CR, Italia"
    onChange={(data) => {
      console.log(data);
    }}
    placeholder="Select an address"
  />
);
