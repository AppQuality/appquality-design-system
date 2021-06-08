import { DefaultTheme } from "styled-components";

export const stickToHeader = (theme: DefaultTheme) => {
  let style = `
.stick-to-header {
	position: sticky;
	top: calc(54px + ${theme.grid.spacing.default});
}`;
  style += Object.entries(theme.grid.breakpoints)
    .map(
      ([key, value]) => `
	@media (min-width: ${value}) {
		.stick-to-header-${key} {
			position: sticky;
			top: calc(54px + ${theme.grid.spacing.default});
		}
	}`
    )
    .join("");
  return style;
};
