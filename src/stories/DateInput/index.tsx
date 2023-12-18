import {
  Datepicker as MobiScrollDatePicker,
  localeIt,
  localeEn,
  localeEs,
} from "@appquality/mobiscroll";
import { useState } from "react";
import { Calendar } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../button/Button";
import { StyledInput } from "../form/input/Input";

const StyledWrapper = styled.div`
  position: relative;

  .mbsc-appquality.mbsc-textfield {
    width: 0 !important;
    border: none;
    height: 0px;
    padding: 0px;
  }
  ${Button} {
    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

export interface DatepickerProps {
  id: string;
  value?: string;
  minDate?: Date;
  maxDate?: Date;
  locale?: string;
  onOpen?: () => void;
  onCancel?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  onChange?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  placeholder?: string;
  controls?: Array<"date" | "calendar">;
  setText?: string;
  cancelText?: string;
  dateFormat?: string;
  inputTitle?: string;
  datePattern?: string;
}

const DateInput = ({
  value,
  minDate,
  maxDate,
  onChange,
  onOpen,
  onCancel,
  locale,
  controls = ["date"],
  placeholder,
  setText = "Set",
  cancelText = "Cancel",
  dateFormat = "DD-MM-YYYY",
  inputTitle = "Date in the format DD-MM-YYYY",
  datePattern = "d{2}-d{2}-d{4}",
}: DatepickerProps) => {
  let currentLocale = localeEn;
  if (locale === "it") currentLocale = localeIt;
  if (locale === "es") currentLocale = localeEs;
  const [openPicker, setOpenPicker] = useState(false);
  const [pickerValue, setPickerValue] = useState<Date>();
  const [textValue, setTextValue] = useState<string>(value || "");

  const show = () => {
    setOpenPicker(true);
  };
  const onClose = () => {
    setOpenPicker(false);
  };
  const onDatePick = (v: { value: Date; textValue: string }) => {
    setTextValue(textValue);
    setOpenPicker(false);
  };
  return (
    <StyledWrapper>
      <StyledInput type="">
        <input
          type="text"
          pattern={datePattern}
          title={`Date in the format ${dateFormat}`}
          onClick={(e) => e.preventDefault()}
          placeholder={placeholder}
        />
      </StyledInput>
      <MobiScrollDatePicker
        defaultValue={value}
        select="date"
        min={minDate}
        max={maxDate}
        locale={currentLocale}
        onOpen={onOpen}
        onCancel={onCancel}
        onChange={onDatePick}
        placeholder={placeholder}
        dateFormat={dateFormat}
        setText={setText}
        cancelText={cancelText}
        buttons={["cancel", "set"]}
        theme="appquality"
        controls={controls}
        themeVariant="light"
        showOnFocus={false}
        showOnClick={false}
        isOpen={openPicker}
        onClose={onClose}
      />
      <Button size="sm" htmlType="button" squared type="light" onClick={show}>
        <Calendar />
      </Button>
    </StyledWrapper>
  );
};

export default DateInput;
