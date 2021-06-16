import { DefaultTheme } from "styled-components";

export const containers = (theme: DefaultTheme) => {
  const responsiveWidth: DefaultTheme["grid"]["breakpoints"] = {
    xxl: "1320px",
    xl: "1140px",
    lg: "960px",
    md: "720px",
    sm: "540px",
    xs: "540px",
  };

  let style = `
	  .container,
	  .container-fluid {
		  width: 100%;
		  padding-right: calc(${theme.grid.gutter.x} / 2);
		  padding-left: calc(${theme.grid.gutter.x} / 2);
		  margin-right: auto;
		  margin-left: auto;
	  }
	
	`;

  let breakpoints = Object.entries(theme.grid.breakpoints) as [
    keyof DefaultTheme["grid"]["breakpoints"],
    string
  ][];
  style += breakpoints
    .map(([key, value]) => {
      if (responsiveWidth.hasOwnProperty(key)) {
        return `
        @media (min-width: ${value}) {
          .container {
            max-width: ${responsiveWidth[key]}
          }
        }
        `;
      }
      return "";
    })
    .join("");
  return style;
};
