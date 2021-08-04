import React, { useState } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselNav } from "./CarouselNav";
import { CarouselProps, CarouselNavProps } from "./_types";
import { SlidesContainer } from "./SlidesContainer";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import { withTheme } from "styled-components";
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

const BasicCarousel = ({ children, step = 1, theme }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [vW, vH] = useWindowSize();
  const slides = React.Children.map(children, (child) =>
    React.isValidElement(child) && child.type === CarouselSlide ? child : null
  );
  const totalSlides = slides ? slides.length : 0;

  let currentStep = 1;
  if (typeof step == "number") {
    currentStep = step;
  } else {
    const firstMatchingBp = getFirstMatchingBreakpoint(
      step,
      theme.grid.breakpoints,
      vW
    );
    if (firstMatchingBp) currentStep = firstMatchingBp;
  }

  const totalSteps = Math.ceil(totalSlides / currentStep);

  let onNext: CarouselNavProps["onNext"] = false;
  let onPrev: CarouselNavProps["onPrev"] = false;
  if (current < totalSteps - 1) {
    onNext = () => setCurrent(current + 1);
  }
  if (current > 0) {
    onPrev = () => setCurrent(current - 1);
  }

  return (
    <>
      <SlidesContainer itemsPerSlide={currentStep} currentSlide={current}>
        {slides}
      </SlidesContainer>
      <CarouselNav
        current={current}
        max={totalSteps}
        showArrows={vW > parseInt(theme.grid.breakpoints.lg)}
        setCurrent={setCurrent}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
};

const Carousel = withTheme(BasicCarousel);
export { Carousel };
