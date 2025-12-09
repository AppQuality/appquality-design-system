import React, { ChangeEvent, ReactNode } from "react";
import { MenuPlacement } from "react-select";

export type Option = {
  label: ReactNode;
  value?: string;
  options?: Option[];
  isDisabled?: boolean;
  isFixed?: boolean;
  [index: string]: any;
};

type Options = Option[] | GetOptionsAsync;
export interface GetOptionsAsyncResponse {
  more: boolean;
  results: Option[];
}
export type GetOptionsAsync = (
  start: number,
  search?: string,
) => Promise<GetOptionsAsyncResponse>;

export interface SelectProps /*extends GenericFieldInterface*/ {
  name: string;
  label: React.ReactNode;
  onBlur?: (e: ChangeEvent) => void;
  onChange?: (value: Option) => void;
  onCreate?: (value: string) => void;
  options: Options;
  value: Option | Array<Option>;
  defaultValue?: Option;
  placeholder?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  menuTargetQuery?: string;
  menuPlacement?: MenuPlacement;
  formatCreateLabel?: (inputValue: string) => React.ReactNode;
  noOptionsMessage?: () => string;
}

export type OptionActionType = "add" | "reset" | "set";

export interface OptionAction {
  type: OptionActionType;
  payload: Option[] | Option;
}
