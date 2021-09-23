import styled, { DefaultTheme } from "styled-components";
import {
  ProgressBarLineProps,
  ProgressBarProps,
  ProgressBarType,
} from "./_types";

const getBackgroundByType = (theme: DefaultTheme, type: ProgressBarType) => {
  let bkg = "";
  switch (type) {
    case ProgressBarType.INFO:
      bkg = theme.palette.info;
      break;
    case ProgressBarType.SUCCESS:
      bkg = theme.palette.success;
      break;
    case ProgressBarType.WARNING:
      bkg = theme.palette.warning;
      break;
    case ProgressBarType.DANGER:
      bkg = theme.palette.danger;
      break;
    case ProgressBarType.DISABLED:
      bkg = theme.colors.gray900;
      break;
  }
  return bkg;
};

const getNormalizedValue = (value: number) => {
  // Check nullity and falsy values
  if (value) {
    // Upper bound and lower bound adjustement
    if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }
  }
  // Set to default
  else {
    value = 100;
  }
  return value;
};

const isBlank = (str: string): boolean => {
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
    <ProgressBarContainer className={`${className} aq-progress-bar`} {...rest}>
      <ProgressBarLine
        disabled={disabled}
        type={current_type}
        value={getNormalizedValue(value)}
      >
        <ProgressBarText>
          {isBlank(label) ? `${getNormalizedValue(value)} %` : label}
        </ProgressBarText>
      </ProgressBarLine>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div<{ theme: DefaultTheme }>`
  border-radius: ${(props) => props.theme.general.borderRadius};
`;

const ProgressBarLine = styled.div<ProgressBarLineProps>`
  // Changes according to the provided value
  width: ${(props) => props.value + "%"};
  // Switch according to type (cast because it's always initialised)
  background: ${(props) =>
    getBackgroundByType(props.theme, props.type as ProgressBarType)};
  // Text & stuff
  color: ${(props) => (props.disabled ? props.theme.colors.gray900 : "white")};
  text-align: center;
  // Adapt to current theme
  font-family: ${(props) => props.theme.typography.fontFamily.base};
  font-size: ${(props) => props.theme.typography.fontSize.h5};
  border-radius: ${(props) => props.theme.general.borderRadius};
  // For text overflow
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  // Add space to text (so it's not a sandwich-like)
  padding: 0 4px;
`;

const ProgressBarText = styled.span``;
