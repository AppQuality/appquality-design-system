import * as React from "react";
export interface ModalProps {
  isOpen: boolean;
  title?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}
