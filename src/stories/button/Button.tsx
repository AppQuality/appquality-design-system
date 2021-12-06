import styled, { DefaultTheme } from "styled-components";
import { ButtonComponent } from "./_component";
import { ButtonProps } from "./_types";

interface ButtonStyleProps {
  theme: DefaultTheme;
  type: ButtonProps["htmlType"];
}
export const Button = styled(ButtonComponent)(({ theme, variant }) => {
  const palette = variant ? theme.variants : theme.palette;
  const styles = Object.entries(palette)
    .map(
      ([key, value]) => `
		 &.aq-btn-${key} {
			 border: 1px solid ${value};
			 background-color: ${value};
			 color: ${theme.colors.white};
     
       &:active {
        filter: saturate(0.7);
       }
       @media (hover: hover) and (pointer: fine) {
         &:hover {
          filter: saturate(0.7);
         }
       }
			 &.aq-btn-flat {
				 background-color: ${theme.colors.white};
				 color: ${value};
         
         &:active {
           filter: none;
           border: 1px solid ${value};
           background-color: ${value};
           color: ${theme.colors.white};
         }
         @media (hover: hover) and (pointer: fine) {
           &:hover {
            filter: none;
       			border: 1px solid ${value};
       			background-color: ${value};
       			color: ${theme.colors.white};
           }
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
      color: ${theme.palette.secondary};
      text-decoration: underline;
      
      &:disabled, &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        color: ${theme.colors.disabledDark};
        background-color: transparent;
        border-color: transparent;
        opacity: 1;
      }
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
      color: ${theme.colors.white};
      background-color: ${theme.colors.elementGeneric};
      border-color: ${theme.colors.elementGeneric};
      
      &.aq-btn-flat {
        background-color: transparent;
        border-color: ${theme.colors.elementGeneric};
        color: ${theme.colors.disabledFont};
      }
    }
	`;
});

export const ButtonGroup = styled.div`
  & > ${Button}:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > ${Button}:nth-child(n+3),
  & > :not(.btn-check) + ${Button} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > ${Button}:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
  }
  & > ${Button}:not(:first-child) {
    margin-left: -1px;
  }
`;
