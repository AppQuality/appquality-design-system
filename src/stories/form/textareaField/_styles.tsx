import styled, { css } from "styled-components";

const InvalidTextareaStyle = css`
  border-color: ${(p) => p.theme.palette.danger};
`;

const InvalidTextareaFocusStyle = css`
  border-color: ${(p) => p.theme.palette.danger};
  box-shadow: 0 0 0 0.25rem ${(p) => p.theme.colors.red100};
`;

export const StyledTextareaField = styled.div<{
  resize?: string;
  isInvalid?: boolean;
  height?: string;
  autoResize?: boolean;
}>`
  textarea {
    width: 100%;
    min-height: ${(p) => (p.height ? p.height : "5.715rem")};
    height: ${(p) => (p.height ? p.height : "5.715rem")};
    resize: ${(p) => (p.resize ? p.resize : "none")};
    padding: 0.5rem 0.75rem;
    color: ${(p) => p.theme.palette.primary};
    font-family: inherit;
    font-size: ${(p) => p.theme.typography.fontSize.base};
    background-color: ${(p) => p.theme.colors.white};
    background-clip: padding-box;
    border: 1px solid ${(p) => p.theme.colors.elementGeneric};
    border-radius: 5px;
    line-height: 1.5;
    box-shadow: none;
    ${(props) => (props.isInvalid ? InvalidTextareaStyle : "")}
    ${(p) => (p.autoResize ? "overflow: hidden;" : "")}

    &:focus,
    &:focus-visible {
      color: ${(p) => p.theme.palette.primary};
      background-color: ${(p) => p.theme.colors.white};
      border-color: ${(p) => p.theme.variants.secondary};
      outline: 0;
      box-shadow: ${(p) => p.theme.general.boxShadow};
      ${(props) => (props.isInvalid ? InvalidTextareaFocusStyle : "")}

      &+.input-group-text {
        color: ${(p) => p.theme.palette.secondary};
      }
    }

    &::placeholder {
      color: ${(p) => p.theme.colors.disabledFont};
      opacity: 1;
    }

    &:disabled,
    &[readonly] {
      background-color: ${(p) => p.theme.colors.gray100};
      border-color: transparent;
      cursor: not-allowed;
      opacity: 1;
      color: ${(p) => p.theme.variants.primary};
    }
  }
`;
