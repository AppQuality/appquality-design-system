import { BaseProps } from "../../shared/_types";
import { ModalProps } from "./_types";
import { StyledModal } from "./_style";
import { X } from "react-bootstrap-icons";
import { Text, Title } from "../typography/Typography";

export const Modal: React.FC<ModalProps & BaseProps> = ({
  isOpen,
  onClose,
  title,
  footer,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <StyledModal>
          <div className="modal-overlay" onClick={onClose} />
          <div className="modal">
            <div className="modal-header">
              <Title size="s">{title}</Title>
              <div className="modal-close" onClick={onClose}>
                <X height="24px" width="24px" />
              </div>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </StyledModal>
      )}
    </>
  );
};
