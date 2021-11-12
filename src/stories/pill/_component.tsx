import { PillProps } from "./_types";
import { Text } from "../typography/Typography";

export const BasicPill = ({
  className,
  children,
  type,
  flat = false,
  style,
}: PillProps) => {
  return (
    <Text as="span" small className={className} style={style}>
      {children}
    </Text>
  );
};
