import { DateInput } from "../../DateInput";
import { DatepickerProps } from "./_types";

export const Datepicker = ({
  id,
  name,
  select,
  value,
  minDate,
  maxDate,
  onChange,
  onOpen,
  onCancel,
  locale = "en",
  control = "date",
  placeholder,
  setText = "Set",
  cancelText = "Cancel",
  dateFormat = "DD/MM/YYYY",
}: DatepickerProps) => {
  return (
    <DateInput
      id={id}
      name={name}
      minDate={minDate}
      maxDate={maxDate}
      onChange={(e) => {
        if (!onChange) return;

        const date = new Date(e.target.value);

        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear().toString();

        const formattedDate = dateFormat
          .replace("DD", day)
          .replace("MM", month)
          .replace("YYYY", year);

        onChange({
          value: date,
          valueText: formattedDate,
        });
      }}
    />
  );
};
