import { Story, Meta } from "@storybook/react";
import { PlacesAutocompleteProps } from "./types";
import { PlacesAutocomplete } from "./PlacesAutocomplete";

export default {
  title: "PlacesAutocomplete",
  component: PlacesAutocomplete,
} as Meta;

const Template: Story<PlacesAutocompleteProps> = (args) => {
  return <PlacesAutocomplete {...args} />;
};

export const PlacesAutocompleteBase = Template.bind({});
PlacesAutocompleteBase.args = {
  placesProps: { apiKey: "AIzaSyDJqenKVp22KCz9StLq31acTkWq-7eDD_w" },
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
