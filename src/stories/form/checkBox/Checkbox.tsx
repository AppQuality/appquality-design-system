import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import styled from "styled-components";

const BaseCheckbox = ({
  id,
  name,
  label,
  className,
  disabled,
  value,
  onChange,
  onBlur,
  isInvalid, // used by styled
  checked = false,
}: {
  id?: string;
  name?: string;
  label?: ReactNode;
  className?: string;
  value?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
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
        name={name}
        type="checkbox"
        value={value}
        disabled={disabled}
        defaultChecked={checked}
        onChange={onChange}
        onBlur={onBlur}
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
      color: ${(props) => props.theme.colors.disabledFont};
      cursor: not-allowed;
    }
  }
  .form-check-input {
    order: 1;
    border-radius: ${(props) => props.theme.general.borderRadius};
    width: 1rem;
    height: 1rem;
    flex: 0 0 1rem;
    margin-right: 0.5em;
    margin-top: 0.33em;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) =>
      props.isInvalid
        ? props.theme.palette.danger
        : props.theme.palette.secondary};
    appearance: none;
    color-adjust: exact;

    &:checked {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3 6-6'/%3E%3C/svg%3E");
      background-color: ${(props) => props.theme.palette.secondary};
    }
    &:focus {
      border-color: ${(props) =>
        props.isInvalid
          ? props.theme.palette.danger
          : props.theme.palette.secondary};
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.purple100};
    }
    &[disabled] {
      cursor: not-allowed;
      background-color: transparent;
      border-color: ${(props) => props.theme.colors.disabledElement};
      &:checked {
        background-color: ${(props) => props.theme.colors.disabledElement};
        border-color: transparent;
      }
    }
  }
`;
