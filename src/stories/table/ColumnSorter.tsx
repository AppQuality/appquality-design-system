import { Dash, SortDown, SortUp } from "react-bootstrap-icons";
import { ColumnSorterProps } from "./_types";

export const ColumnSorter = ({ column, orderBy, order }: ColumnSorterProps) => {
  return (
    <>
      {orderBy === column.key ? (
        order === "ASC" ? (
          <SortUp className="aq-ml-2" />
        ) : (
          <SortDown className="aq-ml-2" />
        )
      ) : (
        <Dash className="aq-ml-2" />
      )}
    </>
  );
};
