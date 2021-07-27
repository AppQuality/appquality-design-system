import { CarouselProps, SlideProps } from "./_types";
import { StyledCarousel, StyledItem } from "./_style";
import { Slide } from "./Slide";
import React, { useState, useRef, useEffect } from "react";

export const Carousel = ({ children, controls, navigation }: CarouselProps) => {
  const [active, setActive] = useState(0);

  return (
    <StyledCarousel>
      <div className="slides">
        {React.Children.map(children, (child, index) => (
          <Slide key={index} index={index} onIntersecting={setActive}>
            {child}
          </Slide>
        ))}
      </div>
      {controls && <div className="carousel-controls"></div>}
      {navigation && (
        <div className="carousel-nav">
          {React.Children.map(children, (child, index) => {
            let className = "carousel-nav-dot";
            if (index === active) className += " active";
            return <div className={className} key={index}></div>;
          })}
        </div>
      )}
    </StyledCarousel>
  );
};
