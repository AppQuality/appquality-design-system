import { BaseProps } from "../../shared/_types";

export interface PageTitleProps extends BaseProps {
  size?: "big" | "regular" | "small";
  as?: React.ElementType;
  subtitle?:
    | string
    | {
        as: React.ElementType;
        content: string;
      };
  heading?:
    | string
    | {
        as: React.ElementType;
        content: string;
      };
  back?: {
    text: string;
    navigation: string;
  };
}
