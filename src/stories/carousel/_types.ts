import { BaseProps } from "../../shared/_types";
import { DefaultTheme } from "styled-components";
import { Dispatch, SetStateAction } from "react";

export interface CarouselProps extends BaseProps {
  dark?: boolean;
}
export interface SlideProps extends BaseProps {
  active?: boolean;
  index: number;
  onIntersecting: Dispatch<SetStateAction<number>>;
}
export interface StyledCarouselProps {
  xTranslation: number;
  theme: DefaultTheme;
}

export interface NavigationProps {
  handlePrev: () => void;
  handleNext: () => void;
  slides: [][];
  active: number;
}
