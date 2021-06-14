import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";

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
    <>
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
    </>
  );
};
