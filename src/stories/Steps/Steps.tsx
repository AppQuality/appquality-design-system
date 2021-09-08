import { BaseProps } from "../../shared/_types";
import styled from "styled-components";
import React, { ReactNode } from "react";
import { Step } from "./Step";

export interface StepsProps extends BaseProps {
  current: number;
  direction: "horizontal" | "vertical";
}

const Steps = ({ current, children, direction, className }: StepsProps) => {
  let items: ReactNode = null;
  items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === Step) {
      return React.cloneElement(child, {
        status: index === current ? "current" : "inactive",
        direction: direction,
        ...child.props,
      });
    }
    return null;
  });
  return (
    <StyledSteps className={className} direction={direction}>
      <div className="steps">{items}</div>
    </StyledSteps>
  );
};

const StyledSteps = styled.div<{ direction: StepsProps["direction"] }>`
  display: flex;
  flex-flow: ${(props) =>
    props.direction === "horizontal" ? "row" : "column"};
  .steps {
    display: flex;
    flex-flow: ${(props) =>
      props.direction === "horizontal" ? "column" : "row"};
  }
`;

Steps.Step = Step;
export { Steps };
