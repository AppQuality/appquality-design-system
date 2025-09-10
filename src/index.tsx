// import * as styles from './shared/styles';
import * as COLORS from "./shared/colors";
import GlobalStyle from "./shared/globalStyle";
// import * as animation from './shared/animation';
import * as icons from "react-bootstrap-icons";

import { Field as FormikField, FieldProps, Form, Formik } from "formik";
import { ThemeProvider } from "styled-components";
import * as DatepickerType from "./stories/form/datepicker/_types";
import * as SelectType from "./stories/select/_types";
import * as SidebarType from "./stories/sidebar/SidebarProps";
import * as TableType from "./stories/table/_types";
import { aqBootstrapTheme } from "./stories/theme/defaultTheme";

// import original module declarations
import "styled-components";

//
export * from "./stories/accordion/Accordion";
export * from "./stories/button/Button";
export * from "./stories/card/Card";
export * from "./stories/carousel/Carousel";
export * from "./stories/DateInput";
export * from "./stories/Dropdown";
export * from "./stories/dropzone/Dropzone";
export * from "./stories/editor";
export * from "./stories/form/datepicker/Datepicker";
export * from "./stories/form/Form";
export * from "./stories/form/textareaField/TextareaField";
export * from "./stories/header/Header";
export * from "./stories/layout/Layout";
export * from "./stories/modal/Modal";
export * from "./stories/pagetitle/PageTitle";
export * from "./stories/pagination/Pagination";
export * from "./stories/pill/Pill";
export * from "./stories/placesAutocomplete/PlacesAutocomplete";
export * from "./stories/progress-bar/ProgressBar";
export * from "./stories/select/Select";
export * from "./stories/sidebar/Sidebar";
export * from "./stories/skeleton/Skeleton";
export * from "./stories/spinner/Spinner";
export * from "./stories/Steps/Steps";
export * from "./stories/table/Table";
export * from "./stories/tabs/Tabs";
export * from "./stories/toastr/Toastr";
export * from "./stories/typography/Typography";
export {
  COLORS,
  DatepickerType,
  Form,
  Formik,
  FormikField,
  GlobalStyle,
  SelectType,
  SidebarType,
  TableType,
  ThemeProvider,
  aqBootstrapTheme,
  icons,
};
export type { FieldProps };

declare module "styled-components" {
  type Theme = typeof aqBootstrapTheme;
  export interface DefaultTheme extends Theme {}
}
