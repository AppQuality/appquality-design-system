import React, { useState } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselNav } from "./CarouselNav";
import { CarouselProps, CarouselNavProps } from "./_types";
import { SlidesContainer } from "./SlidesContainer";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import { withTheme } from "styled-components";
import { getCurrentStep } from "./utils";

const BasicCarousel = ({
  peekNext = true,
  children,
  step = 1,
  totalSlides,
  theme,
  current,
  setCurrent,
}: CarouselProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const [vW, vH] = useWindowSize();
  const slides = React.Children.map(children, (child) =>
    React.isValidElement(child) && child.type === CarouselSlide ? child : null
  );

  const currentStep = getCurrentStep(step, vW);
  const totalSteps = Math.ceil(totalSlides / currentStep);

  let onNext: boolean | (() => void) = false;
  let onPrev: boolean | (() => void) = false;
  if (current < totalSteps - 1) {
    onNext = () => setCurrent(current + 1);
  }
  if (current > 0) {
    onPrev = () => setCurrent(current - 1);
  }

  const CAROUSEL_SCROLL_SENSITIVITY = 75;
  return (
    <>
      <div
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
        onTouchEnd={() => {
          if (vW <= parseInt(theme.grid.breakpoints.lg)) {
            typeof onNext === "function" &&
              touchStart - touchEnd > CAROUSEL_SCROLL_SENSITIVITY &&
              onNext();
            typeof onPrev === "function" &&
              touchStart - touchEnd < -CAROUSEL_SCROLL_SENSITIVITY &&
              onPrev();
          }
        }}
      >
        <SlidesContainer
          peekNext={peekNext}
          itemsPerSlide={currentStep}
          currentSlide={current}
        >
          {slides}
        </SlidesContainer>
      </div>
    </>
  );
};

const Carousel = withTheme(BasicCarousel);
export { Carousel, CarouselSlide, CarouselNav };
