import { Dash, SortUp, SortDown } from "react-bootstrap-icons";
import { ColumnSorterProps } from "./_types";

export const ColumnSorter = ({ column, orderBy, order }: ColumnSorterProps) => {
  return (
    <>
      {
        <span className="aq-ml-1">
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
