import styled, { DefaultTheme } from "styled-components";
import {
  ProgressBarProps,
  ProgressBarLineProps,
  ProgressBarType,
} from "./_types";

const getBackgroundByType = (theme: DefaultTheme, type: ProgressBarType) => {
  switch (type) {
    case ProgressBarType.INFO:
      return theme.palette.info;
    case ProgressBarType.SUCCESS:
      return theme.palette.success;
    case ProgressBarType.WARNING:
      return theme.palette.warning;
    case ProgressBarType.DANGER:
      return theme.palette.danger;
    case ProgressBarType.DISABLED:
      return theme.colors.gray100;
  }
};

const isBlank = (str?: string): boolean => {
  return !str || str.length === 0 || /^\s*$/.test(str);
};

export const ProgressBar = (props: ProgressBarProps) => {
  const {
    className = "",
    label = "",
    value = 100,
    disabled = false,
    type = ProgressBarType.INFO,
    ...rest
  } = props;
  // Ignore themes when disabled
  const current_type = disabled ? ProgressBarType.DISABLED : type;
  return (
    <ProgressBarLine
      disabled={disabled}
      type={current_type}
      label={label}
      value={value > 100 || value === null ? 100 : value < 0 ? 0 : value}
      {...rest}
    />
  );
};

const ProgressBarLine = styled.div<ProgressBarLineProps>`
  // Changes according to the provided value
  &:after {
    content: "${(props) =>
      isBlank(props.label) ? `${props.value} %` : props.label}";
    background: ${(props) =>
      getBackgroundByType(props.theme, props.type as ProgressBarType)};
    width: ${(props) => props.value + "%"};
    display: block;
  }
  // Switch according to type (cast because it's always initialised)
  background: ${(props) => props.theme.colors.gray100};
  // Text & stuff
  color: ${(props) => (props.disabled ? props.theme.colors.gray900 : "white")};
  text-align: center;
  // Adapt to current theme
  border-radius: ${(props) => props.theme.general.borderRadius};
  // For text overflow
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
