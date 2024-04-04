import { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { Pagination } from "./Pagination";
import { BasicPaginationArgs } from "./Pagination.stories.args";
import { PaginationProps } from "./PaginationProps";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Pagination {...args} />
  </ThemeProvider>
);

export const BasicPagination = Template.bind({});
BasicPagination.args = BasicPaginationArgs;
