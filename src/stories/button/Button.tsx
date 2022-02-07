import styled, { DefaultTheme } from "styled-components";
import getButtonSize from "./getButtonSize";
import getButtonStyle from "./getButtonStyle";
import { ButtonComponent } from "./_component";
import { ButtonProps } from "./_types";

export const Button = styled(ButtonComponent)(
  ({
    type = "primary",
    size = "medium",
    disabled = false,
    theme,
    flat = false,
    squared = false,
    variant = false,
  }: ButtonProps & { theme: DefaultTheme }) => {
    let styles = getButtonStyle(type, flat, disabled, variant, theme);
    styles += getButtonSize(size, squared, theme);

    return `
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    background-color: transparent;
    border-width: 1px;
    display: inline-block;
    font-family:${theme.typography.fontFamily.base};
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: 1.5;
    transition: filter 50ms ease-in-out 0s, background-color  50ms ease-in-out 0s;
    
    
    svg {
      vertical-align: middle;
      margin-top: -15%;
    }
    
		${styles}
    
	`;
  }
);

export const ButtonGroup = styled.div`
  & > ${Button}:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > ${Button}:nth-child(n+3),
  & > :not(.btn-check) + ${Button} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > ${Button}:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }
  & > ${Button}:not(:first-child) {
    margin-left: -1px;
  }
`;
