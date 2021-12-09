import * as COLORS from "../../shared/colors";

const aqBootstrapTheme = {
  general: {
    borderRadiusNumber: 4, // fix for react select
    borderRadius: "4px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
  },
  typography: {
    fontFamily: {
      base:
        'Roboto, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      serif: "IBM Plex Serif",
      mono: "'IBM Plex Mono', monospace;",
    },
    fontSize: {
      base: "1rem",
      small: ".857rem",
      h1: "2.5rem", // 35
      h2: "2rem", // 28
      h3: "1.5rem", // 21
      h4: "1rem", // ?
      h5: ".875rem", // 14
      h6: ".875rem", // ?
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
    primary: COLORS.gray900,
    secondary: COLORS.indigo600,
    info: COLORS.blue800,
    success: COLORS.green800,
    warning: COLORS.orange800,
    danger: COLORS.red800,
  },
  variants: {
    primary: COLORS.gray700,
    secondary: COLORS.indigo100,
    info: COLORS.blue500,
    success: COLORS.green300,
    warning: COLORS.yellow500,
    danger: COLORS.red300,
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
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
    },
    gutter: {
      x: "24px",
      y: "0",
    },
  },
};

export { aqBootstrapTheme };
