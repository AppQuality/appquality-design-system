import React, { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";

const BaseRadio = ({
  id,
  name,
  label,
  className,
  disabled,
  value,
  isInvalid, // used by styled
  checked = false,
  defaultChecked,
  onChange,
}: {
  id: string;
  name: string;
  label: ReactNode;
  className?: string;
  value?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (val: string, e?: ChangeEvent<HTMLInputElement>) => void;
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
        type="radio"
        value={value}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange && onChange(e.target.value, e)}
        className="form-check-input"
      />
    </div>
  );
};

export const Radio = styled(BaseRadio)`
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
    border-radius: 50%;
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
    border-width: 1px;
    border-color: ${(props) =>
      props.isInvalid
        ? props.theme.palette.danger
        : props.theme.palette.secondary};
    appearance: none;
    color-adjust: exact;

    &:checked {
      border-width: 3px;
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
