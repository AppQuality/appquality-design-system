import { MouseEventHandler } from "react";
import { BaseProps } from "../../shared/_types";
import { aqBootstrapTheme } from "../theme/defaultTheme";

export type ButtonProps = BaseProps & {
  htmlType?: "button" | "submit" | "reset";
  /**
   * Is this the principal call to action on the page?
   */
  type?:
    | keyof typeof aqBootstrapTheme["palette"]
    | "link"
    | "light"
    | "link-hover"
    | "transparent";
  /**
   * How large should the button be?
   */
  size?: "sm" | "medium" | "lg" | "block";
  variant?: boolean;
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
  forwardedAs?: React.ElementType | keyof JSX.IntrinsicElements;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  target?: string;
  /*
   * Optional form prop to submit a form somewhere else
   */
  form?: string;
  title?: string;
};
