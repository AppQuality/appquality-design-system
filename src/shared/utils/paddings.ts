import { DefaultTheme } from "styled-components";

type IItem = {
  name: string;
  style: string;
  sizes: Array<keyof DefaultTheme["grid"]["sizes"]>;
};

const items: Array<IItem> = [
  {
    name: "pt",
    style: "padding-top: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "pb",
    style: "padding-bottom: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "pl",
    style: "padding-left: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "pr",
    style: "padding-right: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "px",
    style: "padding-left: %val% !important; padding-right: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "py",
    style: "padding-top: %val% !important; padding-bottom: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "p",
    style: "padding: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
];

export const paddings = (theme: DefaultTheme) => {
  let style = `${items
    .map(
      (item) => `
			${Object.values(item.sizes)
        .map(
          (size) => `
			.aq-${item.name}-${size} {
				${item.style.replaceAll("%val%", theme.grid.sizes[size])}
			}
			`
        )
        .join("")}
	`
    )
    .join("")}`;

  style += Object.entries(theme.grid.breakpoints)
    .map(
      ([bpName, bpValue]) => `
	@media (min-width: ${bpValue}) {
		${items.map(
      (item) => `
				${Object.values(item.sizes)
          .map(
            (size) => `
				.aq-${item.name}-${size}-${bpName} {
					${item.style.replaceAll("%val%", theme.grid.sizes[size])}
				}
				`
          )
          .join("")}
		`
    )}
	}`
    )
    .join("");
  return style;
};
