import styled from "styled-components";
import { BaseProps } from "../../shared/_types";

interface CarouselSlideProps extends BaseProps {}

const BasicCarouselSlide = ({ className, children }: CarouselSlideProps) => (
  <div className={className}>{children}</div>
);

export const CarouselSlide = styled(BasicCarouselSlide)`
  scroll-snap-align: start;
  flex-shrink: 0;
  padding-right: 8px;
  padding-left: 8px;

  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    padding-right: 16px;
    padding-left: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }
`;
