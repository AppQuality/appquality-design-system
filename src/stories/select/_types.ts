import React, { ChangeEvent } from "react";

interface ApiOptions {
  language?: string;
  region?: string;
}

interface LatLng {
  lat: number;
  lng: number;
}

interface AutocompletionRequest {
  bounds?: [LatLng, LatLng];
  componentRestrictions?: { country: string | string[] };
  location?: LatLng;
  offset?: number;
  radius?: number;
  types?: string[];
}

interface GooglePlacesAutocompleteProps {
  apiKey?: string; // default: ''
  apiOptions?: ApiOptions; // default: { }
  autocompletionRequest?: AutocompletionRequest; // default: { }
  debounce?: number; // default: 300
  minLengthAutocomplete?: number; // default: 0
  onLoadFailed?: (error: Error) => void; // default: console.error
  //selectProps?: SelectProps;                     // default: { }
  withSessionToken?: boolean; // default: false
}

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

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface GeocodeObjectInfo {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: object;
  place_id: string;
  types: string[];
}

export interface SelectProps /*extends GenericFieldInterface*/ {
  name: string;
  label: string;
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
  formatCreateLabel?: (value: string) => React.ReactNode;
}

export type OptionActionType = "add" | "reset" | "set";

export interface OptionAction {
  type: OptionActionType;
  payload: Option[];
}
