import { ChangeEvent } from "react";

export interface Option {
  label: string;
  value?: string;
  options?: Option[];
  isDisabled?: boolean;
  isFixed?: boolean;
  [index: string]: any;
}

type Options = Option[] | GetOptionsAsync;
export interface GetOptionsAsyncResponse {
  more: boolean;
  results: Option[];
}
export type GetOptionsAsync = (
  start: number,
  search?: string
) => Promise<GetOptionsAsyncResponse>;
// () => { github.get('repositories').then( rep => rep.map(r => {r.id,r.name}))
// () => { api.get('/api/users/me/bugs').then( bugs => bug.map( b => b.campaign_name).unique())

export interface SelectProps /*extends GenericFieldInterface*/ {
  name: string;
  label: string;
  onBlur?: (e: ChangeEvent) => void;
  onChange?: (value: Option) => void;
  options: Options;
  value: Option | Array<Option>;
  defaultValue?: Option;
  placeholder?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
}

export type OptionActionType = "add" | "reset" | "set";

export interface OptionAction {
  type: OptionActionType;
  payload: Option[];
}
