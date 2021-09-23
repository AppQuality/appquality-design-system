import { BaseProps } from "../../shared/_types";

export enum ProgressBarType {
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  DANGER = "DANGER",
  DISABLED = "DISABLED",
}

export type ProgressBarProps = ProgressBarLineProps & BaseProps;

export interface ProgressBarLineProps extends BaseProps {
  value: number;
  type?: ProgressBarType;
  disabled?: boolean;
  label?: string;
}
