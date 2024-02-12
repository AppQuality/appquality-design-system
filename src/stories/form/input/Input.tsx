import { useState } from "react";
import styled from "styled-components";
import { InvalidFocusStyle, InvalidInputStyle } from "../_style";
import PasswordIcon from "./inputIcons/PasswordIcon";
import SearchIcon from "./inputIcons/SearchIcon";
import { InputArgs } from "./types";

const Input = ({
  id,
  name,
  type,
  className,
  placeholder,
  value,
  disabled,
  isInvalid,
  extra,
  onChange,
  autocomplete = true,
  i18n,
  ...props
}: InputArgs) => {
  const [currentType, setType] = useState<InputArgs["type"]>(type);
  return (
    <StyledInput type={type} isInvalid={isInvalid} className={className}>
      <input
        id={id}
        name={name}
        type={currentType}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        autoComplete={autocomplete ? null : "off"}
        max={"max" in props ? props.max : undefined}
        min={"min" in props ? props.min : undefined}
        onChange={(e) => {
          onChange &&
            (type === "date" ? onChange(e) : onChange(e.target.value));
        }}
        {...extra}
      />
      {type === "search" && <SearchIcon />}
      {type === "password" && (
        <PasswordIcon i18n={i18n} type={currentType} setType={setType} />
      )}
    </StyledInput>
  );
};

export const StyledInput = styled.div<{ type: string; isInvalid?: boolean }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  .input-group-text,
  .input-group-button {
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    height: 100%;
    color: ${(props) => props.theme.variants.primary};
  }
  input[type="search"] {
    -webkit-appearance: none;

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 24px;
      width: 24px;
      margin-left: 0.4em;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231a1a1a'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
      cursor: pointer;
    }
  }
  input {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    ${(props) => (props.type === "search" ? "padding-right: 40px;" : "")}
    color: ${(props) => props.theme.palette.primary};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    background-color: ${(props) => props.theme.colors.white};
    background-clip: padding-box;
    border: 1px solid ${(props) => props.theme.colors.elementGeneric};
    border-radius: 5px;
    line-height: 1.5;
    box-shadow: none;
    ${(props) => (props.isInvalid ? InvalidInputStyle : "")}

    // Customize the \`:focus\` state to imitate native WebKit styles.
	  &:focus,
	  &:focus-visible {
      color: ${(props) => props.theme.palette.primary};
      background-color: ${(props) => props.theme.colors.white};
      border-color: ${(props) => props.theme.variants.secondary};
      outline: 0;
      box-shadow: ${(props) => props.theme.general.boxShadow};
      ${(props) => (props.isInvalid ? InvalidFocusStyle : "")}

      &+.input-group-text {
        color: ${(props) => props.theme.palette.secondary};
      }
    }

    // Placeholder
    &::placeholder {
      color: ${(props) => props.theme.variants.primary};
      opacity: 1;
      font-weight: ${(props) => props.theme.typography.fontWeight.light};
      font-family: ${(props) => props.theme.typography.fontFamily.base};
    }

    &:disabled,
    &[readonly] {
      background-color: ${(props) => props.theme.colors.gray100};
      border-color: transparent;
      cursor: not-allowed;
      opacity: 1;
      color: ${(props) => props.theme.variants.primary};
    }
  }
`;
export default Input;
