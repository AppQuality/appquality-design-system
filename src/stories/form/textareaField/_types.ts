export interface TextareaFieldProps {
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  resize?: "none" | "both" | "horizontal" | "vertical";
  height?: string;
  autoResize?: boolean;
}
