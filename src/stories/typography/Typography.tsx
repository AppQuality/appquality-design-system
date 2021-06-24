import styled, { DefaultTheme } from "styled-components";

export interface TypographyProps {
  theme: DefaultTheme;
  color?: keyof DefaultTheme["palette"];
}

export interface ParagraphProps extends TypographyProps {
  small?: boolean;
}
export interface H5Props extends TypographyProps {}
export interface TitleProps extends TypographyProps {
  size: "xs" | "s" | "ms" | "m" | "l" | "xl";
}
export interface TextProps extends TypographyProps {
  small?: boolean;
}
/**
 * Primary UI component for paragraphs
 */
export const Paragraph = styled.p(({ theme, small }: ParagraphProps) => {
  const { palette, typography } = theme;
  return `
  color: ${palette.primary};
  font-family: ${typography.fontFamily.base};
  font-size: ${small ? typography.fontSize.small : typography.fontSize.base};
  font-weight: ${
    small ? typography.fontWeight.normal : typography.fontWeight.light
  };
  line-height: ${small ? 1.2 : 1.5};
`;
});

/**
 * Primary UI component for h5
 */
export const SmallTitle = styled.div(({ theme }: H5Props) => {
  const { palette, typography } = theme;
  return `
  color: ${palette.primary};
  font-family: ${typography.fontFamily.base};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.bold};
  line-height: 1.5;
`;
});

const titleSizes = {
  xs: { desktop: "14px", mobile: "16px" },
  s: { desktop: "16px", mobile: false },
  ms: { desktop: "24px", mobile: false },
  m: { desktop: "28px", mobile: false },
  l: { desktop: "32px", mobile: false },
  xl: { desktop: "40px", mobile: false },
};
export const Title = styled.div(({ theme, size, color }: TitleProps) => {
  const { palette, typography, grid } = theme;

  let fontSize = "font-size: 16px;";

  if (Object.keys(titleSizes).includes(size)) {
    fontSize = `font-size: ${titleSizes[size].desktop};`;
    if (titleSizes[size].mobile) {
      fontSize += `@media (max-width: ${grid.breakpoints.lg}) {
        font-size: ${titleSizes[size].mobile};
      }`;
    }
  }

  return `
  color: ${color || palette.primary};
  font-family: ${typography.fontFamily.base};
  font-weight: ${typography.fontWeight.bold};
  line-height: 1.5;
  ${fontSize}
`;
});

export const Text = styled.div(({ theme, small, color }: TextProps) => {
  const { palette, typography } = theme;
  return `
  color: ${color || palette.primary};
  font-family: ${typography.fontFamily.base};
  font-size: 1rem;
  font-weight: ${typography.fontWeight.light};
  line-height: 1.5;
  ${small ? `font-size: .835rem` : `font-size: 1rem`}
  strong, b {
    font-weight: ${typography.fontWeight.medium};
  }
  em, i {
    font-style: italic;
  }
`;
});
