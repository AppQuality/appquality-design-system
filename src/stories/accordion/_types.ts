import * as React from "react";
import { BaseProps } from "../../shared/_types";
import { DefaultTheme } from "styled-components";

export interface AccordionProps extends BaseProps {
  initialActive: string;
  Item?: React.FC<ItemProps>;
}
export interface ItemProps extends BaseProps {
  id: string;
  active?: boolean;
  disabled?: boolean;
  setActive?: () => void;
  Head?: React.FC<ItemHeadProps>;
  Body?: React.FC<ItemBodyProps>;
}
export interface ItemHeadProps extends BaseProps {
  id?: string;
  active?: boolean;
  disabled?: boolean;
  setActive?: (id: string) => void;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}
export interface StyledItemHeadProps extends ItemHeadProps {
  theme: DefaultTheme;
}
export interface StyledItemBodyProps extends ItemHeadProps {
  theme: DefaultTheme;
  height: number;
}
export interface ItemBodyProps extends BaseProps {}
