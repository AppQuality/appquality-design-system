import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { Header } from "./Header";
import { testUser } from "./_data";
import { HeaderProps } from "./_types";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Header {...args} />
  </ThemeProvider>
);

export const LoggedOutHeader = Template.bind({});
LoggedOutHeader.args = {
  isLoading: false,
};

export const LoggedInHeader = Template.bind({});
LoggedInHeader.args = {
  isLoading: false,
  user: testUser,
};

export const LoadingHeader = Template.bind({});
LoadingHeader.args = {
  isLoading: true,
};
