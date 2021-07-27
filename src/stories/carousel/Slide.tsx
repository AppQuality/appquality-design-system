import { CarouselProps, SlideProps } from "./_types";
import { StyledCarousel, StyledItem } from "./_style";
import React, { useState, useRef, useEffect } from "react";

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
