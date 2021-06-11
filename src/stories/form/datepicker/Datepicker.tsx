import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";
import { DatepickerStyle } from "./_style";

export const Datepicker = ({
  select,
  value,
  onChange,
  selectMultiple,
}: DatepickerProps) => {
  return (
    <>
      <DatepickerStyle />
      <MobiScrollDatePicker
        select={select}
        theme="appquality"
        controls={["date"]}
        themeVariant="light"
      />
    </>
  );
};
