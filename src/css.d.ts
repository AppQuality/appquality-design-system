// My css.d.ts file
import * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    // Add a CSS Custom Property
    "--accordion-item-height"?: string;
  }
}
