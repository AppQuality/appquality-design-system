export type Order = "ASC" | "DESC";

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  long?: boolean; // ellipsis with auto width
  width?: string; // default 10ch
  isSortable?: boolean;
  onSort?: (orderBy: any) => void;
  align?: "left" | "center" | "right";
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

export interface TableProps {
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
  className?: string;
  orderBy?: string;
  order?: Order;
  i18n?: {
    loading: string;
    empty: string;
  };
}
