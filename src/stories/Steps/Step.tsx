import { BaseProps } from "../../shared/_types";
import { StyledStep } from "./StyledStep";
import { defaultDirection, StepsProps } from "./Steps";
import {
  ArrowRightCircle,
  ArrowDownCircle,
  CheckCircleFill,
  Circle,
} from "react-bootstrap-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Text } from "../typography/Typography";

export interface StepExternalProps extends BaseProps {
  title?: string;
  description?: string;
  isCompleted?: boolean;
}

const animationTimeout = 250;
// this is just the component we expose to the user,
// we compose the final "Step" into the Steps main component adding props and current status,
// we don't use the same component for example to leverage typescript type check
// and to avoid to expose a number of internal props as optional in StepExternal
export const StepExternal = (props: StepExternalProps) => null;

export interface StepProps extends StepExternalProps {
  direction?: StepsProps["direction"];
  status: "inactive" | "current" | "completed";
  index: number;
  current: number;
  clickHandler?: StepsProps["clickHandler"];
}

export const Step = ({
  title,
  description,
  direction = defaultDirection,
  status = "inactive",
  clickHandler,
  index,
  current,
  className,
}: StepProps) => {
  const handleClick = () => {
    clickHandler && clickHandler(index, current);
  };
  return (
    <StyledStep
      status={status}
      direction={direction}
      onClick={handleClick}
      clickable={clickHandler instanceof Function}
      className={`${className} step`}
      style={{ "--animation-timeout": animationTimeout + "ms" }}
    >
      <div className="step-status">
        <TransitionGroup className="step-status-icon">
          {status === "current" && (
            <CSSTransition classNames="status-icon" timeout={animationTimeout}>
              {direction === "vertical" ? (
                <ArrowRightCircle />
              ) : (
                <ArrowDownCircle />
              )}
            </CSSTransition>
          )}
          {status === "completed" && (
            <CSSTransition classNames="status-icon" timeout={animationTimeout}>
              <CheckCircleFill />
            </CSSTransition>
          )}
          {status === "inactive" && (
            <CSSTransition classNames="status-icon" timeout={animationTimeout}>
              <Circle />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <Text className="step-title">{title}</Text>
      {direction === "vertical" && (
        <Text small className="step-description">
          {description}
        </Text>
      )}
    </StyledStep>
  );
};
