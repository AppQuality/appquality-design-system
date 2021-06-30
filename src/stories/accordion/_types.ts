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
  setActive?: (id: string) => void;
}
export interface ItemHeadProps extends BaseProps {
  itemId: string;
  active?: boolean;
  disabled?: boolean;
  setActive: (id: string) => void;
}
export interface StyledItemHeadProps {
  active?: boolean;
  disabled?: boolean;
  theme: DefaultTheme;
}
export interface StyledItemBodyProps {
  theme: DefaultTheme;
  height: number;
  active?: boolean;
}
export interface ItemBodyProps extends BaseProps {
  active?: boolean;
}
