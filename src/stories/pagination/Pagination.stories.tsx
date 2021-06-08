import { Story, Meta } from "@storybook/react";
import { Pagination } from "./Pagination";
import { PaginationProps } from "./PaginationProps";
import { BasicPaginationArgs } from "./Pagination.stories.args";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Pagination {...args} />
  </ThemeProvider>
);

export const BasicPagination = Template.bind({});
BasicPagination.args = BasicPaginationArgs;
