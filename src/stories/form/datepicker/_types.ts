export interface DatepickerProps {
  select?: "date" | "range";
  value?: Date;
  id: string;
  minDate?: Date;
  maxDate?: Date;
  locale?: string;
  onOpen?: () => void;
  onCancel?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  onChange?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  placeholder?: string;
  control?: "date" | "calendar";
  setText?: string;
  cancelText?: string;
  dateFormat?: string;
}
