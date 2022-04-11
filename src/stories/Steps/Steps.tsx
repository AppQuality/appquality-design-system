import { BaseProps } from "../../shared/_types";
import styled from "styled-components";
import React, { ReactNode } from "react";
import { StepExternal, Step, StepProps } from "./Step";

export interface StepsProps extends BaseProps {
  current: number;
  direction?: "vertical" | "horizontal";
  clickHandler?: (index: number, current: number) => void;
}

export const defaultDirection: StepsProps["direction"] = "horizontal";

const Steps = ({
  current,
  children,
  direction = "horizontal",
  clickHandler,
  className,
}: StepsProps) => {
  let items: ReactNode = null;
  items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === StepExternal) {
      const isActive = index === current;
      const { title, description, isCompleted } = child.props;
      let status: StepProps["status"] = "inactive";
      if (isActive) {
        status = "current";
      } else if (isCompleted) {
        status = "completed";
      }
      return (
        <Step
          title={title}
          description={description}
          status={status}
          current={current}
          index={index}
          direction={direction}
          clickHandler={clickHandler}
        />
      );
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
  flex-flow: ${(props) => (props.direction === "vertical" ? "row" : "column")};
  .steps {
    display: flex;
    flex-flow: ${(props) =>
      props.direction === "vertical" ? "column" : "row"};

    .step {
      flex: 1 1 100%;
      ${(props) => props.direction === "horizontal" && "text-align: center;"};
    }
    .step:first-child,
    .step:last-child {
      ${(props) =>
        props.direction === "horizontal" && "flex: 1 0 max-content;"};
    }
  }
`;

Steps.Step = StepExternal;
export { Steps };
