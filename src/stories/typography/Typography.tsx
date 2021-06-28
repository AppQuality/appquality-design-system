import styled, { DefaultTheme } from "styled-components";

export interface TypographyProps {
  theme: DefaultTheme;
  color?: keyof DefaultTheme["palette"];
}

export interface TitleProps extends TypographyProps {
  size: "xs" | "s" | "ms" | "m" | "l" | "xl";
}
export interface TextProps extends TypographyProps {
  small?: boolean;
}

export const Title = styled.div(({ theme, size, color }: TitleProps) => {
  const { palette, typography, grid } = theme;

  const titleSizes = {
    xs: { desktop: "14px", mobile: "16px" },
    s: { desktop: "16px", mobile: false },
    ms: { desktop: "24px", mobile: false },
    m: { desktop: "28px", mobile: false },
    l: { desktop: "32px", mobile: false },
    xl: { desktop: "40px", mobile: false },
  };
  const titleWeight = {
    xs: {
      desktop: typography.fontWeight.medium,
      mobile: typography.fontWeight.bold,
    },
    s: { desktop: typography.fontWeight.bold, mobile: false },
    ms: { desktop: typography.fontWeight.normal, mobile: false },
    m: { desktop: typography.fontWeight.medium, mobile: false },
    l: { desktop: typography.fontWeight.medium, mobile: false },
    xl: { desktop: typography.fontWeight.medium, mobile: false },
  };
  let fontSize = "font-size: 16px;";
  let fontWeight = "font-weight: 500;";

  if (Object.keys(titleSizes).includes(size)) {
    fontSize = `font-size: ${titleSizes[size].desktop};`;
    if (titleSizes[size].mobile) {
      fontSize += `@media (max-width: ${grid.breakpoints.lg}) {
        font-size: ${titleSizes[size].mobile};
      }`;
    }
  }
  if (Object.keys(titleWeight).includes(size)) {
    fontWeight = `font-weight: ${titleWeight[size].desktop};`;
    if (titleWeight[size].mobile) {
      fontWeight += `@media (max-width: ${grid.breakpoints.lg}) {
        font-weight: ${titleWeight[size].mobile};
      }`;
    }
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
  color: ${color || palette.primary};
  font-family: ${typography.fontFamily.base};
  font-weight: ${
    small ? typography.fontWeight.normal : typography.fontWeight.light
  };
  ${small ? `line-height: 1.2` : `line-height: 1.5`};
  ${small ? `font-size: .875rem` : `font-size: 1rem`};
`;
});
