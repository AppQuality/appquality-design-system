import { Inboxes } from "react-bootstrap-icons";
import styled from "styled-components";
import { Spinner } from "../spinner/Spinner";
import { ColumnSorter } from "./ColumnSorter";
import { CardRole, Column, TableProps, TableRowProps } from "./_types";
import { useWindowSize } from "../../shared/effects/useWindowSize";

export const TableRow = ({ columns, dataRow }: TableRowProps) => {
  useWindowSize();

  const BasicRow = () => (
    <>
      {columns.map((col) => (
        <div key={`${dataRow.key}-${col.key}`}>{dataRow[col.dataIndex]}</div>
      ))}
    </>
  );

  const TableCard = () => (
    <div className="card-row">
      {columns.map(
        (col) =>
          col.role && (
            <div
              key={`${dataRow.key}-${col.key}`}
              style={{ gridArea: col.role }}
            >
              {dataRow[col.dataIndex]}
            </div>
          )
      )}
      <div className="more-info">
        {columns.map(
          (col) =>
            !col.role && (
              <div
                key={`${dataRow.key}-${col.key}`}
                style={{ gridArea: col.role }}
              >
                {dataRow[col.dataIndex]}
              </div>
            )
        )}
      </div>
    </div>
  );

  return window.matchMedia("only screen and (min-width: 768px)").matches ? (
    <BasicRow />
  ) : (
    <TableCard />
  );
};
