// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { stickToHeader } from "./utils/stickToHeader";
import { paddings } from "./utils/paddings";
import { margins } from "./utils/margins";
import { orders } from "./utils/orders";
import { grid } from "./utils/grid";
import { containers } from "./utils/containers";
import { textColors } from "./utils/textColors";

const GlobalStyle = createGlobalStyle`${(props) => {
  let style = "";
  const base = `
    *, *::before, *::after {
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
    }
    h1 { font-size: ${props.theme.typography.fontSize.h1} }
    h2 { font-size: ${props.theme.typography.fontSize.h2} }
    h3 { font-size: ${props.theme.typography.fontSize.h3} }
    h4 { font-size: ${props.theme.typography.fontSize.h4} }
    h5 { font-size: ${props.theme.typography.fontSize.h5} }
    h6 { font-size: ${props.theme.typography.fontSize.h6} }
    a {
      color: ${props.theme.palette.primary};
      text-decoration: underline;
    }
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
  style += textColors(props.theme);

  return style;
}}  
`;

export default GlobalStyle;
