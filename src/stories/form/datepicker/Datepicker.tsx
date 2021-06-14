import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";
import { DatepickerStyle } from "./_style";
import { useRef } from "react";

export const Datepicker = ({
  select,
  value,
  id,
  minDate,
  maxDate,
  onChange,
  control = "date",
  placeholder,
}: DatepickerProps) => {
  const datepickerContext = useRef(null);

  return (
    <div>
      <DatepickerStyle id={id}>
        <MobiScrollDatePicker
          context={`#${id}`}
          select={select}
          min={minDate}
          max={maxDate}
          onChange={onChange}
          placeholder={placeholder}
          theme="appquality"
          controls={[control]}
          themeVariant="light"
        />
        <div ref={datepickerContext} />
      </DatepickerStyle>
    </div>
  );
};
