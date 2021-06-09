// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { stickToHeader } from "./utils/stickToHeader";
import { paddings } from "./utils/paddings";
import { margins } from "./utils/margins";
import { orders } from "./utils/orders";
import { grid } from "./utils/grid";
import { containers } from "./utils/containers";

const GlobalStyle = createGlobalStyle`${(props) => {
  let style = "";
  const base = `
    body {
      font-family: ${props.theme.typography.fontFamily.base};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${props.theme.typography.fontSize.base};
      font-weight: ${props.theme.typography.fontWeight.normal};
      line-height: 1.5;
      color:  ${props.theme.palette.primary};
      background-color: ${props.theme.colors.gray100};
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
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
  style += containers(props.theme);

  return style;
}}  
`;

export default GlobalStyle;
