import { BaseProps } from "../../shared/_types";
import { ReactNode } from "react";

export type Order = "ASC" | "DESC";
export type SortFunction = (orderBy: Order) => void;

export type CardRole =
  | "overline"
  | "cta"
  | "title"
  | "border"
  | "left"
  | "right";

export interface Column {
  title: ReactNode;
  dataIndex: string;
  key: string;
  maxWidth?: string; // default auto
  isSortable?: boolean | "reverse";
  onSort?: SortFunction;
  align?: "left" | "center" | "right";
  role?: CardRole;
  hideIndex?: boolean;
  borderedCell?: boolean;
}

interface ObjectData {
  title?: string;
  content?: Data;
}
export type Data =
  | ObjectData
  | JSX.Element
  | string
  | number
  | boolean
  | undefined;

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
  borderedCellColor?: string;
  mobileAlternative?: boolean;
  highlightedColor?: string;
}

export interface TableRowProps extends BaseProps {
  columns: Column[];
  dataRow: Row;
  isExpandable?: boolean;
  mobileAlternative?: boolean;
  borderedCellColor?: string;
  highlighted?: boolean;
  highlightedColor?: string;
}
