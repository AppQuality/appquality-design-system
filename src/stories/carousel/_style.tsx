import styled from "styled-components";

export const StyledItem = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: calc(100% - 52px);
  margin-right: 16px;
  padding-left: 16px;
`;

export const StyledCarousel = styled.div`
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

  .controls {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
    display: none;
  }
  .disabled {
    opacity: 0.3;
  }
`;
