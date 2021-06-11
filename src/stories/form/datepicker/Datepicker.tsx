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
}: DatepickerProps) => {
  return (
    <>
      <DatepickerStyle />
      <MobiScrollDatePicker
        select={select}
        min={minDate}
        max={maxDate}
        onChange={onChange}
        placeholder={placeholder}
        theme="appquality"
        controls={[control]}
        themeVariant="light"
      />
    </>
  );
};
