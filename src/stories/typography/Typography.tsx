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

export const Title = styled.div(({ theme, size, color }: TitleProps) => {
  const { palette, typography } = theme;
  return `
  color: ${color || palette.primary};
  font-family: ${typography.fontFamily.base};
  font-weight: ${typography.fontWeight.bold};
  line-height: 1.5;
  ${size === "s" && `font-size: 16px`}
`;
});

export const Text = styled.div(({ theme, small, color }: TextProps) => {
  const { palette, typography } = theme;
  return `
  color: ${color || palette.primary};
  font-family: ${typography.fontFamily.base};
  font-weight: ${typography.fontWeight.normal};
  line-height: 1.5;
  ${small ? `font-size: .835rem` : `font-size: 1rem`}
  strong {
    font-weight: ${typography.fontWeight.bold};
  }
`;
});

