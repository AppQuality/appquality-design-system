import { DefaultTheme } from "styled-components";

type IItem = {
  name: string;
  style: string;
  sizes: Array<keyof DefaultTheme["grid"]["sizes"]>;
};

const items: Array<IItem> = [
  {
    name: "mt",
    style: "margin-top: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "mb",
    style: "margin-bottom: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "ml",
    style: "margin-left: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "mr",
    style: "margin-right: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "mx",
    style: "margin-left: %val% !important; margin-right: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "my",
    style: "margin-top: %val% !important; margin-bottom: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
  {
    name: "m",
    style: "margin: %val% !important;",
    sizes: [1, 2, 3, 4],
  },
];

export const margins = (theme: DefaultTheme) => {
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
