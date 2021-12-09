import { Dash, SortDown, SortUp } from "react-bootstrap-icons";
import { ColumnSorterProps } from "./_types";

export const ColumnSorter = ({ column, orderBy, order }: ColumnSorterProps) => {
  return (
    <>
      {
        <span className="aq-ml-2 aq-text-secondary" style={{ display: "flex" }}>
          {orderBy === column.key ? (
            order === "ASC" ? (
              <SortUp />
            ) : (
              <SortDown />
            )
          ) : (
            <Dash />
          )}
        </span>
      }
    </>
  );
};
