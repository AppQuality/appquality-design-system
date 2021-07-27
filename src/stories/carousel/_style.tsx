import styled from "styled-components";
import { StyledCarouselProps } from "./_types";

export const StyledItem = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: calc(100% - 52px);
  margin-right: 16px;
  padding-left: 16px;
`;

export const StyledCarousel = styled.div`
  .slides {
    scroll-snap-type: x mandatory;
    display: flex;
    flex-direction: row;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    max-width: 100vw;
    transform: translate3d(0, 0, 0);
    will-change: transform;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
      display: none;
    }
  }

  .carousel-ctrl {
    cursor: pointer;
  }
  .carousel-nav {
    display: flex;
    flex-flow: row;
    justify-content: center;
  }
  .carousel-nav-dot {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    background-color: ${(props) => props.theme.colors.gray100};
    overflow: hidden;
    border-radius: 50%;
    &.active {
      background-color: ${(props) => props.theme.palette.primary};
    }
  }
`;
