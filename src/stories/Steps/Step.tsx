import { BaseProps } from "../../shared/_types";
import styled from "styled-components";
import { StepsProps } from "./Steps";
import {
  ArrowRightCircle,
  ArrowDownCircle,
  CheckCircleFill,
  Circle,
} from "react-bootstrap-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export interface StepProps extends BaseProps {
  title?: string;
  description?: string;
  direction: StepsProps["direction"];
  status?: "inactive" | "current" | "completed";
  onClick?: () => void;
}
export interface StepIconProps {
  direction: StepsProps["direction"];
  status?: "inactive" | "current" | "completed";
}

const StyledStep = styled.div<{ status: StepProps["status"] }>`
  display: grid;
  color: ${(props) =>
    props.status === "current"
      ? props.theme.palette.primary
      : props.theme.colors.disabled};
`;

export const Step = ({
  title,
  description,
  direction,
  status = "inactive",
  onClick,
}: StepProps) => {
  return (
    <StyledStep status={status} onClick={onClick}>
      <TransitionGroup>
        {status === "current" && (
          <CSSTransition classNames="icon" timeout={200}>
            {direction === "horizontal" ? (
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
      <div className="step-title">{title}</div>
      {direction === "horizontal" && (
        <div className="step-description">{description}</div>
      )}
    </StyledStep>
  );
};
