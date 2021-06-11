import { GetOptionsAsync, GetOptionsAsyncResponse } from "./_types";

export const basicOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const groupedOptions = [
  {
    label: "Colors",
    options: [
      { value: "ocean", label: "Ocean" },
      { value: "blue", label: "Blue", isDisabled: true },
      { value: "purple", label: "Purple" },
      { value: "red", label: "Red", isFixed: true },
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Yellow" },
      { value: "green", label: "Green" },
      { value: "forest", label: "Forest" },
      { value: "slate", label: "Slate" },
      { value: "silver", label: "Silver" },
    ],
  },
  {
    label: "Flavours",
    options: [
      { value: "vanilla", label: "Vanilla", rating: "safe" },
      { value: "chocolate", label: "Chocolate", rating: "good" },
      { value: "strawberry", label: "Strawberry", rating: "wild" },
      { value: "salted-caramel", label: "Salted Caramel", rating: "safe" },
    ],
  },
];

const asyncOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" },
  { value: "strawberry", label: "Strawberry", rating: "wild" },
  { value: "salted-caramel", label: "Salted Caramel", rating: "safe" },
  { value: "indian-red", label: "Indian Red" },
  { value: "crimson", label: "Crimson" },
  { value: "lightpink", label: "Light Pink" },
  { value: "palevioletred", label: "Pale Violet Red" },
  { value: "lavenderblush", label: "Lavender Blush" },
  { value: "violetred", label: "Violet Red" },
  { value: "maroon", label: "Maroon" },
  { value: "orchid", label: "Orchid" },
  { value: "plum", label: "Plum" },
  {
    value:
      "my-superawesome-magic-color-with-lot-of-text-in-the-label-that-should-not-overflow-never-and-ever-and-ever",
    label:
      "My superawesome magic color with lot of text in the label that should not overflow never and ever and evèr, 'mate",
  },
];

export const getAsyncOptions: GetOptionsAsync = (start, search) => {
  const limit = 10;
  const total = asyncOptions.length;
  return new Promise<GetOptionsAsyncResponse>((resolve) => {
    setTimeout(() => {
      if (search) {
        const filteredRes = asyncOptions.filter((opt) => {
          return (
            opt.value.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
            opt.label.toLowerCase().indexOf(search.toLowerCase()) >= 0
          );
        });
        return resolve({ results: filteredRes, more: false });
      } else {
        const res = asyncOptions.slice(start * limit, limit * (start + 1));
        return resolve({
          results: res,
          more: start < Math.floor(total / limit),
        });
      }
    }, 1500);
  });
};
