import {
  Datepicker as MobiScrollDatePicker,
  localeIt,
  localeEn,
  localeEs,
} from "@appquality/mobiscroll";
import { DatepickerProps } from "./_types";

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
  let currentLocale = localeEn;
  if (locale === "it") currentLocale = localeIt;
  if (locale === "es") currentLocale = localeEs;
  return (
    <>
      <MobiScrollDatePicker
        select={select}
        min={minDate}
        max={maxDate}
        locale={currentLocale}
        onOpen={onOpen}
        onCancel={onCancel}
        onChange={onChange}
        placeholder={placeholder}
        dateFormat={dateFormat}
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
