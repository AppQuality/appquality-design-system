// rollup.config.js
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    image(),
    svgr({
      svgoConfig: {
        plugins: [
          {
            active: false,
            name: "removeDimensions",
          },
        ],
      },
    }),
    typescript(),
  ],
  external: ["react", "react-dom", "styled-components"],
};
