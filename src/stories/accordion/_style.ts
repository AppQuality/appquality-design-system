import styled from "styled-components";
import { StyledItemHeadProps, StyledItemBodyProps } from "./_types";

export const StyledAccordion = styled.div`
  border: 1px solid ${(props) => props.theme.colors.disabled};
  border-radius: ${(props) => props.theme.general.borderRadius};

  .accordion-item:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.disabled};
  }
  .accordion-body-enter {
    max-height: var(--accordion-element-height);
  }
  .accordion-body-exit {
    max-height: var(--accordion-element-height);
    transition-delay: 100ms;
  }
  .accordion-body-exit-active {
    max-height: 0px;
  }
`;

export const StyledItemHead = styled.div(
  ({ theme, active, disabled }: StyledItemHeadProps) => {
    return `
      ${!disabled ? `cursor: pointer;` : ""}
      color: ${
        active
          ? theme.palette.success
          : disabled
          ? theme.colors.disabledDark
          : theme.palette.primary
      };
      font-size: ${theme.typography.fontSize.base};
      font-weight: ${theme.typography.fontWeight.normal};
      padding: ${theme.grid.spacing.default};
      display: grid;
      grid-template-columns: 1fr 21px;
      
      .accordion-head-icon {
        width: 24px;
        height: 24px;
        color: ${theme.palette.primary};
        transition: transform 200ms;
        transform: rotate(0deg);
        ${active && ` transform: rotate(180deg);`}
        
        @media (min-width: ${theme.grid.breakpoints.lg}) {
          width: 21px;
          height: 21px;
        }
      }
      &:hover {
        ${!disabled ? ` background: ${theme.colors.gray200};` : ""}
      }
    `;
  }
);

export const StyledItemBody = styled.div(
  ({ theme, height, active }: StyledItemBodyProps) => `
    --accordion-element-height: ${height}px;
    background-color: #fff;
    overflow: hidden;
    max-height: ${active ? "auto" : "0px"};
    transition: max-height 300ms;
    
    .item-body-container {
      padding: ${theme.grid.spacing.default};
    }
`
);
