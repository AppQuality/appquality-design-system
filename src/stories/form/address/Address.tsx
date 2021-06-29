import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import Input from "../input/Input";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SuggestionBox = styled.div`
  border: 1px solid ${(props) => props.theme.colors.disabled};
  border-radius: ${(props) => props.theme.general.borderRadius};

  > div:hover {
    background: ${(props) => props.theme.colors.gray100};
  }
`;

const Address = ({ id, onChange }: { id: string; onChange: any }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const [mapsData, setMapsData] = useState<string | null>(null);
  const [stringValue, setStringValue] = useState<string>(value);
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    if (data.length) {
      handleSelect(data[0])();
    } else if (mapsData == null) {
      setStringValue("");
    }
    clearSuggestions();
  });

  const handleInput = (value: string) => {
    // Update the keyword of the input element
    setMapsData(null);
    setValue(value);
    setStringValue(value);
  };

  const handleSelect = ({ description }: { description: string }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    setStringValue(description);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setMapsData(description);
      })
      .catch((error) => {});
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div
          key={place_id}
          className="aq-p-2"
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </div>
      );
    });

  return (
    <div ref={ref}>
      <Input
        id={id}
        type="text"
        value={stringValue}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <SuggestionBox>{renderSuggestions()}</SuggestionBox>}
    </div>
  );
};

export default Address;
