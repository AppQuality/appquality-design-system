import { CarouselProps, CarouselStep } from "./_types";
import { aqBootstrapTheme } from "../theme/defaultTheme";

const getFirstMatchingBreakpoint = (
  stepsByBreakpoint: CarouselProps["step"],
  breakpoints: typeof aqBootstrapTheme.grid.breakpoints,
  currentViewportWidth: number
) => {
  if (!stepsByBreakpoint || typeof stepsByBreakpoint == "number") return false;
  const stepBp = Object.keys(stepsByBreakpoint);
  const breakpointsNames = Object.keys(
    breakpoints
  ) as (keyof typeof breakpoints)[];

  const bp = breakpointsNames
    .filter(
      (key) =>
        stepBp.includes(key) &&
        parseInt(breakpoints[key]) < currentViewportWidth
    )
    .reverse()
    .shift();
  if (bp) {
    return stepsByBreakpoint[bp];
  }
  return false;
};

export const getCurrentStep = (step: CarouselStep, vW: number) => {
  let currentStep = 1;
  if (typeof step === "number") {
    currentStep = step;
  } else {
    const firstMatchingBp = getFirstMatchingBreakpoint(
      step,
      aqBootstrapTheme.grid.breakpoints,
      vW
    );
    if (firstMatchingBp) currentStep = firstMatchingBp;
  }
  return currentStep;
};
