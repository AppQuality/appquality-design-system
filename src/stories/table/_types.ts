import { BaseProps } from "../../shared/_types";

export type Order = "ASC" | "DESC";

export type CardRole = "overline" | "cta" | "title" | "more";

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  long?: boolean; // ellipsis with auto width
  width?: string; // default 10ch
  isSortable?: boolean;
  onSort?: (orderBy: any) => void;
  align?: "left" | "center" | "right";
  role?: CardRole;
}

export interface Row {
  key: string | number;
  [index: string]: any;
}

export interface ColumnSorterProps {
  column: Column;
  order?: string;
  orderBy?: string;
}

export interface TableProps extends BaseProps {
  /**
   * Rows
   */
  dataSource: Row[];
  /**
   * Columns
   */
  columns: Column[];
  /**
   * loading state
   */
  isLoading?: boolean;
  /**
   * striped theme
   */
  isStriped?: boolean;
  orderBy?: string;
  order?: Order;
  i18n?: {
    loading: string;
    empty: string;
  };
}

export interface TableRowProps extends BaseProps {
  columns: Column[];
  dataRow: Row;
}
