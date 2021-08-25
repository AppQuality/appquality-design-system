import styled from "styled-components";
import { BaseProps } from "../../shared/_types";
import { CarouselSlide } from "./CarouselSlide";

const slideViewDesktop = 100;
const slideViewMob = 90;

interface SlidesContainerProps extends BaseProps {
  peekNext: boolean;
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
    transition: transform 0.4s ease-in-out;
    transform: translate3d(
      -${(props) => props.currentSlide * props.itemsPerSlide * 100}%,
      0,
      0
    );
    ${(props) =>
      props.peekNext
        ? `
      width: ${slideViewMob / props.itemsPerSlide}%;
      @media (min-width: ${props.theme.grid.breakpoints.lg}) {
        width: ${slideViewDesktop / props.itemsPerSlide}%;
      }
      `
        : `
      width: ${slideViewDesktop / props.itemsPerSlide}%;
      `}
  }

  ${(props) =>
    props.peekNext
      ? `  @media (min-width: ${props.theme.grid.breakpoints.lg}) {
      overflow: hidden;
    }`
      : `  overflow: hidden;`}
`;
