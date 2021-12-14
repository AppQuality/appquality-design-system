import { DefaultTheme } from "styled-components";
import { ButtonProps } from "./_types";

export default (
  type: ButtonProps["type"],
  flat: ButtonProps["flat"],
  disabled: ButtonProps["disabled"],
  variant: ButtonProps["variant"],
  theme: DefaultTheme
) => {
  if (type === "link" || type === "link-hover") {
    return `
        box-shadow: none;
        border-color: transparent;
        background-color: transparent;
        ${
          type === "link-hover"
            ? `
          color: ${theme.palette.primary};
          &:hover {
            color: ${theme.palette.secondary};
          }
        `
            : `
          color: ${theme.palette.secondary};
        `
        }
        text-decoration: underline;
        ${
          disabled
            ? `
          cursor: not-allowed;
          pointer-events: none;
          color: ${theme.colors.disabledDark};
          background-color: transparent;
          border-color: transparent;
          opacity: 1;
        `
            : ``
        }
      `;
  } else if (type === "light") {
    return `
      border-color: transparent;
      background-color: ${theme.colors.white};
      `;
  } else {
    const color = type || "primary";
    const colorStyle = variant ? theme.variants[color] : theme.palette[color];

    let style = `
    border: 1px solid ${colorStyle};
          background-color: ${colorStyle};
          color: ${theme.colors.white};
  
    &:active {
     filter: saturate(0.7);
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
       filter: saturate(0.7);
      }
    }`;

    if (flat) {
      style += `background-color: ${theme.colors.white};
        color: ${colorStyle};
        
        &:active {
          filter: none;
          border: 1px solid ${colorStyle};
          background-color: ${colorStyle};
          color: ${theme.colors.white};
        }
        @media (hover: hover) and (pointer: fine) {
          &:hover {
           filter: none;
            border: 1px solid ${colorStyle};
            background-color: ${colorStyle};
            color: ${theme.colors.white};
          }
        }`;
    }

    if (disabled) {
      style += `
        cursor: not-allowed;
        pointer-events: none;
        opacity: .65;
        background-color: ${theme.colors.gray100};
        border-color: ${theme.colors.gray100};
        color: ${theme.colors.disabledFont};
        `;

      if (flat) {
        style += `
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.elementGeneric};
        `;
      }
    }

    return style;
  }
};
