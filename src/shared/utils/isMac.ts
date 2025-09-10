import { UAParser } from "ua-parser-js";

export const isMac = () => {
  const parser = new UAParser();
  const os = parser.getOS().name;

  return os && /Mac OS|iOS/.test(os);
};
