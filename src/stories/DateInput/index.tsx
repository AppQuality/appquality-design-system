import {
  Datepicker as MobiScrollDatePicker,
  localeEn,
  localeEs,
  localeIt,
} from "@appquality/mobiscroll";
import { ChangeEventHandler, useState } from "react";
import { Calendar } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../button/Button";
import { StyledInput as FormInput } from "../form/input/Input";

const StyledInput = styled(FormInput)`
  .mbsc-appquality.mbsc-textfield {
    width: 0;
    height: 0px;
    border: none;
    padding: 0px;
  }
`;
export interface DatepickerProps {
  id: string;
  name?: string;
  value?: string;
  minDate?: Date;
  maxDate?: Date;
  onOpen?: () => void;
  onCancel?: ({ value, valueText }: { value: Date; valueText: string }) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  controls?: Array<"date" | "calendar">;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  i18n?: {
    locale?: string;
    dateFormat?: string;
    placeholder?: string;
    setText?: string;
    cancelText?: string;
    buttonTitle?: string;
  };
}

export const DateInput = ({
  id,
  name,
  value,
  minDate,
  maxDate,
  onChange,
  onOpen,
  onCancel,
  controls = ["date"],
  inputProps,
  i18n: {
    locale = "en",
    placeholder,
    setText = "Set",
    cancelText = "Cancel",
    dateFormat = "DD-MM-YYYY",
    buttonTitle = "Open datepicker",
  } = {},
}: DatepickerProps) => {
  let currentLocale = localeEn;
  if (locale === "it") currentLocale = localeIt;
  if (locale === "es") currentLocale = localeEs;
  const [openPicker, setOpenPicker] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value || "");

  const show = () => {
    setOpenPicker(true);
  };
  const onClose = () => {
    setOpenPicker(false);
  };
  const onDatePick = (v: { value: Date; valueText: string }) => {
    setInputValue(v.valueText);
    onClose();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };
  return (
    <StyledInput type="text">
      <input
        id={id}
        name={name}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        {...inputProps}
      />
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
        inputProps={{
          "aria-hidden": "true",
          tabIndex: -1,
        }}
      />
      <span className="input-group-button">
        <Button
          title={buttonTitle}
          size="sm"
          type="button"
          kind="transparent"
          onClick={show}
        >
          <Calendar />
        </Button>
      </span>
    </StyledInput>
  );
};
