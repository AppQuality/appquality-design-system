import React from "react";

import GlobalStyle from "../src/shared/globalStyle";
import { ThemeProvider } from "styled-components";
import aqBootstrapTheme from "../src/stories/theme/defaultTheme";

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={aqBootstrapTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
