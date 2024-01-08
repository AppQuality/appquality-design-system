import React from "react";
import {
  Datepicker as MobiScrollDatePicker,
  localeEn,
  localeEs,
  localeIt,
} from "@appquality/mobiscroll";
import { ChangeEventHandler, useState } from "react";
import { CalendarEventFill as CalendarIcon } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../button/Button";
import { StyledInput as FormInput } from "../form/input/Input";
import { aqBootstrapTheme } from "../theme/defaultTheme";

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
  isInvalid?: boolean;
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
  isInvalid,
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
  const ref = React.useRef<HTMLInputElement>(null);
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
    if (ref.current) {
      ref.current.value = v.valueText;
      ref.current.dispatchEvent(new Event("input", { bubbles: true }));
    }
    onClose();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };
  return (
    <StyledInput type="text" isInvalid={isInvalid}>
      <input
        id={id}
        name={name}
        type="text"
        value={inputValue}
        onInput={handleInputChange}
        placeholder={placeholder}
        ref={ref}
        {...inputProps}
      />
      <MobiScrollDatePicker
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
          <CalendarIcon color={aqBootstrapTheme.variants.primary} />
        </Button>
      </span>
    </StyledInput>
  );
};
