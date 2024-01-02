import { ButtonProps } from "./_types";

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = ({
  as = "button",
  type = "button",
  ...props
}: ButtonProps) => {
  let Component = as;
  return <Component type={type} {...props} />;
};
