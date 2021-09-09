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

// this is just the component we expose to the user,
// we compose the final "Step" into the Steps main component adding props and current status,
// we don't use the same component for example to leverage typescript type check
// and to avoid to expose a number of internal props as optional in StepExternal
export const StepExternal = (props: StepExternalProps) => null;

export interface StepProps extends StepExternalProps {
  direction?: StepsProps["direction"];
  status: "inactive" | "current" | "completed";
  index: number;
  onChange?: StepsProps["onChange"];
}

export const Step = ({
  title,
  description,
  direction = defaultDirection,
  status = "inactive",
  onChange,
  index,
  className,
}: StepProps) => {
  const handleClick = () => {
    onChange && onChange(index);
  };
  return (
    <StyledStep
      status={status}
      direction={direction}
      onClick={handleClick}
      clickable={onChange instanceof Function}
      className={className}
    >
      <TransitionGroup className="step-icon">
        {status === "current" && (
          <CSSTransition classNames="icon" timeout={200}>
            {direction === "vertical" ? (
              <ArrowRightCircle />
            ) : (
              <ArrowDownCircle />
            )}
          </CSSTransition>
        )}
        {status === "completed" && (
          <CSSTransition classNames="icon" timeout={200}>
            <CheckCircleFill />
          </CSSTransition>
        )}
        {status === "inactive" && (
          <CSSTransition classNames="icon" timeout={200}>
            <Circle />
          </CSSTransition>
        )}
      </TransitionGroup>
      <Text className="step-title">{title}</Text>
      {direction === "vertical" && (
        <Text small className="step-description">
          {description}
        </Text>
      )}
    </StyledStep>
  );
};
