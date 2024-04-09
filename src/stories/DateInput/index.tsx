import React from "react";
import styled from "styled-components";
import { StyledInput as FormInput } from "../form/input/Input";

const StyledInput = styled(FormInput)`
  input[type="date"] {
    font-family: ${(props) => props.theme.typography.fontFamily.base};
    appearance: none;
    min-height: 40px;
  }
`;
function formatDate(date: Date): string {
  const year = String(date.getFullYear()).padStart(4, "0");
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
