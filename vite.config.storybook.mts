import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { setEnv } from "./.vite/commands/setEnv";
import { svgrPlugin } from "./.vite/plugins/svgr";

import pkg from "./package.json";

import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  setEnv(mode);
  return {
    build: {
      ...(mode === "development" ? { emptyOutDir: false } : {}),
      outDir: "build",
      lib: {
        entry: resolve(__dirname, "src/index.tsx"),
        formats: ["es"],
      },
      rollupOptions: {
        external: [...Object.keys(pkg.peerDependencies)],
        output: {
          assetFileNames: "assets/[name][extname]",
          entryFileNames: "[name].js",
        },
      },
    },
    plugins: [
      react(),
      svgrPlugin(),
      libInjectCss(),
      dts({
        include: ["src"],
      }),
    ],
  };
});
