import { BaseProps } from "../../shared/_types";
export interface TabsProps extends BaseProps {
  active: string;
}
export interface TabProps extends BaseProps {
  id: string;
  active?: boolean;
  disabled?: boolean;
  title?: string;
}
export interface TabHeadProps extends BaseProps {
  id: string;
  disabled?: boolean;
  active?: boolean;
  title?: string;
  setActive?: () => void;
}
