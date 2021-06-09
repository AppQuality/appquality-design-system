import { DefaultTheme } from "styled-components";
import * as COLORS from "../../shared/colors.module.scss";

const aqBootstrapTheme: DefaultTheme = {
  general: {
    borderRadius: 4,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
  },
  typography: {
    fontFamily: {
      base:
        'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      serif: "IBM Plex Serif",
      mono: "'IBM Plex Mono', monospace;",
    },
    fontSize: {
      base: ".875rem",
      small: ".75rem",
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  colors: COLORS,
  palette: {
    primary: COLORS.blue700,
    secondary: COLORS.cyan600,
    info: COLORS.blue500,
    success: COLORS.green500,
    warning: COLORS.orange500,
    danger: COLORS.red500,
  },
  grid: {
    breakpoints: {
      xs: "0",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    spacing: {
      default: "16px",
    },
    sizes: {
      1: "10px",
      2: "14px",
      3: "16px",
      4: "20px",
    },
    gutter: {
      x: "24px",
      y: "0",
    },
  },
};

export { aqBootstrapTheme };
