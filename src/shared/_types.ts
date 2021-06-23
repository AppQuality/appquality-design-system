import * as React from "react";

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  key?: string | number;
  children?: React.ReactNode;
}
