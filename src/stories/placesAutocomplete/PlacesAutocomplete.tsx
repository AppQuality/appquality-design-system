import React, { ChangeEvent } from "react";
import { ActionMeta } from "react-select";
import { aqTheme, customComponents, customStyle } from "../select/_styles";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { PlacesAutocompleteProps } from "./types";

export const PlacesAutocomplete = ({
  placesProps,
  onChange,
  onBlur,
}: PlacesAutocompleteProps) => {
  const handleChange = (value: any, actionMeta: ActionMeta<any>) => {
    if (onChange) {
      onChange(geocodeByPlaceId(value?.value?.place_id));
    }
  };

  const handleBlur = (e: ChangeEvent) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <>
      <GooglePlacesAutocomplete
        {...placesProps}
        selectProps={{
          ...placesProps.selectProps,
          ...customComponents,
          styles: customStyle,
          theme: aqTheme,
          onChange: handleChange,
          onBlur: handleBlur,
        }}
      />
    </>
  );
};
