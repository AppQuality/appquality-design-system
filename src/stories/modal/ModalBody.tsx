import styled from "styled-components";
import { BaseProps } from "../../shared/_types";

export interface ModalBodyProps extends BaseProps {
  onPrev?: () => boolean;
  onNext?: () => boolean;
  prevText?: string;
  nextText?: string;
}

const BasicModalBody = ({ children, className }: ModalBodyProps) => (
  <div className={className}>{children}</div>
);

export const ModalBody = styled(BasicModalBody)`
  padding: ${(props) => props.theme.grid.spacing.default};
`;
