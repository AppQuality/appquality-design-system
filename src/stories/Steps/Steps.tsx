import React, { ReactNode } from "react";
import styled from "styled-components";
import { Step } from "./Step";
import { StepExternal, StepProps, StepsProps } from "./_types";

const Steps = ({
  current,
  children,
  direction = "horizontal",
  clickHandler,
  className,
  ...props
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
    <StyledSteps className={className} direction={direction} {...props}>
      <ul className="steps">{items}</ul>
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
