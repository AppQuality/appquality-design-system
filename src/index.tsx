// import * as styles from './shared/styles';
import * as COLORS from "./shared/colors.module.scss";
import * as global from "./shared/globalStyle";
// import * as animation from './shared/animation';
import * as icons from "react-bootstrap-icons";

import * as TableType from "./stories/table/_types";
import * as SelectType from "./stories/select/_types";
import * as SidebarType from "./stories/sidebar/SidebarProps";
import { ThemeProvider } from "styled-components";

//
export { TableType, SelectType, SidebarType, ThemeProvider };
export { COLORS, global, icons };

// import original module declarations
import "styled-components";
import { ColorsInterface } from "./shared/colors";

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
    };
  }
}

export * from "./stories/theme/defaultTheme";
export * from "./stories/button/Button";
export * from "./stories/card/Card";
export * from "./stories/form/Form";
export * from "./stories/header/Header";
export * from "./stories/layout/Layout";
export * from "./stories/pagination/Pagination";
export * from "./stories/select/Select";
export * from "./stories/sidebar/Sidebar";
export * from "./stories/skeleton/Skeleton";
export * from "./stories/spinner/Spinner";
export * from "./stories/table/Table";
export * from "./stories/typography/Typography";
