import React, { ChangeEventHandler } from "react";
import Input from "../form/input/Input";

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

const mapDate = (date: Date) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 based, so +1 and pad with 0
  const day = ("0" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

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
  ...props
}: DatepickerProps &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "min" | "max" | "onChange"
  >) => {
  return (
    <Input
      id={id}
      name={name}
      isInvalid={isInvalid}
      onChange={onChange}
      max={maxDate ? mapDate(maxDate) : undefined}
      min={minDate ? mapDate(minDate) : undefined}
      type="date"
      {...props}
    />
  );
};
