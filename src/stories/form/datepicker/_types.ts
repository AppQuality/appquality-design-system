export interface DatepickerProps {
  select?: "date" | "range";
  selectMultiple?: boolean;
  value: any;
  onChange: () => void;
}
