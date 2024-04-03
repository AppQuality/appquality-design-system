import { useState } from "react";
import { DateInput } from "../../DateInput";
import { TimePicker } from "./TimePicker";
import { DatepickerProps } from "./_types";

function parseDate(time: string): Date {
  const [yearStr, monthStr, dayStr] = time.split("-");
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const day = parseInt(dayStr);

  const currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);
  currentDate.setSeconds(0);
  currentDate.setMilliseconds(0);
  currentDate.setFullYear(year);
  currentDate.setMonth(month - 1);
  currentDate.setDate(day);

  return currentDate;
}

function formatDate(date: Date): string {
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const Datepicker = ({
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
  const [currentDate, setCurrentDate] = useState(
    value ? (typeof value === "string" ? value : formatDate(value)) : "",
  );
  if (control === "time") {
    return (
      <TimePicker placeholder={placeholder} value={value} onChange={onChange} />
    );
  }

  return (
    <DateInput
      placeholder={placeholder}
      value={currentDate}
      max={maxDate ? formatDate(maxDate) : undefined}
      min={minDate ? formatDate(minDate) : undefined}
      onChange={(e) => {
        if (onChange)
          onChange({
            value: parseDate(e.target.value),
            valueText: e.target.value,
          });

        setCurrentDate(e.target.value);
      }}
    />
  );
};
