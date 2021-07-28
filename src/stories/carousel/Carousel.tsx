import React, { useState, useRef, useEffect } from "react";
import { CarouselProps, SlideProps } from "./_types";
import { Slide } from "./Slide";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
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

  .carousel-nav {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }
  .carousel-nav-dots,
  .carousel-nav-ctrl {
    display: flex;
  }
  .carousel-nav-dot {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    background-color: ${(props) => props.theme.colors.gray100};
    overflow: hidden;
    border-radius: 50%;
    &.active {
      background-color: ${(props) => props.theme.palette.primary};
    }
  }
  .button-ctrl {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 44px;
    font-size: 24px;
    cursor: pointer;
    border-radius: 50%;
    margin-right: ${(props) => props.theme.grid.spacing.default};
    border-color: ${(props) => props.theme.colors.white};
    transition: background-color 0.15s ease;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.disabled};

    &:hover {
      background-color: ${(props) => props.theme.palette.primary};
    }
  }
`;

export const Carousel = ({ children, controls, navigation }: CarouselProps) => {
  const [active, setActive] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [items, setItems] = useState<any[] | undefined | null>([]);
  const [slides, setSlides] = useState<[][]>([]);
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
      <div className="slides">
        {slides.map((slide, index) => (
          <Slide key={index} index={index} onIntersecting={setActive}>
            {slide.map((item, j) => item)}
          </Slide>
        ))}
      </div>
      {navigation && (
        <div className="carousel-nav">
          <div className="carousel-nav-dots">
            {slides.map((slide, index) => {
              let className = "carousel-nav-dot";
              if (index === active) className += " active";
              return <div className={className} key={index}></div>;
            })}
          </div>
          <div className="carousel-nav-ctrl">
            <div className="button-ctrl ctrl-prev">
              <ArrowLeft />
            </div>
            <div className="button-ctrl ctrl-next">
              <ArrowRight />
            </div>
          </div>
        </div>
      )}
    </StyledCarousel>
  );
};
