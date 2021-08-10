import * as React from "react";
import { BaseProps } from "../../shared/_types";

export interface ModalHeaderProps extends BaseProps {
  title?: React.ReactNode;
  onClose: () => void;
}

export interface ModalProps extends ModalHeaderProps {
  isOpen: boolean;
  footer?: React.ReactNode;
  size?: "small" | "mid" | "large";
  prevText?: string;
  nextText?: string;
}
