import styled from "styled-components";
import React, { ReactNode } from "react";

const BaseRadio = ({
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
        type="radio"
        value={value}
        disabled={disabled}
        defaultChecked={checked}
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
      color: ${(props) => props.theme.colors.disabled};
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
    border-color: ${(props) =>
      props.isInvalid ? props.theme.palette.danger : props.theme.palette.info};
    appearance: none;
    color-adjust: exact;

    &:checked {
      border-width: 3px;
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
      border-color: ${(props) => props.theme.colors.infoDisabled};
      cursor: not-allowed;
    }
  }
`;
