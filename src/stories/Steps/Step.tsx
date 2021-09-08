import { BaseProps } from "../../shared/_types";
import styled from "styled-components";
import { defaultDirection, StepsProps } from "./Steps";
import {
  ArrowRightCircle,
  ArrowDownCircle,
  CheckCircleFill,
  Circle,
} from "react-bootstrap-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Text } from "../typography/Typography";

export interface StepProps extends BaseProps {
  title?: string;
  description?: string;
  direction?: StepsProps["direction"];
  status?: "inactive" | "current" | "completed";
  onClick?: () => void;
}

const mobileSize = "24px";
const desktopSize = "21px";

const StyledStep = styled.div<{
  status: StepProps["status"];
  direction: StepsProps["direction"];
}>`
  display: flex;
  flex-flow: ${(props) =>
    props.direction === "horizontal" ? "row" : "column"};
  align-items: center;
  color: ${(props) =>
    props.status === "current" || props.status === "completed"
      ? props.theme.palette.info
      : props.theme.colors.disabled};
  .step-icon {
    flex: 0 0 ${mobileSize};
    height: ${mobileSize};
    svg {
      width: 100%;
      height: 100%;
    }
    @media (min-width: ${(props) => props.theme.grid.breakpoints.lg}) {
      flex: 0 0 ${desktopSize};
      height: ${desktopSize};
    }
  }
  .step-title {
    &:hover {
      text-decoration: ${(props) => (props.onClick ? "underline" : "none")};
    }
  }
`;

export const Step = ({
  title,
  description,
  direction = defaultDirection,
  status = "inactive",
  onClick,
  className,
}: StepProps) => {
  return (
    <StyledStep
      status={status}
      direction={direction}
      onClick={onClick}
      className={className}
    >
      <TransitionGroup className="step-icon">
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
      <Text className="step-title">{title}</Text>
      {direction === "horizontal" && (
        <div className="step-description">{description}</div>
      )}
    </StyledStep>
  );
};
