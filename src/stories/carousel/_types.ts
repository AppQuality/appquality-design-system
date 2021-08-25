import { BaseProps } from "../../shared/_types";
import { aqBootstrapTheme } from "../theme/defaultTheme";

type breakpoints = keyof typeof aqBootstrapTheme.grid.breakpoints;
export interface CarouselProps extends BaseProps {
  peekNext?: boolean;
  theme: typeof aqBootstrapTheme;
  step?:
    | number
    | {
        [index in breakpoints]?: number;
      };
}
export interface CarouselNavProps extends BaseProps {
  dark?: boolean;
  onPrev: false | (() => void);
  onNext: false | (() => void);
  setCurrent: (val: number) => void;
  current: number;
  max: number;
  showArrows: boolean;
}
