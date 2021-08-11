import { ButtonProps } from "./_types";
import { ButtonStyle } from "./_style";
import styled from "styled-components";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  htmlType,
  type = "primary",
  size = "medium",
  className,
  disabled,
  flat = false,
  squared = false,
  children,
  ...props
}: ButtonProps) => {
  let classes = [`aq-btn-${size}`, `aq-btn-${type}`, className];
  if (flat) {
    classes.push("aq-btn-flat");
  }
  if (squared) {
    classes.push("aq-btn-squared");
  }
  let disabled_attr = false;
  if (disabled) {
    disabled_attr = true;
    classes.push("disabled");
  }
  return (
    <ButtonStyle
      disabled={disabled_attr}
      type={htmlType}
      className={`${classes.join(" ")}`}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export const ButtonGroup = styled.div`
  & > ${ButtonStyle}:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > ${ButtonStyle}:nth-child(n+3),
  & > :not(.btn-check) + ${ButtonStyle} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > ${ButtonStyle}:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }
  & > ${ButtonStyle}:not(:first-child) {
    margin-left: -1px;
  }
`;
