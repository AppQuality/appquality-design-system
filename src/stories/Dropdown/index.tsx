import { DropdownOptions, Option } from "./Option";

export interface DropdownProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: DropdownOptions[];
}

export const SelectNew = ({ options, ...props }: DropdownProps) => {
  return (
    <>
      <select {...props}></select>
      {options.map((option) => (
        <Option key={option.value} {...option} />
      ))}
    </>
  );
};
