import { DefaultTheme } from "styled-components";

const ordersNo = [0, 1, 2, 3, 4, 5];

export const orders = (theme: DefaultTheme) => {
  let style = "";
  style += ordersNo
    .map(
      (o) => `
    .aq-order-${o} {
      order: ${o};
    }
  `
    )
    .join("");

  style += Object.entries(theme.grid.breakpoints)
    .map(
      ([key, value]) => `
  	@media (min-width: ${value}) {
      ${ordersNo
        .map(
          (o) => `
        .aq-order-${o}-${key} {
          order: ${o};
        }
      `
        )
        .join("")}
  	}`
    )
    .join("");
  return style;
};
