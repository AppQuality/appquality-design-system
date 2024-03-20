import { BaseProps } from "../../shared/_types";
import { aqBootstrapTheme } from "../theme/defaultTheme";

export interface PillProps extends BaseProps {
  type: keyof typeof aqBootstrapTheme["palette"];
  flat?: boolean;
  title?: string;
}
