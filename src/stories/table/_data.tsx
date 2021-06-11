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
    state: "this is a Critical bug",
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
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    long: true,
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
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: "110px",
  },
];
