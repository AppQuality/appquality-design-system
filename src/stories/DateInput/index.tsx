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

export const DateInput = ({
  isInvalid,
  ...props
}: { isInvalid?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <StyledInput type="text" isInvalid={isInvalid}>
      <input id={props.id} name={props.name} type="date" {...props} />
    </StyledInput>
  );
};
