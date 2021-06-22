import { Search } from "react-bootstrap-icons";
import styled from "styled-components";
import { InvalidFocusStyle, InvalidInputStyle } from "../_style";

const BaseInput = ({
  id,
  type,
  className,
  placeholder,
  disabled,
  isInvalid,
  extra,
  onChange,
}: {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  extra: any;
  onChange?: (val: string) => void;
}) => {
  return (
    <div className={className}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value)}
        {...extra}
      />
      {type === "search" && (
        <span className="input-group-text">
          <Search />
        </span>
      )}
    </div>
  );
};

const Input = styled(BaseInput)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  input {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    color: ${(props) => props.theme.palette.primary};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    background-color: ${(props) => props.theme.colors.white};
    background-clip: padding-box;
    border: 1px solid ${(props) => props.theme.colors.disabled};
    border-radius: 5px;
    line-height: 1.5;
    box-shadow: none;
    ${(props) => (props.isInvalid ? InvalidInputStyle : "")}

    // Customize the \`:focus\` state to imitate native WebKit styles.
	  &:focus,
	  &:focus-visible {
      color: ${(props) => props.theme.palette.primary};
      background-color: ${(props) => props.theme.colors.white};
      border-color: ${(props) => props.theme.palette.primary};
      outline: 0;
      box-shadow: inset 0 1px 2px ${(props) => props.theme.colors.gray100},
        0 0 0 0.25rem ${(props) => props.theme.colors.gray200};
      ${(props) => (props.isInvalid ? InvalidFocusStyle : "")}
    }

    // Placeholder
    &::placeholder {
      color: ${(props) => props.theme.colors.disabled};
      opacity: 1;
    }

    &:disabled,
    &[readonly] {
      background-color: ${(props) => props.theme.colors.gray100};
      border-color: transparent;
      cursor: not-allowed;
      opacity: 1;
    }
  }
`;
export default Input;
