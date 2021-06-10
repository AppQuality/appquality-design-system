// import * as styles from './shared/styles';
import * as COLORS from "./shared/colors.module.scss";
import GlobalStyle from "./shared/globalStyle";
// import * as animation from './shared/animation';
import * as icons from "react-bootstrap-icons";

import * as TableType from "./stories/table/_types";
import * as SelectType from "./stories/select/_types";
import * as SidebarType from "./stories/sidebar/SidebarProps";
import { ThemeProvider } from "styled-components";
import { Formik, Form } from "formik";
import { aqBootstrapTheme } from "./stories/theme/defaultTheme";

// import original module declarations
import "styled-components";

//
export { TableType, SelectType, SidebarType, ThemeProvider, Formik, Form };
export { COLORS, GlobalStyle, icons, aqBootstrapTheme };

declare module "styled-components" {
  type Theme = typeof aqBootstrapTheme;
  export interface DefaultTheme extends Theme {}
}
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
