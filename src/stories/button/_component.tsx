import { ButtonProps } from "./_types";

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = ({
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
  return (
    <button
      disabled={disabled}
      type={htmlType}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};
