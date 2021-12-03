// rollup.config.js
import image from "@rollup/plugin-image";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [typescript(), image()],
  external: ["react", "react-dom", "styled-components"],
};
