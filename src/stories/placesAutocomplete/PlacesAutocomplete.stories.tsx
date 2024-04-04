import { Meta, StoryFn } from "@storybook/react";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { PlacesAutocompleteProps } from "./_types";

export default {
  title: "PlacesAutocomplete",
  component: PlacesAutocomplete,
} as Meta;

const Template: StoryFn<PlacesAutocompleteProps> = (args) => {
  return <PlacesAutocomplete {...args} />;
};

export const PlacesAutocompleteBase = Template.bind({});
PlacesAutocompleteBase.args = {
  placesProps: {
    apiKey: "AIzaSyDJqenKVp22KCz9StLq31acTkWq-7eDD_w",
    selectProps: {
      isClearable: true,
    },
  },
  onChange: async (places) => {
    try {
      console.log(places);
    } catch (e) {
      alert(e);
    }
  },
};

const testAddress = "Via Cenischia 51, Topolinia, IT";
export const PlacesAutocompleteWithValue = Template.bind({});
PlacesAutocompleteWithValue.args = {
  placesProps: {
    apiKey: "AIzaSyDJqenKVp22KCz9StLq31acTkWq-7eDD_w",
    selectProps: {
      value: {
        value: testAddress,
        label: testAddress,
      },
    },
  },
};
