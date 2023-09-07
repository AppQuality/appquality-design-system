import { ReactNode } from "react";

export interface TextareaFieldProps extends GeneralComponentProps {
  name: string;
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  resize?: "none" | "both" | "horizontal" | "vertical";
  height?: string;
  autoResize?: boolean;
  counterMax?: number;
}
