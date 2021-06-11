export interface DatepickerProps {
  select?: "date" | "range";
  value?: any;
  onChange?: () => void;
  placeholder?: string;
  control?: "date" | "calendar";
}
