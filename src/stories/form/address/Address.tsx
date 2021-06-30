import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import Input from "../input/Input";
import { useState } from "react";
import styled from "styled-components";
import { MapsDetails, AddressType } from "./_types";

const SuggestionBox = styled.div`
  border: 1px solid ${(props) => props.theme.colors.disabled};
  border-radius: ${(props) => props.theme.general.borderRadius};

  > div:hover {
    background: ${(props) => props.theme.colors.gray100};
  }
`;

const Address = ({
  id,
  onChange,
  placeholder,
  initialValue,
  disabled = false,
  isInvalid = false,
}: AddressType) => {
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
  const [mapsData, setMapsData] = useState<string | undefined>(initialValue);
  const [stringValue, setStringValue] = useState<string>(
    value ? value : initialValue ? initialValue : ""
  );
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
    setMapsData(undefined);
    setValue(value);
    setStringValue(value);
  };

  const handleSelect = ({
    description,
    place_id,
  }: {
    description: string;
    place_id: string;
  }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    setStringValue(description);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getDetails({ placeId: place_id })
      .then((data: { address_components?: Array<MapsDetails> } | string) => {
        const objectData: { [key: string]: string } = {};
        if (typeof data !== "string" && data.address_components) {
          data.address_components.forEach(
            ({ long_name, types }: MapsDetails) => {
              objectData[types.join("_")] = long_name;
            }
          );
        }
        onChange(objectData);
        setMapsData(description);
      })
      .catch((error) => {
        throw new Error(error);
      });
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
        isInvalid={isInvalid}
        disabled={!ready || disabled}
        placeholder={placeholder}
        autocomplete={false}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <SuggestionBox>{renderSuggestions()}</SuggestionBox>}
    </div>
  );
};

export default Address;
