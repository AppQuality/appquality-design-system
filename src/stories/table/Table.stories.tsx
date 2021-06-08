import { BSCol, Container } from "../layout/Layout";
import { Card } from "../card/Card";
import { TableProps } from "./_types";
import { Table } from "./Table";
import { Story, Meta } from "@storybook/react";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { ThemeProvider } from "styled-components";
import { dataSource, columns } from "./_data";

export default {
  title: "Table",
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => {
  return (
    <ThemeProvider theme={aqBootstrapTheme}>
      <Container>
        <BSCol size="col-lg-9">
          <Card>
            <Table {...args} />
          </Card>
        </BSCol>
      </Container>
    </ThemeProvider>
  );
};

export const TableWithData = Template.bind({});
TableWithData.args = {
  dataSource: dataSource,
  columns: columns,
  isLoading: false,
};

export const TableEmpty = Template.bind({});
TableEmpty.args = {
  dataSource: [],
  columns: columns,
  isLoading: false,
};

export const TableLoading = Template.bind({});
TableLoading.args = {
  dataSource: dataSource,
  columns: columns,
  isLoading: true,
};
