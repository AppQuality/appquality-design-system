import styled from "styled-components";
import { BaseProps } from "../../shared/_types";
import { CarouselSlide } from "./CarouselSlide";

interface SlidesContainerProps extends BaseProps {
  itemsPerSlide: number;
  currentSlide: number;
}

const BasicSlidesContainer = ({
  children,
  className,
}: SlidesContainerProps) => <div className={className}>{children}</div>;

export const SlidesContainer = styled(BasicSlidesContainer)`
  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: row;
  overflow: visible;
  max-width: 100vw;
  transform: translate3d(0, 0, 0);

  ${CarouselSlide} {
    width: ${(props) => 100 / props.itemsPerSlide}%;
    transition: transform 0.4s ease-in-out;
    transform: translate3d(-${(props) => props.currentSlide * 100}%, 0, 0);
  }
`;
