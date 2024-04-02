import { Meta, StoryFn } from "@storybook/react";
import { ChevronLeft, ChevronRight, Search } from "react-bootstrap-icons";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { Button, ButtonGroup } from "./Button";
import { ButtonProps } from "./_types";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Button {...args} />
  </ThemeProvider>
);
const GroupTemplate: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <ButtonGroup>
      <Button flat={true}>
        <ChevronLeft />
      </Button>
      <Button squared={true}>1</Button>
      <Button flat={true}>
        <ChevronRight />
      </Button>
    </ButtonGroup>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  children: "click",
  onClick: () => alert("clicked!"),
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/G3V1VENAN7iLSB4PtHmWr8/Storybook-reference?node-id=3%3A9",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  children: "click",
  onClick: () => alert("clicked!"),
};

export const Link = Template.bind({});
Link.args = {
  kind: "link",
  children: "This render as an anchor tag, but looks like a Button!",
  forwardedAs: "a",
  href: "#",
  target: "_blank",
};

export const Disabled = Template.bind({});
Disabled.args = {
  kind: "secondary",
  children: "click",
  disabled: true,
  onClick: () => alert("clicked!"),
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "click",
  onClick: () => alert("clicked!"),
};
Large.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/G3V1VENAN7iLSB4PtHmWr8/Storybook-reference?node-id=3%3A10",
  },
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "click",
  onClick: () => alert("clicked!"),
};
Small.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/G3V1VENAN7iLSB4PtHmWr8/Storybook-reference?node-id=3%3A8",
  },
};

export const Squared = Template.bind({});
Squared.args = {
  children: "o",
  onClick: () => alert("clicked!"),
  squared: true,
};
Squared.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/G3V1VENAN7iLSB4PtHmWr8/Storybook-reference?node-id=13%3A8",
  },
};

export const SquaredLarge = Template.bind({});
SquaredLarge.args = {
  children: "o",
  size: "lg",
  onClick: () => alert("clicked!"),
  squared: true,
};
SquaredLarge.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/G3V1VENAN7iLSB4PtHmWr8/Storybook-reference?node-id=13%3A14",
  },
};

export const SquaredSmall = Template.bind({});
SquaredSmall.args = {
  children: "o",
  size: "sm",
  onClick: () => alert("clicked!"),
  squared: true,
};
SquaredSmall.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/G3V1VENAN7iLSB4PtHmWr8/Storybook-reference?node-id=13%3A0",
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <Search />,
};

export const GroupedButtons = GroupTemplate.bind({});
GroupTemplate.args = {
  children: "1",
};
