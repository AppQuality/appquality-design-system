import { BaseProps } from "../../shared/_types";
export interface TabsProps extends BaseProps {
  active: string;
  setActive?: (tab: string) => void;
}
export interface TabProps extends BaseProps {
  id: string;
  active?: boolean;
  disabled?: boolean;
  title?: React.ReactNode;
}
export interface TabHeadProps extends BaseProps {
  id: string;
  disabled?: boolean;
  active?: boolean;
  title?: React.ReactNode;
  setActive?: () => void;
}
