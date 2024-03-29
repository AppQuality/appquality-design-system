// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { containers } from "./utils/containers";
import { grid } from "./utils/grid";
import { margins } from "./utils/margins";
import { orders } from "./utils/orders";
import { paddings } from "./utils/paddings";
import { stickToHeader } from "./utils/stickToHeader";
import { textColors } from "./utils/textColors";

const GlobalStyle = createGlobalStyle`${(props) => {
  let style = "";
  const base = `
    *, *::before, *::after {
      box-sizing: border-box;
    }
    p {
      margin: 0;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
      font: inherit;
    }
    a {
      color:  ${props.theme.palette.secondary};
      text-decoration: underline;
    }
    html {
      font-size: 16px;
    }
    @media only screen and (min-width: ${props.theme.grid.breakpoints.lg}) {
      html {
        font-size: 14px;
      }
    }
    body {
      font-family: ${props.theme.typography.fontFamily.base};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${props.theme.typography.fontSize.base};
      font-weight: ${props.theme.typography.fontWeight.normal};
      line-height: 1.5;
      color:  ${props.theme.variants.primary};
      background-color: ${props.theme.colors.gray100};
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      margin: 0;
    }
    button {
      font-size: ${props.theme.typography.fontSize.base};
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
    img {
      max-width: 100%;
    }
    strong, b {
      font-weight: ${props.theme.typography.fontWeight.medium};
    }
    em, i {
      font-style: italic;
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
    .aq-float-right {
      float: right;
    }
    .aq-float-left {
      float: left;
    }
    .aq-float-none {
      float: none;
    }
    .capitalize-first:first-letter {
      text-transform: capitalize;
    }
    .aq-nopadding {
      padding: 0 !important;
    }
    .aq-nomargin {
      margin: 0 !important;
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
