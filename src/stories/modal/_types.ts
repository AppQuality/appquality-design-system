import * as React from "react";
export interface ModalProps {
  isOpen: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}
