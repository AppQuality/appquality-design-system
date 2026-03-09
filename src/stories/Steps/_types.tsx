import { BaseProps } from "../../shared/_types";

// this is just the component we expose to the user,
// we compose the final "Step" into the Steps main component adding props and current status,
// we don't use the same component for example to leverage typescript type check

import { StepExternalProps } from "./Step";

// and to avoid to expose a number of internal props as optional in StepExternal
export const StepExternal = (props: StepExternalProps) => null;

export interface StepsProps extends BaseProps {
  current: number;
  direction?: "vertical" | "horizontal";
  clickHandler?: (index: number, current: number) => void;
}

export interface StepProps extends StepExternalProps {
  direction?: StepsProps["direction"];
  status: "inactive" | "current" | "completed";
  index: number;
  current: number;
  clickHandler?: StepsProps["clickHandler"];
}
export const defaultDirection: StepsProps["direction"] = "horizontal";
