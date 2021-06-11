import { DefaultTheme } from "styled-components";

export const textColors = (theme: DefaultTheme) => {
  let style = Object.entries(theme.palette)
    .map(
      ([key, value]) => `
      .aq-text-${key} {
        color: ${value}
      }`
    )
    .join("");
  return style;
};
