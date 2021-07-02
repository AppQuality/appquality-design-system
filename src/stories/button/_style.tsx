import styled, { DefaultTheme } from "styled-components";
import { ButtonProps } from "./_types";

interface ButtonStyleProps {
  theme: DefaultTheme;
  type: ButtonProps["htmlType"];
}
export const ButtonStyle = styled.button(({ theme }: ButtonStyleProps) => {
  const styles = Object.entries(theme.palette)
    .map(
      ([key, value]) => `
		 &.aq-btn-${key} {
			 border: 1px solid ${value};
			 background-color: ${value};
			 color: ${theme.colors.white};
       &:hover {
        filter: saturate(0.7);
       }
			 &.aq-btn-flat {
				 background-color: ${theme.colors.white};
				 color: ${value};
         
         &:hover {
          filter: none;
     			border: 1px solid ${value};
     			background-color: ${value};
     			color: ${theme.colors.white};
         }
			 }
		 }
 	 `
    )
    .join(" ");

  const sizes = {
    sm: {
      padding: "6px 8px",
      fontSize: theme.typography.fontSize.small,
      squaredMinWidth: "32px",
    },
    lg: {
      padding: "13px 16px",
      fontSize: theme.typography.fontSize.base,
      squaredMinWidth: "49px",
    },
  };

  const sizesStyle = Object.entries(sizes)
    .map(
      ([key, data]) => `
    &.aq-btn-${key} {
      padding: ${data.padding};
      font-size: ${data.fontSize};
      &.aq-btn-squared {
        min-width: ${data.squaredMinWidth}
      }
    }
  `
    )
    .join(" ");

  return `
    cursor: pointer;
    padding: 8px 12px;
    font-size: ${theme.typography.fontSize.base};
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
		
    background-color: transparent;
    border-width: 1px;
    
    display: inline-block;
    font-family:${theme.typography.fontFamily.base};
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: 1.5;
    transition: filter 50ms ease-in-out 0s, background-color  50ms ease-in-out 0s;
    color: ${theme.palette.primary};
    
    svg {
      vertical-align: middle;
      margin-top: -15%;
    }
    &.aq-btn-squared {
      min-width: 39px
    }
    
		${styles}
    
    &.aq-btn-link {
      box-shadow: none;
      border-color: transparent;
      background-color: transparent;
      color: ${theme.palette.info};
      text-decoration: underline;
    }
    &.aq-btn-light {
      border-color: transparent;
      background-color: ${theme.colors.white};
    }
    
    ${sizesStyle}
    &.aq-btn-block {
      width:100%;
    }
    
    &:disabled, &.disabled {
      cursor: not-allowed;
      pointer-events: none;
      opacity: .65;
      color: ${theme.colors.disabledDark};
      background-color: ${theme.colors.disabled};
      border-color: ${theme.colors.disabled};
      
      &.aq-btn-flat {
        background-color: transparent;
        border-color: ${theme.colors.disabled};
        color: ${theme.colors.disabledDark};
      }
    }
	`;
});
