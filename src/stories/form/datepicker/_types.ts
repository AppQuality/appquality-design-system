export interface DatepickerProps {
  /** @deprecated since version 2.0 */
  select?: "date" | "range";
  value?: string | Date;
  id: string;
  minDate?: Date;
  maxDate?: Date;
  /** @deprecated since version 2.0 */
  locale?: string;
  /** @deprecated since version 2.0 */
  onOpen?: () => void;
  /** @deprecated since version 2.0 */
  onCancel?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  onChange?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  placeholder?: string;
  control?: "date" | "calendar" | "time";
  /** @deprecated since version 2.0 */
  setText?: string;
  /** @deprecated since version 2.0 */
  cancelText?: string;
  /** @deprecated since version 2.0 */
  dateFormat?: string;
  disabled?: boolean;
}
