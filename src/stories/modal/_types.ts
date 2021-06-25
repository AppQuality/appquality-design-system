import * as React from "react";
import { BaseProps } from "../../shared/_types";
export interface ModalProps extends BaseProps {
  isOpen: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}
