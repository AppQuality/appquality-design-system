import { Button, ButtonGroup } from "./Button";
import { ButtonProps } from "./ButtonProps";
import { Story, Meta } from "@storybook/react";
import { Search } from "react-bootstrap-icons";
import { ThemeProvider } from "styled-components";
import aqBootstrapTheme from "../theme/defaultTheme";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Button {...args} />
  </ThemeProvider>
);
const GroupTemplate: Story<ButtonProps> = (args) => (
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
  type: "primary",
  children: "click",
  onClick: () => alert("clicked!"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "click",
  onClick: () => alert("clicked!"),
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "click",
  onClick: () => alert("clicked!"),
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "click",
  onClick: () => alert("clicked!"),
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <Search />,
};

export const GroupedButtons = GroupTemplate.bind({});
GroupTemplate.args = {
  children: "1",
};
