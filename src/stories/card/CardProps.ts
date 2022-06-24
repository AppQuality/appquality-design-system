import { ReactNode } from "react";

export interface CardProps {
  /**
   * contents
   */
  children?: ReactNode;
  title?: String | React.ReactNode;
  className?: string;
  bodyClass?: string;
  shadow?: boolean;
}
