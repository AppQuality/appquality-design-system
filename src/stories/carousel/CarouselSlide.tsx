import styled from "styled-components";
import { BaseProps } from "../../shared/_types";

interface CarouselSlideProps extends BaseProps {}

const BasicCarouselSlide = ({ className, children }: CarouselSlideProps) => (
  <div className={className}>{children}</div>
);

export const CarouselSlide = styled(BasicCarouselSlide)`
  flex-shrink: 0;
  padding-right: 8px;
  padding-left: 8px;
  display: flex;

  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;
