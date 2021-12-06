import { DefaultTheme } from "styled-components";
import { ButtonProps } from "./_types";

export default (
  size: ButtonProps["size"],
  squared: ButtonProps["squared"],
  theme: DefaultTheme
) => {
  let style = `
  padding: 8px 12px;
  font-size: ${theme.typography.fontSize.base};
  `;
  switch (size) {
    case "sm":
      style += `
        padding: 6px 8px;
        fontSize: ${theme.typography.fontSize.small};
      `;
      break;
    case "lg":
      style += `
      padding: 13px 16px;
      fontSize: ${theme.typography.fontSize.base};
      `;
      break;
    case "block":
      style += `
        width: 100%;
      `;
      break;
  }

  if (squared) {
    style += "min-width: 39px;";
    switch (size) {
      case "sm":
        style += "min-width: 32px;";
        break;
      case "lg":
        style += "min-width: 49px;";
        break;
    }
  }
  return style;
};
