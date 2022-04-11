import styled, { css } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { StepProps } from "./Step";

const mobileSize = "24px";
const desktopSize = "21px";
const spacingUnit = aqBootstrapTheme.grid.spacing.default;

const horizontalGrid = css`
  grid-template-areas:
    "status"
    "title";
  grid-row-gap: calc(${spacingUnit} / 2);
  grid-template-rows: ${mobileSize} auto;
  &:not(:last-child) {
    margin-right: ${spacingUnit};
  }

  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    grid-template-rows: ${desktopSize} auto;
  }

  .step-icon {
    margin: 0 auto;
  }
  .step-icon:after,
  .step-icon:before {
    content: "";
    display: block;
    width: 50%;
  }
`;

const verticalGrid = css`
  grid-template-areas:
    "status title"
    "status description";
  grid-template-columns: ${mobileSize} auto;
  grid-column-gap: calc(${spacingUnit} / 2);
  margin-bottom: ${(props) => props.theme.grid.spacing.default};

  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    grid-template-columns: ${desktopSize} auto;
  }
`;

const clickableRules = css`
  cursor: pointer;
  &:hover .step-title {
    text-decoration: underline;
  }
`;

const horizontalProgressBar = css`
  &:not(:first-child) .step-status:before {
    left: calc(${spacingUnit} / -2);
  }
  &:not(:last-child) .step-status:after {
    right: calc(${spacingUnit} / -2);
  }
  .step-status {
    &:before,
    &:after {
      height: 1px;
      width: calc(50% + (${spacingUnit} / 2));
      top: calc(50% - 1px);
    }
  }
`;
const verticalProgressBar = css`
  &:not(:first-child) .step-status:before {
    top: calc(${spacingUnit} / -2);
  }
  &:not(:last-child) .step-status:after {
    bottom: calc(${spacingUnit} / -2);
  }
  .step-status {
    &:before,
    &:after {
      width: 1px;
      height: calc(50% + (${spacingUnit} / 2));
      left: calc(50% - 1px);
    }
  }
`;

export const StyledStep = styled.div<{
  status: StepProps["status"];
  direction: StepProps["direction"];
  clickable: boolean;
}>`
  display: grid;
  // grid for horizontal and vertical layout
  ${(props) =>
    props.direction === "horizontal" ? horizontalGrid : verticalGrid}
  // css rules if click is enabled
  ${(props) => props.clickable && clickableRules} 
  
  color: ${(props) =>
    props.status === "current" || props.status === "completed"
      ? props.theme.palette.secondary
      : props.theme.colors.disabledElement};

  // progress bar general rules
  .step-status {
    grid-area: status;
    position: relative;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      background-color: transparent;
    }
  }
  &:not(:first-child) .step-status:before {
    background-color: ${(props) => props.theme.palette.secondary};
  }
  &:not(:last-child) .step-status:after {
    background-color: ${(props) => props.theme.palette.secondary};
  }
  // now place the progress bar
  ${(props) =>
    props.direction === "horizontal"
      ? horizontalProgressBar
      : verticalProgressBar}

  .step-status-icon {
    margin: 0 auto;
    width: ${mobileSize};
    height: ${mobileSize};
    background-color: ${(props) => props.theme.colors.white};
    position: relative;
    z-index: 1;
    @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
      width: ${desktopSize};
      height: ${desktopSize};
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .status-icon-enter {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity var(--animation-timeout);
  }
  .status-icon-enter.status-icon-enter-active {
    opacity: 1;
  }
  .status-icon-exit {
    opacity: 1;
    transition: opacity var(--animation-timeout);
  }
  .status-icon-exit.status-icon-exit-active {
    opacity: 0;
  }
  .step-title {
    grid-area: title;
    color: ${(props) =>
      props.status === "current" || props.status === "completed"
        ? props.theme.palette.primary
        : props.theme.colors.disabledFont};
  }
  .step-description {
    grid-area: description;
    transition: color var(--animation-timeout);
    color: ${(props) =>
      props.status === "current" || props.status === "completed"
        ? props.theme.colors.disabledFont
        : props.theme.colors.disabledElement};
  }
`;
