import { TableProps } from "./_types";
import { Table } from "./Table";
import { Story, Meta } from "@storybook/react";
import {
  dataSource,
  columns,
  columnsWithOrderBy,
  dataSourceLong,
  columnsLong,
  dataSourceAlternative,
  columnsAlternative,
} from "./_data";

export default {
  title: "Table",
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => {
  return <Table {...args} />;
};

export const TableWithData = Template.bind({});
TableWithData.args = {
  dataSource: dataSource,
  columns: columns,
  isLoading: false,
};

export const ExpandableTable = Template.bind({});
ExpandableTable.args = {
  dataSource: dataSourceLong,
  columns: columnsLong,
  isLoading: false,
  isExpandable: true,
};

export const TableEmpty = Template.bind({});
TableEmpty.args = {
  dataSource: [],
  columns: columns,
  isLoading: false,
  className: "pippo",
};

export const TableLoading = Template.bind({});
TableLoading.args = {
  dataSource: dataSource,
  columns: columns,
  isLoading: true,
};

export const TableWithOrderBy = Template.bind({});
TableWithOrderBy.args = {
  dataSource: dataSource,
  columns: columnsWithOrderBy,
};

export const TableAlternative = Template.bind({});
TableAlternative.args = {
  dataSource: dataSourceAlternative,
  columns: columnsAlternative,
  isLoading: false,
  borderedCellColor: "#7986D8",
  mobileAlternative: true,
  highlightedColor: "#7986D81A",
  hideHeader: false,
};
