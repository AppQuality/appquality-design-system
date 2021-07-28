import { CarouselProps, SlideProps } from "./_types";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export const StyledItem = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: calc(100% - 52px);
  margin-right: 16px;
  margin-left: 16px;
  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    width: 100%;
    display: flex;
    margin-right: 0;
    margin-left: 0;
    > * {
      margin-right: 16px;
      margin-left: 16px;
      width: calc((100% / 3));
      flex: 0 1 calc((100% / 3));
    }
  }
`;

export const Slide = ({ children, index, onIntersecting }: SlideProps) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  let ref = useRef<HTMLDivElement>(null);

  const callBack: IntersectionObserverCallback = (entries) => {
    if (entries[0]) setEntry(entries[0]);
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);
  useEffect(() => {
    if (entry?.isIntersecting) {
      onIntersecting(index);
    }
  }, [entry]);
  return <StyledItem ref={ref}>{children}</StyledItem>;
};
