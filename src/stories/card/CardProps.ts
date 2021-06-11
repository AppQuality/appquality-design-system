import { ReactNode } from "react";

export interface CardProps {
  /**
   * contents
   */
  children?: ReactNode;
  title?: String;
  className?: string;
  shadow?: boolean;
}
