import { CarouselProps } from "./_types";
import { StyledCarousel, StyledItem } from "./_style";
import React, { useState } from "react";

export const Carousel = ({ children, controls, navigation }: CarouselProps) => {
  const [active, setActive] = useState(0);
  return (
    <StyledCarousel>
      <div className="slides">
        {React.Children.map(children, (child) => (
          <StyledItem>{child}</StyledItem>
        ))}
      </div>
      {controls && <div className="carousel-controls"></div>}
      {navigation && (
        <div className="carousel-nav">
          {React.Children.map(children, (child, key) => {
            let className = "carousel-nav-dot";
            if (key === active) className += " active";
            return <div className={className} key={key}></div>;
          })}
        </div>
      )}
    </StyledCarousel>
  );
};
