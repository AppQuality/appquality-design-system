import styled from "styled-components";
import { NavigationProps, StyledNavigationProps } from "./_types";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import { useWindowSize } from "../../shared/effects/useWindowSize";

const StyledNavigation = styled.div(
  ({ theme, dark }: StyledNavigationProps) => `
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding-left: ${theme.grid.spacing.default};
  padding-right: ${theme.grid.spacing.default};

  @media (min-width: ${theme.grid.breakpoints.lg}) {
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
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.palette.primary};
    overflow: hidden;
    border-radius: 7.5px;
    transition: all 0.2s ease-in-out;
    &.active {
      width: 45px;
      background-color: ${theme.palette.primary};
    }
    @media (min-width: ${theme.grid.breakpoints.lg}) {
      transition: all 0.2s ease-in-out 0.2s;
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
    margin-left: ${theme.grid.spacing.default};
    border: 1px solid;
    border-color: ${dark ? theme.colors.white : theme.palette.primary};
    color: ${dark ? theme.colors.white : theme.palette.primary};
    background-color: transparent;
    transition: all 0.15s ease-in-out;

    &.disabled {
      cursor: default;
      background-color: transparent;
      border-color: ${dark ? theme.colors.disabled : theme.colors.disabledDark};
      color: ${dark ? theme.colors.disabled : theme.colors.disabledDark};
    }
    &:not(.disabled):hover {
      background-color: ${dark ? theme.colors.white : theme.palette.primary};
      border-color: ${dark ? theme.colors.white : theme.palette.primary};
      color: ${dark ? theme.palette.primary : theme.colors.white};
    }
  }
`
);
export const Navigation = ({
  active,
  slides,
  dark,
  handlePrev,
  handleNext,
}: NavigationProps) => {
  const windowsize = useWindowSize();
  const onPrev = () => {
    if (active !== 0) handlePrev();
  };
  const onNext = () => {
    if (active !== slides.length - 1) handleNext();
  };

  return (
    <StyledNavigation dark={dark}>
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
            <ArrowLeftShort />
          </div>
          <div
            className={`button-ctrl ctrl-next${
              active === slides.length - 1 ? " disabled" : ""
            }`}
            onClick={onNext}
          >
            <ArrowRightShort />
          </div>
        </div>
      )}
    </StyledNavigation>
  );
};
