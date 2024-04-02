import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/shared/globalStyle";
import { aqBootstrapTheme } from "../src/stories/theme/defaultTheme";

// Global decorator to apply the styles to all stories
export const decorators = [
  (StoryFn) => (
    <div style={{ padding: "10px" }}>
      <div
        style={{ overflow: "hidden", background: "#fff", minHeight: "100vh" }}
      >
        <ThemeProvider theme={aqBootstrapTheme}>
          <GlobalStyle />
          <StoryFn />
        </ThemeProvider>
      </div>
    </div>
  ),
];

export const parameters = {
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
