import { useEffect, useState } from "react";
import InputMask, { InputState } from "react-input-mask";
import { StyledInput } from "../input/Input";
import { DatepickerProps } from "./_types";

function parseTime(time: string): Date {
  const [hoursStr, minutesStr] = time.split(":");
  const hours = parseInt(hoursStr);
  const minutes = parseInt(minutesStr);

  const currentDate = new Date();
  currentDate.setHours(hours);
  currentDate.setMinutes(minutes);
  currentDate.setSeconds(0);
  currentDate.setMilliseconds(0);

  return currentDate;
}
function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
const TimePicker = ({
  value,
  placeholder,
  onChange,
  disabled,
}: {
  placeholder: DatepickerProps["placeholder"];
  value: DatepickerProps["value"];
  onChange: DatepickerProps["onChange"];
  disabled?: DatepickerProps["disabled"];
}) => {
  const [time, setTime] = useState(
    value ? (typeof value === "string" ? value : formatTime(value)) : "",
  );

  useEffect(() => {
    setTime(
      value ? (typeof value === "string" ? value : formatTime(value)) : "",
    );
  }, [value]);
  return (
    <StyledInput type="text">
      <InputMask
        mask="19:59"
        //@ts-ignore
        formatChars={{
          5: "[0-5]",
          9: "[0-9]",
          1: "[0-2]",
        }}
        beforeMaskedValueChange={(state: InputState) => {
          const { value } = state;
          const [hours, minutes] = value.split(":");
          const validHours = Math.min(Number(hours), 23)
            .toString()
            .padStart(2, "0");
          const validMinutes = Math.min(Number(minutes), 59)
            .toString()
            .padStart(2, "0");
          return {
            ...state,
            value: `${validHours}:${validMinutes}`,
          };
        }}
        maskChar="0"
        value={time}
        disabled={disabled}
        onChange={(event) => {
          if (onChange) {
            onChange({
              value: parseTime(event.target.value),
              valueText: event.target.value,
            });
          }
          setTime(event.target.value);
        }}
        placeholder="HH:mm"
      />
    </StyledInput>
  );
};

export { TimePicker };
