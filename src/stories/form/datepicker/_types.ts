export interface DatepickerProps {
  select?: "date" | "range";
  showScrollbar?: boolean;
  value?: any;
  onChange?: () => void;
  placeholder?: string;
  control?: "date" | "calendar";
}
