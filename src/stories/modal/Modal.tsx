import { BaseProps } from "../../shared/_types";
import { ModalProps } from "./_types";
import { ModalOverlay } from "./_style";
import { X } from "react-bootstrap-icons";
import { Text } from "../typography/Typography";

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
              <Text>
                <strong>{title}</strong>
              </Text>
              <div className="modal-close" onClick={onClose}>
                <X height="24px" width="24px" />
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
