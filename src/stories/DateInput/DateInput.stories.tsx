import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { DateInput } from ".";
import { ErrorMessageWrapper } from "../form/Form";

export default {
  title: "Inputs/DateInput",
  component: DateInput,
} as Meta;

const DatepickerTemplate: StoryFn = (args) => {
  function getEighteenYearsAgo() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date;
  }
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  return (
    <>
      <label htmlFor="test1">
        Birthdate - min 18 years old (example events in console log)
      </label>
      <DateInput
        {...args}
        isInvalid={isInvalid}
        id="test1"
        value={value}
        maxDate={getEighteenYearsAgo()}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          setIsInvalid(!value);
        }}
      />
      {isInvalid && (
        <ErrorMessageWrapper>birth date is mandatory</ErrorMessageWrapper>
      )}
      value: {value}
    </>
  );
};
export const DatepickerInput = DatepickerTemplate.bind({});
DatepickerInput.args = {
  onChange: ({ value }: { value: Date }) => {
    console.log(value);
  },
};
