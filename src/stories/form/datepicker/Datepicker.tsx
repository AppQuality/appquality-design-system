import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";
import { DatepickerStyle } from "./_style";

export const Datepicker = ({
  select,
  value,
  minDate,
  maxDate,
  onChange,
  control = "date",
  placeholder,
  setText = "Set",
  cancelText = "Cancel",
}: DatepickerProps) => {
  return (
    <div>
      <DatepickerStyle />
      <MobiScrollDatePicker
        select={select}
        min={minDate}
        max={maxDate}
        onChange={onChange}
        placeholder={placeholder}
        setText={setText}
        cancelText={cancelText}
        buttons={["cancel", "set"]}
        theme="appquality"
        controls={[control]}
        themeVariant="light"
      />
    </div>
  );
};
