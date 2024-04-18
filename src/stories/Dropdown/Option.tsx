export interface DropdownOptions
  extends React.HTMLAttributes<HTMLOptionElement> {
  value: string;
  label: string;
  [key: string]: any;
}

export const Option = ({ value, label, ...props }: DropdownOptions) => {
  return (
    <option value={value} {...props}>
      {label}
    </option>
  );
};
