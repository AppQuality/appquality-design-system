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

export const TemplateWithCustomStyle = Template.bind({});
TemplateWithCustomStyle.args = {
  dataSource: [
    {
      key: "1",
      cell1: {
        title: "Cell 1",
        content: "Cell 1",
        style: { backgroundColor: "red" },
      },
      cell2: "Cell 2",
    },
    {
      key: "1",
      cell1: "Cell 1",
      cell2: {
        title: "Cell 2",
        content: "Cell 2",
        style: { backgroundColor: "red", color: "white" },
      },
    },
  ],
  columns: [
    {
      title: "Cell 1",
      dataIndex: "cell1",
      key: "cell1",
    },
    {
      title: "Cell 2",
      dataIndex: "cell2",
      key: "cell2",
    },
  ],
  isLoading: false,
};
