import { css } from "styled-components";

export const editorStyle = css`
  > * + * {
    margin-top: 0.75em;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray800};
  }

  h1 {
    font-size: 2.617924em;
  }

  h2 {
    font-size: 1.618em;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1.1rem;
  }

  /*=====
      #Lists
      =====*/
  ul,
  ol,
  dl {
    padding: 0.618em 0.618rem;
    margin-left: 1rem;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    padding: 0 0.618rem;
    line-height: 1.618;
  }

  dt {
    text-indent: -0.618rem;
  }

  dd {
    margin: 0;
    padding: 0 0.618rem 0 0.618rem;
  }

  hr {
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }

  p,
  blockquote {
    line-height: 1.618;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.618em;
  }

  blockquote {
    border-left: 3px solid;
    border-color: ${({ theme }) => theme.colors.gray300};
    margin: 1.618em 0.618rem;
    padding-left: 0.618em;
  }

  em,
  i,
  cite {
    font-style: italic;
  }

  strong,
  b {
    font-weight: 500;
  }

  cite {
    display: block;
    text-align: right;
  }

  u {
    text-decoration: none;
    border-bottom: 1px dotted red;
  }

  small,
  sub,
  sup {
    font-size: 0.618rem;
    line-height: 1;
  }

  sub {
    vertical-align: sub;
  }

  sup {
    vertical-align: super;
  }

  s,
  strike,
  del {
    text-decoration: strikethrough;
  }

  ins,
  del {
    background-color: rgba(220, 220, 220, 0.25);
  }

  ins {
    text-decoration: none;
  }

  /*
      mark and selection should be different, so user knows which one they've selected.
      
      mark and selections:
      saturation: 44%
      lightness: 75%
      Hue is different
      */
  mark {
    background-color: rgba(165, 220, 165, 0.9);
  }

  ::selection {
    background-color: rgba(165, 220, 220, 0.9);
  }

  /* Because mark and selection have same saturation, brightenss, mark won't easily stand out if it's selected */
  mark::selection {
    background-color: rgba(165, 220, 110, 0.9);
  }

  /* dfn and dt both do the same thing: denote a term to be defined */
  dfn,
  dt {
    font-style: oblique;
    font-weight: 700;
    text-transform: capitalize;
  }

  code {
    background-color: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.red600};
    padding: 0.2rem 0.3rem;
    border-radius: 4px;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  kbd,
  samp,
  data {
    background-color: rgba(165, 165, 165, 0.2);
  }

  kbd {
    font-size: 0.75rem;
    padding: 0.25ex 0.5ex;
    border: 1px solid rgb(193, 193, 193);
    border-radius: 3px;
  }

  /*Treat samp like a mini blockquote. because basically you're quoting what the computer would do*/
  samp,
  data {
    padding: 0 10px;
  }

  var,
  data {
    font-style: italic;
  }

  samp {
    border-left: 5px solid rgb(193, 193, 193);
  }

  data {
    padding: 0 10px;
  }

  /* Placeholder (at the top) */
  /*p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #ced4da;
    pointer-events: none;
    height: 0;
  }*/

  /* Placeholder (on every new line) */
  .is-empty::before {
    content: attr(data-placeholder);
    float: left;
    color: #ced4da;
    pointer-events: none;
    height: 0;
  }

  word-break: break-word;
`;

export const readOnlyStyle = css`
  pointer-events: none;
  border: none;

  .ProseMirror {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    min-height: 0;
  }
`;
