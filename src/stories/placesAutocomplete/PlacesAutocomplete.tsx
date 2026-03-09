import { ChangeEvent } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { ActionMeta } from "react-select5";
import { aqTheme, customComponents, customStyle } from "../select/_styles";
import { PlacesAutocompleteProps } from "./_types";

export const PlacesAutocomplete = ({
  placesProps,
  onChange,
  onBlur,
}: PlacesAutocompleteProps) => {
  const handleChange = async (value: any, actionMeta: ActionMeta<any>) => {
    if (onChange) {
      let places;
      if (value) {
        places = await geocodeByPlaceId(value.value?.place_id);
      }
      onChange(places);
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
