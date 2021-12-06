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

  style += Object.entries(theme.variants)
    .map(
      ([key, value]) => `
      .aq-text-${key}Variant {
        color: ${value} !important;
      }`
    )
    .join("");
  style += `
    .aq-text-disabled,.aq-text-disabled-dark {
      color: ${theme.colors.disabledFont} !important;
    }
  `;
  return style;
};
