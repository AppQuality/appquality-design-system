import styled, { DefaultTheme } from "styled-components";

export interface TypographyProps {
  theme: DefaultTheme;
  color?: keyof DefaultTheme["palette"];
}

export interface TitleProps extends TypographyProps {
  size: "xs" | "s" | "ms" | "mt" | "m" | "l" | "xl";
}
export interface TextProps extends TypographyProps {
  small?: boolean;
}

const generateResponsiveRule = (
  type: string,
  size: { desktop: string; mobile: string | boolean },
  breakpoint: string
) => {
  let rule = `${type}: ${size.desktop};`;
  if (size.mobile) {
    rule += `@media (max-width: ${breakpoint}) {
      font-size: ${size.mobile};
    }`;
  }

  return rule;
};

export const Title = styled.div(({ theme, size, color }: TitleProps) => {
  const { palette, typography, grid } = theme;

  const titleSizes = {
    xs: { desktop: "14px", mobile: "16px" },
    s: { desktop: "16px", mobile: false },
    ms: { desktop: "20px", mobile: false },
    mt: { desktop: "24px", mobile: false },
    m: { desktop: "28px", mobile: false },
    l: { desktop: "32px", mobile: false },
    xl: { desktop: "40px", mobile: false },
  };
  const titleWeight = {
    xs: {
      desktop: typography.fontWeight.medium.toString(),
      mobile: typography.fontWeight.bold.toString(),
    },
    s: { desktop: typography.fontWeight.bold.toString(), mobile: false },
    ms: { desktop: typography.fontWeight.bold.toString(), mobile: false },
    mt: { desktop: typography.fontWeight.normal.toString(), mobile: false },
    m: { desktop: typography.fontWeight.medium.toString(), mobile: false },
    l: { desktop: typography.fontWeight.medium.toString(), mobile: false },
    xl: { desktop: typography.fontWeight.medium.toString(), mobile: false },
  };
  let fontSize = "font-size: 16px;";
  let fontWeight = "font-weight: 500;";

  if (Object.keys(titleSizes).includes(size)) {
    fontSize = generateResponsiveRule(
      "font-size",
      titleSizes[size],
      grid.breakpoints.lg
    );
  }
  if (Object.keys(titleWeight).includes(size)) {
    fontWeight = generateResponsiveRule(
      "font-weight",
      titleWeight[size],
      grid.breakpoints.lg
    );
  }

  return `
  color: ${color ? palette[color] : palette.primary};
  font-family: ${typography.fontFamily.base};
  line-height: 1.5;
  ${fontSize}
  ${fontWeight}
`;
});

export const Text = styled.div(({ theme, small, color }: TextProps) => {
  const { palette, typography } = theme;
  return `
  color: ${color ? palette[color] : palette.primaryVariant};
  font-family: ${typography.fontFamily.base};
  font-weight: ${
    small ? typography.fontWeight.normal : typography.fontWeight.light
  };
  ${small ? `line-height: 1.2` : `line-height: 1.5`};
  ${small ? `font-size: .875rem` : `font-size: 1rem`};
`;
});
