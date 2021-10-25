import { NamedProps } from "react-select/src/Select";
import React from "react";

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

interface PlacesOptionType {
  [key: string]: any;
}
interface GooglePlacesAutocompleteProps {
  apiKey: string; // default: ''
  apiOptions?: ApiOptions; // default: { }
  autocompletionRequest?: AutocompletionRequest; // default: { }
  debounce?: number; // default: 300
  minLengthAutocomplete?: number; // default: 0
  onLoadFailed?: (error: Error) => void; // default: console.error
  selectProps?: NamedProps<PlacesOptionType, false>; // default: { }
  withSessionToken?: boolean; // default: false
}

export interface PlacesAutocompleteProps {
  placesProps: GooglePlacesAutocompleteProps;
  onChange?: (places: google.maps.GeocoderResult[]) => void;
  onBlur?: (e: React.ChangeEvent) => void;
}
