// import original module declarations
import "styled-components";
import { ColorsInterface } from "../shared/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    general: {
      borderRadius: number;
      boxShadow: string;
    };
    typography: {
      fontFamily: {
        base: string;
        serif: string;
        mono: string;
      };
      fontSize: {
        base: string;
        small: string;
      };
      fontWeight: {
        thin: number;
        light: number;
        normal: number;
        bold: number;
      };
    };
    colors: ColorsInterface;
    palette: {
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      danger: string;
    };
    grid: {
      breakpoints: {
        sm: string;
        xs: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      spacing: {
        default: string;
      };
      sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
      gutter: {
        x: string;
        y: string;
      };
    };
  }
}
