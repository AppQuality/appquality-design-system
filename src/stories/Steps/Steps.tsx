import { BaseProps } from "../../shared/_types";
import styled from "styled-components";
import React, { ReactNode } from "react";
import { Step } from "./Step";

export interface StepsProps extends BaseProps {
  current: number;
  direction?: "horizontal" | "vertical";
}

export const defaultDirection: StepsProps["direction"] = "vertical";

const Steps = ({
  current,
  children,
  direction = "vertical",
  className,
}: StepsProps) => {
  let items: ReactNode = null;
  items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === Step) {
      const isActive = index === current;
      return React.cloneElement(child, {
        status: isActive ? "current" : child.props.status,
        direction: direction,
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
