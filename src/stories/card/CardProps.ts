import { ReactNode } from "react";

export interface CardProps {
  /**
   * contents
   */
  children?: ReactNode;
  title?: React.ReactNode;
  className?: string;
  bodyClass?: string;
  shadow?: boolean;
}
