import { CarouselNavProps } from "./_types";
import styled from "styled-components";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import React from "react";
import { getCurrentStep } from "./utils";
import { useWindowSize } from "../../shared/effects";

const BasicCarouselNav = ({
  dark,
  className,
  current,
  setCurrent,
  showArrows,
  totalSlides,
  step = 1,
}: CarouselNavProps) => {
  const [vW, vH] = useWindowSize();
  const currentStep = getCurrentStep(step, vW);
  const totalSteps = Math.ceil(totalSlides / currentStep);
  let onNext;
  let onPrev;
  if (current < totalSteps - 1) {
    onNext = () => setCurrent(current + 1);
  }
  if (current > 0) {
    onPrev = () => setCurrent(current - 1);
  }
  const dots = Array.from(Array(totalSteps).keys()).map((slide, index) => {
    return (
      <div
        className={`carousel-nav-dot ${index == current ? "active" : ""}`}
        onClick={() => setCurrent(index)}
        key={index}
      />
    );
  });
  return (
    <div className={className}>
      <div className="carousel-nav-dots">{dots}</div>
      {showArrows && (
        <div className="carousel-nav-ctrl">
          <div
            className={`button-ctrl ctrl-prev${!onPrev ? " disabled" : ""}`}
            onClick={onPrev ? onPrev : undefined}
          >
            <ArrowLeftShort />
          </div>
          <div
            className={`button-ctrl ctrl-next${!onNext ? " disabled" : ""}`}
            onClick={onNext ? onNext : undefined}
          >
            <ArrowRightShort />
          </div>
        </div>
      )}
    </div>
  );
};

export const CarouselNav = styled(BasicCarouselNav)`
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
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.palette.primary};
    overflow: hidden;
    border-radius: 7.5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &.active {
      cursor: initial;
      width: 45px;
      background-color: ${(props) => props.theme.palette.primary};
    }
    @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
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
    margin-left: ${(props) => props.theme.grid.spacing.default};
    border: 1px solid;
    border-color: ${(props) =>
      props.dark ? props.theme.colors.white : props.theme.palette.primary};
    color: ${(props) =>
      props.dark ? props.theme.colors.white : props.theme.palette.primary};
    background-color: transparent;
    transition: all 0.15s ease-in-out;

    &.disabled {
      cursor: default;
      background-color: transparent;
      border-color: ${(props) =>
        props.dark
          ? props.theme.colors.disabled
          : props.theme.colors.disabledDark};
      color: ${(props) =>
        props.dark
          ? props.theme.colors.disabled
          : props.theme.colors.disabledDark};
    }
    &:not(.disabled):active {
      background-color: ${(props) =>
        props.dark ? props.theme.colors.white : props.theme.palette.primary};
      border-color: ${(props) =>
        props.dark ? props.theme.colors.white : props.theme.palette.primary};
      color: ${(props) =>
        props.dark ? props.theme.palette.primary : props.theme.colors.white};
    }
    @media (hover: hover) and (pointer: fine) {
      &:not(.disabled):hover {
        background-color: ${(props) =>
          props.dark ? props.theme.colors.white : props.theme.palette.primary};
        border-color: ${(props) =>
          props.dark ? props.theme.colors.white : props.theme.palette.primary};
        color: ${(props) =>
          props.dark ? props.theme.palette.primary : props.theme.colors.white};
      }
    }
  }
`;
