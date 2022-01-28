import { Inboxes } from "react-bootstrap-icons";
import styled from "styled-components";
import { Spinner } from "../spinner/Spinner";
import { ColumnSorter } from "./ColumnSorter";
import { CardRole, Column, TableProps } from "./_types";
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
    onSort: (order: string) => void;
  }) => {
    order = order === "DESC" ? "ASC" : "DESC";
    onSort(order);
  };
  return (
    <div className={className}>
      {isLoading && <LoadingStatus />}
      <table className={tableClass}>
        <colgroup>
          {columns.map((column, index) => {
            return column.long ? (
              <col key={index} style={{ width: "auto", minWidth: "auto" }} />
            ) : (
              <col
                key={index}
                style={{
                  width: `${column.width || "10ch"}`,
                  minWidth: `${column.width || "10ch"}`,
                }}
              />
            );
          })}
        </colgroup>
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
                  if (column.long) className = "aq-table-cell-ellipsis";
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
    .aq-table-cell-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: keep-all;
      max-width: 100vw;
    }
    @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
      .aq-table-cell-ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: keep-all;
        max-width: 0;
      }
    }
  }
  .aq-table-empty-placeholder {
    height: 200px;
    text-align: center;
    color: ${(props) => props.theme.colors.gray600};
    td {
      vertical-align: middle;
    }
  }
  .aq-table-placeholder-icon {
    font-size: 40px;
    margin-bottom: 1rem;
  }
  .aq-table-loading-placeholder {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`;

interface GridProps {
  readonly columns: Column[];
}
interface CellProps {
  readonly role: CardRole;
}
const Grid = styled.div<GridProps>`
  .header.cell {
    display: none;
  }
  @media (min-width: ${(props) => props.theme.grid.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns.length}, auto);
    grid-gap: ${(props) => props.theme.grid.sizes[3]};
    grid-row-gap: 0;

    .header.cell {
      display: initial;
    }
  }
`;
export const Table = ({
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
  return (
    <Grid columns={columns}>
      <>
        {columns.map((col) => (
          <div key={`heading-${col.key}`} className="header cell">
            {col.title}
          </div>
        ))}
      </>
      {dataSource.map((dataRow) => (
        <TableRow columns={columns} dataRow={dataRow} />
      ))}
    </Grid>
  );
};
