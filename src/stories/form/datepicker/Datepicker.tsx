import {
  Datepicker as MobiScrollDatePicker,
  localeIt,
  localeEn,
} from "@appquality/mobiscroll";
import { DatepickerProps } from "./_types";

export const Datepicker = ({
  select,
  value,
  minDate,
  maxDate,
  onChange,
  locale = "en",
  control = "date",
  placeholder,
  setText = "Set",
  cancelText = "Cancel",
}: DatepickerProps) => {
  let currentLocale = localeEn;
  if (locale === "it") currentLocale = localeIt;
  return (
    <>
      <MobiScrollDatePicker
        select={select}
        min={minDate}
        max={maxDate}
        locale={currentLocale}
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
