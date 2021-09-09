import styled, { css } from "styled-components";
import { StepProps } from "./Step";

const mobileSize = "24px";
const desktopSize = "21px";

const horizontalGrid = css`
  grid-template-areas:
    "icon"
    "title";
  grid-row-gap: 8px;
  grid-template-rows: ${mobileSize} auto;
  margin-right: ${(props) => props.theme.grid.spacing.default};

  @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
    grid-template-rows: ${desktopSize} auto;
  }

  .step-icon {
    margin: 0 auto;
  }
`;

const verticalGrid = css`
  grid-template-areas:
    "icon title"
    "icon description";
  grid-template-columns: ${mobileSize} auto;
  grid-column-gap: 8px;
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
      ? props.theme.palette.info
      : props.theme.colors.infoDisabled};

  .step-icon {
    grid-area: icon;
    position: relative;
    width: ${mobileSize};
    height: ${mobileSize};
    @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
      width: ${desktopSize};
      height: ${desktopSize};
    }
    svg {
      width: 100%;
      height: 100%;
    }
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
    color: ${(props) =>
      props.status === "current" || props.status === "completed"
        ? props.theme.colors.disabledFont
        : props.theme.colors.disabledElement};
  }
  .icon-enter {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .icon-enter.icon-enter-active {
    opacity: 1;
  }
  .icon-exit {
    opacity: 1;
    transition: opacity 0.2s;
  }
  .icon-exit.icon-exit-active {
    opacity: 0;
  }
`;
