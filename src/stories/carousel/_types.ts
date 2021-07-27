import { BaseProps } from "../../shared/_types";
import { DefaultTheme } from "styled-components";

export interface CarouselProps extends BaseProps {
  controls?: boolean;
}
export interface StyledCarouselProps {
  controls?: boolean;
  theme: DefaultTheme;
}