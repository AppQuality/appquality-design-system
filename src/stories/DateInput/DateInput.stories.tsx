import { DateInput } from ".";
import { Story, Meta } from "@storybook/react";
import { DatepickerGlobalStyle } from "./_style";
import { useState } from "react";
import { ErrorMessage } from "formik";
import { ErrorMessageWrapper } from "../form/Form";

export default {
  title: "Inputs/DateInput",
  component: DateInput,
} as Meta;

const DatepickerTemplate: Story = (args) => {
  function getEighteenYearsAgo(): string {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 based, so +1 and pad with 0
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  return (
    <>
      <DatepickerGlobalStyle />
      <label htmlFor="test1">
        Birthdate - min 18 years old (example events in console log)
      </label>
      <DateInput
        {...args}
        isInvalid={isInvalid}
        id="test1"
        value={value}
        max={getEighteenYearsAgo()}
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
