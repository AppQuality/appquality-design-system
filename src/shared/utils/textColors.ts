import { DefaultTheme } from "styled-components";

export const textColors = (theme: DefaultTheme) => {
  let style = Object.entries(theme.palette)
    .map(
      ([key, value]) => `
      .aq-text-${key} {
        color: ${value} !important;
      }`
    )
    .join("");
  style += `
    .aq-text-disabled {
      color: ${theme.colors.disabled} !important;
    }
    .aq-text-disabled-dark {
      color: ${theme.colors.disabledDark} !important;
    }
  `;
  return style;
};
