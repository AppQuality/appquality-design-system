import { BaseProps } from "../../shared/_types";
import { ModalProps } from "./_types";
import { ModalOverlay } from "./_style";
import { X } from "react-bootstrap-icons";

export const Modal: React.FC<ModalProps & BaseProps> = ({
  isOpen,
  title,
  content,
  footer,
}) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={() => alert("close modal?")}>
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <div className="modal-close" onClick={() => alert("close modal")}>
                <X />
              </div>
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </ModalOverlay>
      )}
    </>
  );
};
