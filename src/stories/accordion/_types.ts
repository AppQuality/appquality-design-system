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
  title?: string;
  Head?: React.FC<ItemHeadProps>;
  Body?: React.FC<ItemBodyProps>;
}
export interface ItemHeadProps extends BaseProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  id?: string;
  disabled?: boolean;
  active?: boolean;
  title?: string;
  setActive?: () => void;
}
export interface StyledItemHeadProps extends ItemHeadProps {
  theme: DefaultTheme;
}
export interface ItemBodyProps extends BaseProps {
  active?: boolean;
}
