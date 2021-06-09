import { DefaultTheme } from "styled-components";

export const containers = (theme: DefaultTheme) => {
  const responsiveWidth = {
    xxl: "1320px",
    xl: "1140px",
    lg: "960px",
    md: "720px",
    sm: "540px",
  };

  let style = `
	  .container,
	  .container-fluid {
		  width: 100%;
		  padding-right: ${theme.grid.gutter.x};
		  padding-left: ${theme.grid.gutter.x};
		  margin-right: auto;
		  margin-left: auto;
	  }
	
	`;

  style += Object.entries(theme.grid.breakpoints)
    .map(([key, value]) => {
      if (!responsiveWidth.hasOwnProperty(key)) return "";

      return `
				@media (min-width: ${value}) {
					.container {
						max-width: ${responsiveWidth[key]}
					}
				}
			`;
    })
    .join("");
  return style;
};
