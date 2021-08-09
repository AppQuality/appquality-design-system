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
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  transform: translate3d(0, 0, 0);
  transition: transform 0.4s ease-in-out;
  will-change: transform;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
    display: none;
  }

  ${CarouselSlide} {
    width: ${(props) => 90 / props.itemsPerSlide}%;
    @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
      width: ${(props) => 100 / props.itemsPerSlide}%;
    }
  }
  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    overflow: hidden;
    transform: translate3d(-${(props) => props.currentSlide * 100}%, 0, 0);
  }
`;
