import styled from "styled-components";
import { NavigationProps } from "./_types";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { useWindowSize } from "../../shared/effects/useWindowSize";

const StyledNavigation = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding-left: ${(props) => props.theme.grid.spacing.default};
  padding-right: ${(props) => props.theme.grid.spacing.default};

  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    justify-content: space-between;
  }
  .carousel-nav-dots,
  .carousel-nav-ctrl {
    display: flex;
  }
  .carousel-nav-dot {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    background-color: ${(props) => props.theme.colors.gray100};
    overflow: hidden;
    border-radius: 7.5px;
    transition: all 0.2s ease-in-out;
    &.active {
      width: 45px;
      background-color: ${(props) => props.theme.palette.primary};
    }
  }
  .button-ctrl {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 44px;
    font-size: 24px;
    cursor: pointer;
    border-radius: 50%;
    margin-left: ${(props) => props.theme.grid.spacing.default};
    border: 2px solid ${(props) => props.theme.colors.white};
    transition: background-color 0.15s ease;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.disabled};

    &.disabled {
      cursor: not-allowed;
    }
    &:not(.disabled):hover {
      background-color: ${(props) => props.theme.palette.primary};
    }
  }
`;
export const Navigation = ({
  active,
  slides,
  handlePrev,
  handleNext,
}: NavigationProps) => {
  const windowsize = useWindowSize();
  const onPrev = () => {
    if (active !== 0) handlePrev();
  };
  const onNext = () => {
    if (active !== slides.length) handleNext();
  };

  return (
    <StyledNavigation>
      <div className="carousel-nav-dots">
        {slides.map((slide, index) => {
          let className = "carousel-nav-dot";
          if (index === active) className += " active";
          return <div className={className} key={index}></div>;
        })}
      </div>
      {windowsize[0] > 991 && (
        <div className="carousel-nav-ctrl">
          <div
            className={`button-ctrl ctrl-prev${
              active === 0 ? " disabled" : ""
            }`}
            onClick={onPrev}
          >
            <ArrowLeft />
          </div>
          <div
            className={`button-ctrl ctrl-next${
              active === slides.length - 1 ? " disabled" : ""
            }`}
            onClick={onNext}
          >
            <ArrowRight />
          </div>
        </div>
      )}
    </StyledNavigation>
  );
};
