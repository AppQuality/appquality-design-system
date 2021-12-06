import { ButtonProps } from "./_types";

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = ({
  htmlType = "button",
  type = "primary",
  size = "medium",
  className,
  disabled,
  flat = false,
  squared = false,
  variant = false,
  children,
  ...props
}: ButtonProps) => {
  let classes = [`aq-btn-${size}`, `aq-btn-${type}`, className];
  if (flat) {
    classes.push("aq-btn-flat");
  }
  if (squared) {
    classes.push("aq-btn-squared");
  }
  let disabled_attr = false;
  if (disabled) {
    disabled_attr = true;
    classes.push("disabled");
  }
  return (
    <button
      disabled={disabled_attr}
      type={htmlType}
      className={`${classes.join(" ")}`}
      {...props}
    >
      {children}
    </button>
  );
};
