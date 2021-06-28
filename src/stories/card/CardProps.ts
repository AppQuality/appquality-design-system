import { ReactNode } from "react";

export interface CardProps {
  /**
   * contents
   */
  children?: ReactNode;
  title?: String;
  className?: string;
  bodyClass?: string;
  shadow?: boolean;
}
