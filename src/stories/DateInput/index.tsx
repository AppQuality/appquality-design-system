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
