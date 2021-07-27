import { CarouselProps } from "./_types";
import { StyledCarousel, StyledItem } from "./_style";
import React from "react";

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <StyledCarousel>
      {React.Children.map(children, (child) => (
        <StyledItem>{child}</StyledItem>
      ))}
    </StyledCarousel>
  );
};
