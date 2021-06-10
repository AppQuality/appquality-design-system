import { DefaultTheme } from "styled-components";
import { ChangeEventHandler } from "react";

export interface GenericFieldInterface {
  name: string;
  label?: string;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
}

export interface FieldInterface extends GenericFieldInterface {
  type?: "text" | "email" | "password" | "number" | "url" | "tel" | "search";
  placeholder?: string;
}

export interface FormGroupProps {
  className?: string;
  theme: DefaultTheme;
}

export interface FormCheckProps {
  className?: string;
  theme: DefaultTheme;
}
