// import original module declarations
import "styled-components";
import aqBootstrapTheme from "./stories/theme/defaultTheme";

declare module "styled-components" {
  type Theme = typeof aqBootstrapTheme;
  export interface DefaultTheme extends Theme {}
}
