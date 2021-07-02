import { PillProps } from "./_types";
import { Text } from "../typography/Typography";

export const BasicPill = ({
  className,
  children,
  type,
  flat = false,
}: PillProps) => {
  return (
    <Text as="span" small className={className}>
      {children}
    </Text>
  );
};
