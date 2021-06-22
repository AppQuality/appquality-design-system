import { BaseProps } from "../../shared/_types";
import { ModalProps } from "./_types";
import { ModalOverlay } from "./_style";
import { X } from "react-bootstrap-icons";

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
        <ModalOverlay onClick={onClose}>
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <div className="modal-close" onClick={onClose}>
                <X />
              </div>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </ModalOverlay>
      )}
    </>
  );
};
