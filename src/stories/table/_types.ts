import { BaseProps } from "../../shared/_types";

export type Order = "ASC" | "DESC";
export type SortFunction = (orderBy: Order) => void;

export type CardRole = "overline" | "cta" | "title";

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  maxWidth?: string; // default auto
  isSortable?: boolean | "reverse";
  onSort?: SortFunction;
  align?: "left" | "center" | "right";
  role?: CardRole;
  hideIndex?: boolean;
}

interface ObjectData {
  title?: string;
  content?: Data;
}
export type Data = ObjectData | JSX.Element | string | number | undefined;

export interface Row {
  key: string | number;
  [index: string]: Data;
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
  isExpandable?: boolean;
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
  isExpandable?: boolean;
}
