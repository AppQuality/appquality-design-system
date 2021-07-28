import React, { useState, useRef, useEffect } from "react";
import { CarouselProps, SlideProps } from "./_types";
import { Slide } from "./Slide";
import { Navigation } from "./Navigation";
import { useWindowSize } from "../../shared/effects/useWindowSize";

import styled from "styled-components";

export const StyledCarousel = styled.div`
  .slides {
    scroll-snap-type: x mandatory;
    display: flex;
    flex-direction: row;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    max-width: 100vw;
    transform: translate3d(0, 0, 0);
    will-change: transform;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
      display: none;
    }
  }
`;

export const Carousel = ({ children, controls, navigation }: CarouselProps) => {
  const [active, setActive] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [items, setItems] = useState<any[] | undefined | null>([]);
  const [slides, setSlides] = useState<[][]>([]);
  const ref = useRef(document.createElement("div"));

  const handlePrev = () => {
    ref.current.scrollLeft = ref.current.offsetWidth * (active - 1);
  };

  const handleNext = () => {
    console.log(active);
    ref.current.scrollLeft = ref.current.offsetWidth * (active + 1);
  };

  useEffect(() => {
    setItems(
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child);
        }
      })
    );
  }, [children]);

  useEffect(() => {
    let results = [];
    let finalIndex = -1; // to start from zero
    if (Array.isArray(items) && items.length) {
      results = items.reduce((accumulator, current, i) => {
        if (i % slidesPerView === 0) {
          finalIndex++;
          return [...accumulator, [current]];
        } else {
          accumulator[finalIndex].push(current);
          return accumulator;
        }
      }, []);
    }
    setSlides(results);
  }, [items, slidesPerView]);

  const windowsize = useWindowSize(); // [width, height]
  useEffect(() => {
    if (windowsize[0] > 991) setSlidesPerView(3);
  }, [windowsize]);

  return (
    <StyledCarousel>
      <div className="slides" ref={ref}>
        {slides.map((slide, index) => (
          <Slide key={index} index={index} onIntersecting={setActive}>
            {slide.map((item, j) => item)}
          </Slide>
        ))}
      </div>
      {navigation && (
        <Navigation
          active={active}
          slides={slides}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </StyledCarousel>
  );
};
