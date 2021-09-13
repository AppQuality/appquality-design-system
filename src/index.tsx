// import * as styles from './shared/styles';
import * as COLORS from "./shared/colors";
import GlobalStyle from "./shared/globalStyle";
// import * as animation from './shared/animation';
import * as icons from "react-bootstrap-icons";

import * as TableType from "./stories/table/_types";
import * as SelectType from "./stories/select/_types";
import * as SidebarType from "./stories/sidebar/SidebarProps";
import * as DatepickerType from "./stories/form/datepicker/_types";
import { DatepickerGlobalStyle } from "./stories/form/datepicker/_style";
import { ThemeProvider } from "styled-components";
import { Formik, Form, FieldProps, Field as FormikField } from "formik";
import { aqBootstrapTheme } from "./stories/theme/defaultTheme";

// import original module declarations
import "styled-components";

//
export type { FieldProps };
export { FormikField, Formik, Form, DatepickerGlobalStyle };
export { TableType, SelectType, SidebarType, DatepickerType, ThemeProvider };
export { COLORS, GlobalStyle, icons, aqBootstrapTheme };

declare module "styled-components" {
  type Theme = typeof aqBootstrapTheme;
  export interface DefaultTheme extends Theme {}
}
export * from "./stories/form/datepicker/Datepicker";
export * from "./stories/button/Button";
export * from "./stories/card/Card";
export * from "./stories/form/Form";
export * from "./stories/header/Header";
export * from "./stories/layout/Layout";
export * from "./stories/modal/Modal";
export * from "./stories/pagination/Pagination";
export * from "./stories/select/Select";
export * from "./stories/sidebar/Sidebar";
export * from "./stories/skeleton/Skeleton";
export * from "./stories/spinner/Spinner";
export * from "./stories/table/Table";
export * from "./stories/typography/Typography";
export * from "./stories/pagetitle/PageTitle";
export * from "./stories/pagetitle/PageTitle";
export * from "./stories/tabs/Tabs";
export * from "./stories/accordion/Accordion";
export * from "./stories/pill/Pill";
export * from "./stories/carousel/Carousel";
export * from "./stories/Steps/Steps";
