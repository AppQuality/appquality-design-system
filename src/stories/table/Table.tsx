import { Inboxes } from "react-bootstrap-icons";
import styled from "styled-components";
import { Spinner } from "../spinner/Spinner";
import { ColumnSorter } from "./ColumnSorter";
import { Column, Order, SortFunction, TableProps } from "./_types";
import { TableRow } from "./TableRow";

const cellPadding = "10px 5px";
const iconSize = 40;

interface GridProps {
  readonly columns: Column[];
  readonly isStriped?: boolean;
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

  @media (min-width: ${(p) => p.theme.grid.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(${(p) => p.columns.length}, auto);
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
    <Grid columns={columns} isStriped={isStriped} className={className}>
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
            key={dataRow.key}
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
