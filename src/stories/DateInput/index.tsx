import React from "react";
import styled from "styled-components";
import { StyledInput as FormInput } from "../form/input/Input";

const StyledInput = styled(FormInput)`
  .mbsc-appquality.mbsc-textfield {
    width: 0;
    height: 0px;
    border: none;
    padding: 0px;
  }
`;
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const DateInput = ({
  isInvalid,
  maxDate,
  minDate,
  inputProps,
  ...props
}: {
  isInvalid?: boolean;
  maxDate?: Date;
  minDate?: Date;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <StyledInput type="text" isInvalid={isInvalid}>
      <input
        id={props.id}
        name={props.name}
        type="date"
        max={maxDate ? formatDate(maxDate) : undefined}
        min={minDate ? formatDate(minDate) : undefined}
        {...props}
        {...inputProps}
      />
    </StyledInput>
  );
};
