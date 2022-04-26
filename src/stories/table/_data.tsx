import { Column, Row } from "./_types";
import { Button } from "../button/Button";
import React from "react";

export const dataSource: Row[] = [
  {
    key: "160836",
    id: "160836",
    title:
      "[registrazione/form] - Nel momento in cui tarapia tapioco come se fosse antani",
    severity: "High",
    state: "Critical",
    action: (
      <Button type="link" size="sm">
        view more
      </Button>
    ),
  },
  {
    key: "161236",
    id: "161236",
    title:
      "[registrazione/form] - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem error et illum ipsam iure",
    severity: "Normal",
    state: "this col has a max width of 10ch",
    action: (
      <Button type="link" size="sm">
        view more
      </Button>
    ),
  },
  {
    key: "770836",
    id: "770836",
    title: "[registrazione/form] - Cum dolorem error et illum ipsam iure",
    severity: "Normal",
    state: "Critical",
    action: (
      <Button type="link" size="sm">
        view more
      </Button>
    ),
  },
];

export const columns: Column[] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    role: "overline",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    role: "title",
    hideIndex: true,
  },
  {
    title: "Severity",
    dataIndex: "severity",
    key: "severity",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    maxWidth: "110px",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    role: "cta",
    hideIndex: true,
  },
];

export const dataSourceAlternative: Row[] = [
  {
    key: 1,
    id: "T9090",
    position: 1,
    avatar: (
      <div
        style={{
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          background: "lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        NS
      </div>
    ),
    name: "Name Surname",
    exp: "50000",
  },
  {
    key: 2,
    id: "T9091",
    position: 2,
    avatar: (
      <div
        style={{
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          background: "lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        NS
      </div>
    ),
    name: "Name Surname",
    exp: "45000",
  },
];

export const columnsAlternative: Column[] = [
  {
    title: "",
    dataIndex: "borderedCell",
    key: "border",
    maxWidth: "6px",
    borderedCell: true,
    hideIndex: true,
    role: "border",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    hideIndex: true,
    role: "left",
  },
  {
    title: "",
    dataIndex: "avatar",
    key: "avatar",
    hideIndex: true,
    role: "left",
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    hideIndex: true,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    hideIndex: true,
  },
  {
    title: "Exp",
    dataIndex: "exp",
    key: "exp",
    hideIndex: true,
    role: "right",
  },
];

const columnsWithOrderBy: Column[] = columns.map((a) => ({ ...a }));
columnsWithOrderBy[0].isSortable = true;
columnsWithOrderBy[1].isSortable = true;
columnsWithOrderBy[2].isSortable = true;
export { columnsWithOrderBy };

const dataSourceLong = dataSource.map((a) => ({ ...a }));
dataSourceLong[0].date = "21/06/21";
dataSourceLong[1].date = "25/06/21";
dataSourceLong[2].date = "30/06/21";
export { dataSourceLong };

const columnsLong = [...columns];
columnsLong.splice(2, 0, {
  title: "Date",
  dataIndex: "date",
  key: "date",
});
export { columnsLong };
