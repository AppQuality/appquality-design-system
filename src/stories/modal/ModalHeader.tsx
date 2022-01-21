import { X } from "react-bootstrap-icons";
import styled from "styled-components";
import { Title } from "../typography/Typography";
import { ModalHeaderProps } from "./_types";

const BasicModalHeader = ({ title, onClose, className }: ModalHeaderProps) => (
  <div className={className}>
    <Title size="s">{title}</Title>
    <div className="modal-close" onClick={onClose}>
      <X height="24px" width="24px" />
    </div>
  </div>
);

export const ModalHeader = styled(BasicModalHeader)`
  padding: ${(props) => props.theme.grid.spacing.default};
  display: grid;
  grid-template-columns: 1fr 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.elementGeneric};

  .modal-close {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.palette.primary};
  }
`;
