import { Inboxes } from "react-bootstrap-icons";
import styled from "styled-components";
import { Spinner } from "../spinner/Spinner";
import { ColumnSorter } from "./ColumnSorter";
import { Column, Order, SortFunction, TableProps } from "./_types";
import { TableRow } from "./TableRow";
import { useEffect, useState } from "react";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { Select } from "../select/Select";
import { useWindowSize } from "../../shared/effects";
import { Option } from "../select/_types";

const cellPadding = "12px 8px";
const iconSize = 40;

interface GridProps {
  readonly columns: Column[];
  readonly isStriped?: boolean;
  readonly borderedCellColor?: string;
}

const Grid = styled.div<GridProps>`
  color: ${(p) => p.theme.palette.primary};

  .data-placeholder {
    grid-column: span ${(p) => p.columns.length};
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .thead.cell {
    display: none;
  }

  .thead.cell.borderedCell,
  .tbody.cell.borderedCell {
    padding: 0;
  }

  .tbody.cell.borderedCell {
    background: ${(p) => p.borderedCellColor};
  }

  @media (min-width: ${(p) => p.theme.grid.breakpoints.lg}) {
    display: grid;
    grid-template-columns: ${(p) =>
      p.columns.map((col) => `${col.maxWidth || "auto"} `)};
    .cell {
      overflow-wrap: break-word;
      font-weight: 400;
      padding: ${cellPadding};
    }
    .thead.cell,
    .tbody.cell:nth-last-child(1n + ${(p) => p.columns.length + 1}) {
      border-bottom: 1px solid rgb(216, 216, 216);
    }
    ${(p) =>
      p.isStriped &&
      `
      .tbody.cell.odd {
        background-color: ${p.theme.colors.gray100}
      }`};
    .thead.cell {
      font-family: ${(p) => p.theme.typography.fontFamily.serif};
      display: flex;
      align-items: center;
    }
  }
`;
export const Table = ({
  dataSource,
  columns,
  isLoading,
  isStriped,
  isExpandable,
  orderBy,
  order,
  className,
  i18n = {
    loading: "Loading Data",
    empty: "There's no data here",
  },
  borderedCellColor,
  mobileAlternative,
}: TableProps) => {
  const LoadingStatus = () => (
    <div className="data-placeholder -loading aq-mt-4 aq-text-primaryVariant">
      <Spinner className="aq-ml-1" />
      <div>{i18n.loading}</div>
    </div>
  );

  const DataPlaceholder = () => (
    <div className="data-placeholder -empty aq-mt-4 aq-text-primaryVariant">
      <Inboxes className="aq-my-3" size={iconSize} />
      <div className="aq-mt-2 aq-text aq-text-primary-variant">
        {i18n.empty}
      </div>
    </div>
  );

  const handleSort = (order: Order, onSort: SortFunction) => {
    if (order === "DESC") {
      onSort("ASC");
    } else if (order === "ASC") {
      onSort("DESC");
    }
  };
  return (
    <Grid
      columns={columns}
      isStriped={isStriped}
      className={className}
      borderedCellColor={borderedCellColor}
    >
      <>
        {columns.map((col) => {
          const sortTable = () => {
            if (col.isSortable && order && col.onSort) {
              handleSort(order, col.onSort);
            }
          };
          return (
            <div
              key={`heading-${col.key}`}
              className={`thead cell ${col.borderedCell ? "borderedCell" : ""}`}
              onClick={sortTable}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {col.title}
                {col.isSortable && (
                  <ColumnSorter column={col} orderBy={orderBy} order={order} />
                )}
              </div>
            </div>
          );
        })}
      </>

      {isLoading ? (
        <LoadingStatus />
      ) : dataSource.length ? (
        dataSource.map((dataRow, index) => (
          <TableRow
            columns={columns}
            dataRow={dataRow}
            key={dataRow.key}
            isExpandable={isExpandable}
            className={index % 2 === 0 ? "odd" : "even"}
            mobileAlternative={mobileAlternative}
            borderedCellColor={borderedCellColor}
          />
        ))
      ) : (
        <DataPlaceholder />
      )}
    </Grid>
  );
};

export interface SortTableSelectProps<T> {
  order: "ASC" | "DESC";
  orderBy: T;
  columns: Column[];
  label?: string;
}

export const SortTableSelect = ({
  order,
  orderBy,
  columns,
  label = "Order By",
}: SortTableSelectProps<string>) => {
  useWindowSize();
  const [orderByValue, setOrderByValue] = useState<Option>();
  const orderByOptions: Option[] = [];
  const orderByCols = columns.filter((col) => col.isSortable);
  orderByCols.forEach((col) => {
    orderByOptions.push({
      label: `${col.title} ${col.isSortable === "reverse" ? "↓" : "↑"}`,
      value: `${col.dataIndex} ASC`,
      order: "ASC",
      orderBy: col.dataIndex,
    });
    orderByOptions.push({
      label: `${col.title} ${col.isSortable === "reverse" ? "↑" : "↓"}`,
      value: `${col.dataIndex} DESC`,
      order: "DESC",
      orderBy: col.dataIndex,
    });
  });
  const sortTable = (value: Option) => {
    const column = columns.find((col) => col.dataIndex === value.orderBy);
    if (column?.onSort) column.onSort(value.order);
  };
  useEffect(() => {
    const val = orderByOptions.find(
      (opt) => opt.value === `${orderBy} ${order}`
    );
    setOrderByValue(val);
  }, [orderBy, order]);
  return window.matchMedia(
    `only screen and (min-width: ${aqBootstrapTheme.grid.breakpoints.lg})`
  ).matches ? null : (
    <div className="aq-mb-3">
      <Select
        label={label}
        onChange={sortTable}
        name="orderby"
        options={orderByOptions}
        value={orderByValue || { label: "", value: "" }}
        isSearchable={false}
        isClearable={false}
      />
    </div>
  );
};
