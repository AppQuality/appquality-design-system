import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";
import { DatepickerStyle } from "./_style";
import { DatepickerStyleNoScrollbar } from "./_style_no_scrollbar";

export const Datepicker = ({
  select,
  showScrollbar = true,
  value,
  onChange,
  control = "date",
  placeholder,
}: DatepickerProps) => {
  return (
    <>
      {showScrollbar ? <DatepickerStyle /> : <DatepickerStyleNoScrollbar />}
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
