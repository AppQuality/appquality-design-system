import { readFileSync } from "fs";
import { loadEnv } from "vite";

export function setEnv(mode: string) {
  Object.assign(
    process.env,
    loadEnv(mode, ".", ["REACT_APP_", "NODE_ENV", "PUBLIC_URL"]),
  );
  process.env.NODE_ENV ||= mode;
  const { homepage } = JSON.parse(readFileSync("package.json", "utf-8"));
  process.env.PUBLIC_URL ||= homepage
    ? `${
        homepage.startsWith("http") || homepage.startsWith("/")
          ? homepage
          : `/${homepage}`
      }`.replace(/\/$/, "")
    : "";
}
