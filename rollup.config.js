// rollup.config.js
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [typescript()],
  external: ["react", "react-dom", "styled-components"],
};
