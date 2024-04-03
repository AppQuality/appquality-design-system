import { useState } from "react";
import InputMask from "react-input-mask";
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
}: {
  placeholder: DatepickerProps["placeholder"];
  value: DatepickerProps["value"];
  onChange: DatepickerProps["onChange"];
}) => {
  const [time, setTime] = useState(
    value ? (typeof value === "string" ? value : formatTime(value)) : "",
  );
  return (
    <StyledInput type="text">
      <InputMask
        mask="99:99"
        maskChar="0"
        value={time}
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
