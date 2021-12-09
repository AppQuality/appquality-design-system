import { ButtonProps } from "./_types";

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = ({
  as = "button",
  htmlType = "button",
  type,
  size,
  className,
  disabled = false,
  flat,
  squared,
  variant,
  children,
  ...props
}: ButtonProps) => {
  let Component = as;
  return (
    <Component
      disabled={disabled}
      type={htmlType}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
