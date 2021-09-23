import { BaseProps } from "../../shared/_types";

export enum ProgressBarType {
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  DANGER = "DANGER",
  DISABLED = "DISABLED",
}

export type ProgressBarProps = ProgressBarTextProps &
  ProgressBarLineProps &
  BaseProps;

export interface ProgressBarLineProps {
  value: number;
  type?: ProgressBarType;
  disabled?: boolean;
}

export interface ProgressBarTextProps {
  label?: string;
}
