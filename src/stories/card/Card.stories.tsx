import { Card } from "./Card";
import { CardProps } from "./CardProps";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Card {...args} />
  </ThemeProvider>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: "Lorem ipsum dolor sit amet numquam concupescendit elit",
};

export const CardWithShadow = Template.bind({});
BasicCard.args = {
  children: "Lorem ipsum dolor sit amet numquam concupescendit elit",
  shadow: true,
};

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  children: "Lorem ipsum dolor sit amet numquam concupescendit elit",
  title: "My title",
};
