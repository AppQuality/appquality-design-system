import { Dash, SortDown, SortUp } from "react-bootstrap-icons";
import { ColumnSorterProps } from "./_types";
import { aqBootstrapTheme } from "../theme/defaultTheme";

export const ColumnSorter = ({ column, orderBy, order }: ColumnSorterProps) => {
  return (
    <div style={{ cursor: "pointer" }}>
      {orderBy === column.key ? (
        order === "ASC" ? (
          column.isSortable === "reverse" ? (
            <SortDown
              className="aq-ml-2"
              color={aqBootstrapTheme.palette.secondary}
            />
          ) : (
            <SortUp
              className="aq-ml-2"
              color={aqBootstrapTheme.palette.secondary}
            />
          )
        ) : column.isSortable === "reverse" ? (
          <SortUp
            className="aq-ml-2"
            color={aqBootstrapTheme.palette.secondary}
          />
        ) : (
          <SortDown
            className="aq-ml-2"
            color={aqBootstrapTheme.palette.secondary}
          />
        )
      ) : (
        <Dash className="aq-ml-2" color={aqBootstrapTheme.palette.secondary} />
      )}
    </div>
  );
};
