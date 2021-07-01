import { BaseProps } from "../../../shared/_types";

export interface MapsDetails {
  long_name: string;
  short_name: string;
  types: Array<string>;
}
export interface AddressType extends BaseProps {
  id: string;
  initialValue?: string;
  placeholder: string;
  disabled?: boolean;
  isInvalid?: boolean;
  onChange: (data: { [key: string]: string }) => void;
}
