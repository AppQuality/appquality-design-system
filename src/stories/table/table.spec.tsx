import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { Table } from "./Table";
import { dataSource, columns } from "./_data";
import React from "react";

describe("Table should render data correctly", () => {
  it("There should be as many tbody tr as object in parameter dataSource", () => {
    const { container } = render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Table dataSource={dataSource} columns={columns} />
      </ThemeProvider>
    );
    const tr = container.querySelectorAll("tbody tr");
    expect(tr.length).toEqual(dataSource.length);
  });
  it("There should be as many thead th as columns in parameters", () => {
    const { container } = render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Table dataSource={dataSource} columns={columns} />
      </ThemeProvider>
    );
    const th = container.querySelectorAll("thead th");
    expect(th.length).toEqual(columns.length);
  });
});

describe("If no data is provided", () => {
  it("Table should render an empty placeholder", () => {
    const { container } = render(
      <ThemeProvider theme={aqBootstrapTheme}>
        <Table dataSource={[]} columns={columns} />
      </ThemeProvider>
    );
    const placeholder = container.querySelectorAll(
      ".aq-table-empty-placeholder"
    );
    expect(placeholder.length).toEqual(1);
  });
});
