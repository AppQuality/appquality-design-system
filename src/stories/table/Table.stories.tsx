import { TableProps } from "./_types";
import { OldTable, Table } from "./Table";
import { Story, Meta } from "@storybook/react";
import { dataSource, columns, columnsWithOrderBy } from "./_data";

export default {
  title: "Table",
  component: Table,
} as Meta;

const OldTemplate: Story<TableProps> = (args) => {
  return <OldTable {...args} />;
};
const Template: Story<TableProps> = (args) => {
  return <Table {...args} />;
};

export const OldTemplateTableWithData = OldTemplate.bind({});
OldTemplateTableWithData.args = {
  dataSource: dataSource,
  columns: columns,
  isLoading: false,
};

export const OldTemplateTableEmpty = OldTemplate.bind({});
OldTemplateTableEmpty.args = {
  dataSource: [],
  columns: columns,
  isLoading: false,
};

export const OldTemplateTableLoading = OldTemplate.bind({});
OldTemplateTableLoading.args = {
  dataSource: dataSource,
  columns: columns,
  isLoading: true,
};

export const OldTemplateTableWithOrderBy = OldTemplate.bind({});
OldTemplateTableWithOrderBy.args = {
  dataSource: dataSource,
  columns: columnsWithOrderBy,
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

export const TableWithOrderBy = Template.bind({});
TableWithOrderBy.args = {
  dataSource: dataSource,
  columns: columnsWithOrderBy,
};
