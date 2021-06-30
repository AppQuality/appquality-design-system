import * as React from "react";
import { BaseProps } from "../../shared/_types";
import { DefaultTheme } from "styled-components";

export interface AccordionProps extends BaseProps {
  initialActive: string;
  Item?: React.FC<ItemProps>;
}
export interface ItemProps extends BaseProps {
  id: string;
  title: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  setActive?: () => void;
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
  active?: boolean;
}
export interface ItemBodyProps extends BaseProps {
  active?: boolean;
}
