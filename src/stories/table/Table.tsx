import { Inboxes } from "react-bootstrap-icons";
import styled from "styled-components";
import { Spinner } from "../spinner/Spinner";
import { ColumnSorter } from "./ColumnSorter";
import { Column, Order, SortFunction, TableProps } from "./_types";
import { TableRow } from "./TableRow";

const cellPadding = "10px 5px";

const BasicTable = ({
  dataSource,
  columns,
  isLoading,
  isStriped,
  orderBy,
  order,
  className,
  i18n = {
    loading: "Loading Data",
    empty: "There's no data here",
  },
}: TableProps) => {
  const LoadingStatus = () => (
    <div className="aq-table-loading-placeholder">
      <Spinner />
      <div>{i18n.loading}</div>
    </div>
  );

  const DataPlaceholder = () => (
    <tr className="aq-table-empty-placeholder">
      <td colSpan={columns.length}>
        <Inboxes className="aq-table-placeholder-icon" />
        <div>{i18n.empty}</div>
      </td>
    </tr>
  );

  let tableClass = "aq-table margin-default";
  if (isStriped) tableClass += " aq-striped";
  const handleSort = ({
    order,
    onSort,
  }: {
    order?: "ASC" | "DESC";
    onSort: (order: Order) => void;
  }) => {
    order = order === "DESC" ? "ASC" : "DESC";
    onSort(order);
  };
  return (
    <div className={className}>
      {isLoading && <LoadingStatus />}
      <table className={tableClass}>
        <thead>
          <tr>
            {columns.map((column) => {
              let className = column.align ? `aq-text-${column.align}` : "";
              let justifyContent = "flex-start";
              if (column.align == "center") justifyContent = "center";
              else if (column.align == "right") justifyContent = "flex-end";
              return (
                <th
                  key={column.key}
                  className={`${className}${
                    column.isSortable ? " sortable" : ""
                  }`}
                  onClick={
                    column.isSortable
                      ? () =>
                          column.onSort &&
                          handleSort({ order, onSort: column.onSort })
                      : undefined
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: justifyContent,
                    }}
                  >
                    <span>{column.title}</span>
                    {column.isSortable && (
                      <ColumnSorter
                        column={column}
                        orderBy={orderBy}
                        order={order}
                      />
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.length ? (
            dataSource.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => {
                  let className = "";
                  if (column.align) className += ` aq-text-${column.align}`;
                  return (
                    <td
                      title={
                        typeof row[column.dataIndex] == "object"
                          ? row[column.dataIndex].title
                          : row[column.dataIndex]
                      }
                      className={className}
                      key={`${row.key}-${column.key}`}
                    >
                      {typeof row[column.dataIndex] == "object"
                        ? row[column.dataIndex].content
                        : row[column.dataIndex]}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <DataPlaceholder />
          )}
        </tbody>
      </table>
    </div>
  );
};

export const OldTable = styled(BasicTable)`
  position: relative;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  table {
    table-layout: auto;
    border-collapse: separate;
    border-spacing: 0;
    text-align: left;
    width: 100%;

    &.aq-striped > tbody > tr:nth-of-type(odd) {
      background-color: ${(props) => props.theme.colors.gray100};
    }

    thead {
      font-family: ${(props) => props.theme.typography.fontFamily.serif};
      color: ${(props) => props.theme.palette.primary};

      th {
        overflow-wrap: break-word;
        font-weight: 500;
        padding: ${cellPadding};
        border-bottom: 1px solid ${(props) => props.theme.colors.gray300};

        &.sortable {
          cursor: pointer;
        }
      }
    }
    tbody {
      td {
        overflow-wrap: break-word;
        font-weight: 400;
        padding: ${cellPadding};
      }
      tr:hover:not(.aq-table-empty-placeholder) {
        background-color: ${(props) => props.theme.colors.purple100};
      }
      tr:not(:last-child) td {
        border-bottom: 1px solid ${(props) => props.theme.colors.elementGeneric};
      }
    }
  }
`;

interface GridProps {
  readonly columns: Column[];
  readonly isStriped?: boolean;
}

const Grid = styled.div<GridProps>`
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

  @media (min-width: ${(p) => p.theme.grid.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(${(p) => p.columns.length}, auto);
    .cell {
      overflow-wrap: break-word;
      font-weight: 400;
      padding: 10px 5px;
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
}: TableProps) => {
  const LoadingStatus = () => (
    <div className="data-placeholder -loading aq-mt-4">
      <Spinner className="aq-ml-1" />
      <div>{i18n.loading}</div>
    </div>
  );

  const DataPlaceholder = () => (
    <div className="data-placeholder -empty aq-mt-4">
      <Inboxes className="aq-my-3" size={40} />
      <div className="aq-mt-2">{i18n.empty}</div>
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
    <Grid columns={columns} isStriped={isStriped}>
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
              className="thead cell"
              onClick={sortTable}
            >
              {col.title}
              {col.isSortable && (
                <ColumnSorter column={col} orderBy={orderBy} order={order} />
              )}
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
            isExpandable={isExpandable}
            className={index % 2 === 0 ? "odd" : "even"}
          />
        ))
      ) : (
        <DataPlaceholder />
      )}
    </Grid>
  );
};
