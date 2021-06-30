import { ModalProps } from "./_types";
import { X } from "react-bootstrap-icons";
import { Title } from "../typography/Typography";

export const BasicModal = ({
  isOpen,
  onClose,
  title,
  footer,
  size = "mid",
  children,
  className,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className={className}>
          <div className="modal-overlay" onClick={onClose} />
          <div className="modal">
            {title ? (
              <div className="modal-header">
                <Title size="s">{title}</Title>
                <div className="modal-close" onClick={onClose}>
                  <X height="24px" width="24px" />
                </div>
              </div>
            ) : null}
            <div className="modal-body">{children}</div>
            {footer ? <div className="modal-footer">{footer}</div> : null}
          </div>
        </div>
      )}
    </>
  );
};
