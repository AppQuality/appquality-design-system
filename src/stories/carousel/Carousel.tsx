import React, { useState } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselNav } from "./CarouselNav";
import { CarouselProps, CarouselNavProps } from "./_types";
import { SlidesContainer } from "./SlidesContainer";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import { withTheme } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";

const getFirstMatchingBreakpoint = (
  stepsByBreakpoint: CarouselProps.step,
  breakpoints: keyof typeof aqBootstrapTheme.grid.breakpoints,
  currentViewportWidth: number
) => {
  const stepBp = Object.keys(stepsByBreakpoint);
  const bp = Object.entries(breakpoints)
    .filter(
      ([key, val]) =>
        typeof val == "string" &&
        stepBp.includes(key) &&
        parseInt(val) < currentViewportWidth
    )
    .reverse()
    .shift();
  if (bp) {
    return stepsByBreakpoint[bp[0]];
  }
  return false;
};

const BasicCarousel = ({ children, step = 1, theme }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [vW, vH] = useWindowSize();
  const slides = React.Children.map(children, (child) =>
    React.isValidElement(child) && child.type === CarouselSlide ? child : null
  );

  let currentStep = step;
  if (typeof step != "number") {
    const firstMatchingBp = getFirstMatchingBreakpoint(
      step,
      theme.grid.breakpoints,
      vW
    );
    currentStep = 1;
    if (firstMatchingBp) currentStep = firstMatchingBp;
  }
  const totalSteps = Math.ceil(slides.length / currentStep);

  let onNext: CarouselNavProps.onNext = false;
  let onPrev: CarouselNavProps.onPrev = false;
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
