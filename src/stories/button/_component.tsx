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
  title,
  children,
  ...props
}: ButtonProps) => {
  let Component = as;
  return (
    <Component
      title={title}
      disabled={disabled}
      type={htmlType}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
