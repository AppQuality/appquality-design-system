import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { Card } from "./Card";
import { CardProps } from "./CardProps";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Card {...args} />
  </ThemeProvider>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: "Lorem ipsum dolor sit amet numquam concupescendit elit",
};

export const CardWithShadow = Template.bind({});
CardWithShadow.args = {
  className: "aq-m-2",
  children: "Lorem ipsum dolor sit amet numquam concupescendit elit",
  shadow: true,
};

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  children: "Lorem ipsum dolor sit amet numquam concupescendit elit",
  title: "My title",
};

export const CardWithCustomTitle = Template.bind({});
CardWithCustomTitle.args = {
  children: "Lorem ipsum dolor sit amet numquam concupescendit elit",
  title: (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>My title</div>
      <div style={{ cursor: "pointer" }}>?</div>
    </div>
  ),
};
