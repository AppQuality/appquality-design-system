import styled from "styled-components";
import React, { ReactNode } from "react";

const BaseCheckbox = ({
  id,
  label,
  className,
  disabled,
  value,
  isInvalid, // used by styled
  checked = false,
}: {
  id: string;
  label: ReactNode;
  className?: string;
  value?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  checked?: boolean;
  onChange?: (val: string) => void;
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="form-check-label"
          aria-disabled={disabled}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type="checkbox"
        value={value}
        disabled={disabled}
        defaultChecked={checked}
        className="form-check-input"
      />
    </div>
  );
};

export const Checkbox = styled(BaseCheckbox)`
  display: flex;
  align-items: flex-start;

  .form-check-label {
    order: 2;
    display: inline-block;
    &[aria-disabled="true"] {
      color: ${(props) => props.theme.colors.disabled};
      cursor: not-allowed;
    }
  }
  .form-check-input {
    order: 1;
    border-radius: ${(props) => props.theme.general.borderRadius};
    width: 1em;
    height: 1em;
    flex: 0 0 1em;
    margin-right: 0.5em;
    margin-top: 0.33em;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) =>
      props.isInvalid ? props.theme.palette.danger : "rgba(0, 0, 0, 0.25)"};
    appearance: none;
    color-adjust: exact;

    &:checked {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3 6-6'/%3E%3C/svg%3E");
      background-color: ${(props) => props.theme.colors.blue500};
      border-color: ${(props) => props.theme.palette.primary};
    }
    &:focus {
      border-color: ${(props) =>
        props.isInvalid
          ? props.theme.palette.danger
          : props.theme.colors.blue700};
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.gray300};
    }
    &[disabled] {
      background-color: ${(props) => props.theme.colors.gray100};
      border-color: transparent;
      cursor: not-allowed;
    }
  }
`;
