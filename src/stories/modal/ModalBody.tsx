import styled from "styled-components";
import { BaseProps } from "../../shared/_types";
import { ButtonProps } from "../button/_types";

export interface ModalBodyProps extends BaseProps {
  onPrev?: () => boolean;
  onNext?: () => boolean;
  onShow?: () => void;
  prevText?: string;
  nextText?: string;
  prevButtonStyle?: ButtonProps["type"];
  nextButtonStyle?: ButtonProps["type"];
}

const BasicModalBody = ({ children, className }: ModalBodyProps) => (
  <div className={className}>{children}</div>
);

export const ModalBody = styled(BasicModalBody)`
  padding: ${(props) => props.theme.grid.spacing.default};
`;
