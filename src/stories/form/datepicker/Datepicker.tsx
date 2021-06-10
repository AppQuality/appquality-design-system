import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";

const Datepicker = ({
  select,
  value,
  onChange,
  selectMultiple,
}: DatepickerProps) => {
  return (
    <MobiScrollDatePicker
      select={select}
      selectMultiple={selectMultiple}
      value={value}
      onChange={onChange}
    />
  );
};
