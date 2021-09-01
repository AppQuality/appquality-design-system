import { BaseProps } from "../../shared/_types";
import { aqBootstrapTheme } from "../theme/defaultTheme";

type breakpoints = keyof typeof aqBootstrapTheme.grid.breakpoints;
export interface CarouselProps extends BaseProps {
  peekNext?: boolean;
  theme: typeof aqBootstrapTheme;
  step?: CarouselStep;
  totalSlides: number;
  setCurrent: (val: number) => void;
  current: number;
}
export type CarouselStep =
  | number
  | {
      [index in breakpoints]?: number;
    };
export interface CarouselNavProps extends BaseProps {
  dark?: boolean;
  setCurrent: (val: number) => void;
  current: number;
  totalSlides: number;
  step?: CarouselStep;
}
