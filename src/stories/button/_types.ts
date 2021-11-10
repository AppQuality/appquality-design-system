import { MouseEventHandler } from "react";
import { BaseProps } from "../../shared/_types";

export type ButtonProps = BaseProps & {
  htmlType?: "button" | "submit" | "reset";
  /**
   * Is this the principal call to action on the page?
   */
  type?:
    | "primary"
    | "secondary"
    | "link"
    | "light"
    | "success"
    | "info"
    | "warning"
    | "danger";
  /**
   * How large should the button be?
   */
  size?: "sm" | "medium" | "lg" | "block";
  /**
   * Is flat?
   */
  flat?: boolean;
  /**
   * Optional is disabled?
   */
  disabled?: boolean;
  /**
   * Optional is squared?
   */
  squared?: boolean;
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler;
  /**
   * Optional href for anchor
   */
  href?: string;
  /**
   * Optional as html tag
   */
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  target?: string;
  /*
   * Optional form prop to submit a form somewhere else
   */
  form?: string;
};
