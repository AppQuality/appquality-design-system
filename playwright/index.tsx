// Import styles, initialize component theme here.
// import '../src/common.css';
import React from "react";
import { beforeMount } from "@playwright/experimental-ct-react17/hooks";
import GlobalStyle from "../src/shared/globalStyle";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../src/stories/theme/defaultTheme";

beforeMount(async ({ App }) => {
  return (
    <ThemeProvider theme={aqBootstrapTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
});
