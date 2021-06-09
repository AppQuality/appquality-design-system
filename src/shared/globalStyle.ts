// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { stickToHeader } from "./utils/stickToHeader";
import { paddings } from "./utils/paddings";
import { margins } from "./utils/margins";
import { orders } from "./utils/orders";
import { grid } from "./utils/grid";

const GlobalStyle = createGlobalStyle`${(props) => {
  let style = "";
  const base = `
    img {
      max-width: 100%;
    }
    .margin-default {
      margin-bottom: ${props.theme.grid.spacing.default};
    }
    .aq-text-center {
      text-align: center;
    }
    .aq-text-right {
      text-align: right;
    }
    .aq-text-left {
      text-align: left;
    }
  `;
  style += base;

  style += stickToHeader(props.theme);
  style += paddings(props.theme);
  style += margins(props.theme);
  style += orders(props.theme);
  style += grid(props.theme);

  return style;
}}  
`;

export default GlobalStyle;
