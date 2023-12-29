import { ButtonProps } from "./_types";

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = ({
  as = "button",
  type = "button",
  kind,
  size,
  flat,
  squared,
  variant,
  ...props
}: ButtonProps) => {
  let Component = as;
  return <Component {...props} />;
};
