import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
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
}
