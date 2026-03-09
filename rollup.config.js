// rollup.config.js
import image from "@rollup/plugin-image";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
    }),
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
