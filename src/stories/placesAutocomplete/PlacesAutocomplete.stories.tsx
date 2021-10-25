import { Story, Meta } from "@storybook/react";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { PlacesAutocompleteProps } from "./types";

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
  onChange: async (getGeoCode) => {
    try {
      const places = await getGeoCode;
      console.log(places[0]);
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
