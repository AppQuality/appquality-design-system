import { Text } from "../typography/Typography";
import { PillProps } from "./_types";

export const BasicPill = ({
  className,
  children,
  type,
  flat = false,
  style,
  title,
}: PillProps) => {
  return (
    <Text title={title} as="span" small className={className} style={style}>
      {children}
    </Text>
  );
};
