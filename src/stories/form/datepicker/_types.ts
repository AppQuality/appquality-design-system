export interface DatepickerProps {
  select?: "date" | "range";
  value?: any;
  minDate?: Date;
  maxDate?: Date;
  onChange?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  placeholder?: string;
  control?: "date" | "calendar";
}
