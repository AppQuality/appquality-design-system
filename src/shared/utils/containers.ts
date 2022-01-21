import { DefaultTheme } from "styled-components";

export const containers = (theme: DefaultTheme) => {
  const responsiveWidth: DefaultTheme["grid"]["breakpoints"] = {
    xxl: "1320px",
    xl: "1140px",
    lg: "960px",
    md: "720px",
    sm: "540px",
    xs: "100%",
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
    
    .container .hero {
      margin-left: calc(-24px/2);
      margin-right: calc(-24px/2);
      @media (min-width: ${theme.grid.breakpoints.sm}) {
        margin-left: calc((${responsiveWidth.sm} - 100vw - 24px)/2);
        margin-right: calc((${responsiveWidth.sm} - 100vw - 24px)/2);
      }
      @media (min-width: ${theme.grid.breakpoints.md}) {
        margin-left: calc((${responsiveWidth.md} - 100vw - 24px)/2);
        margin-right: calc((${responsiveWidth.md} - 100vw - 24px)/2);
      }
      @media (min-width: ${theme.grid.breakpoints.lg}) {
        margin-left: calc((${responsiveWidth.lg} - 100vw - 24px)/2);
        margin-right: calc((${responsiveWidth.lg} - 100vw - 24px)/2);
      }
      @media (min-width: ${theme.grid.breakpoints.xl}) {
        margin-left: calc((${responsiveWidth.xl} - 100vw - 24px)/2);
        margin-right: calc((${responsiveWidth.xl} - 100vw - 24px)/2);
      }
      @media (min-width: ${theme.grid.breakpoints.xxl}) {
        margin-left: calc((${responsiveWidth.xxl} - 100vw - 24px)/2);
        margin-right: calc((${responsiveWidth.xxl} - 100vw - 24px)/2);
      }
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
