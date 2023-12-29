import { aqBootstrapTheme } from "../theme/defaultTheme";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Is this the principal call to action on the page?
   */
  kind?:
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
   * Optional is squared?
   */
  squared?: boolean;
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
};
