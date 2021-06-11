import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";
import { DatepickerStyle } from "./_style";

export const Datepicker = ({
  select,
  value,
  onChange,
  control = "date",
  placeholder,
}: DatepickerProps) => {
  return (
    <>
      <DatepickerStyle />
      <MobiScrollDatePicker
        select={select}
        placeholder={placeholder}
        theme="appquality"
        controls={[control]}
        themeVariant="light"
      />
    </>
  );
};
