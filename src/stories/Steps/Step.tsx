import {
  ArrowDownCircle,
  ArrowRightCircle,
  CheckCircleFill,
  Circle,
} from "react-bootstrap-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BaseProps } from "../../shared/_types";
import { Text } from "../typography/Typography";
import { StyledStep } from "./StyledStep";
import { defaultDirection, StepProps } from "./_types";

export interface StepExternalProps extends BaseProps {
  title?: string;
  description?: string;
  isCompleted?: boolean;
}

const animationTimeout = 250;

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
            <CSSTransition
              aria-hidden="true"
              classNames="status-icon"
              timeout={animationTimeout}
            >
              {direction === "vertical" ? (
                <ArrowRightCircle />
              ) : (
                <ArrowDownCircle />
              )}
            </CSSTransition>
          )}
          {status === "completed" && (
            <CSSTransition
              aria-hidden="true"
              classNames="status-icon"
              timeout={animationTimeout}
            >
              <CheckCircleFill />
            </CSSTransition>
          )}
          {status === "inactive" && (
            <CSSTransition
              aria-hidden="true"
              classNames="status-icon"
              timeout={animationTimeout}
            >
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
