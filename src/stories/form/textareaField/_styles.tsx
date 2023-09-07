import styled, { css } from "styled-components";

const InvalidTextareaStyle = css`
  border-color: ${(p) => p.theme.palette.danger};
`;

const InvalidTextareaFocusStyle = css`
  border-color: ${(p) => p.theme.palette.danger};
  box-shadow: 0 0 0 0.25rem ${(p) => p.theme.colors.red100};
`;

export const Counter = styled.div<{ isInvalid?: boolean; isFocus?: boolean }>`
  position: absolute;
  text-align: right;
  bottom: 3px;
  right: 4px;
  pointer-events: none;
  font-size: 12px;
  line-height: 1;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.8);
  span {
    color: ${(p) =>
      p.isInvalid ? p.theme.palette.danger : p.theme.palette.secondary};
  }
  transition: opacity 0.2s ease-in-out;
  ${(p) => (p.isFocus ? "opacity: 1;" : "opacity: 0;")}
`;

export const StyledTextareaField = styled.div<{
  resize?: string;
  isInvalid?: boolean;
  height?: string;
  autoResize?: boolean;
}>`
  position: relative;

  textarea {
    display: block;
    width: 100%;
    min-height: ${(p) => (p.height ? p.height : "5.715rem")};
    height: ${(p) => (p.height ? p.height : "5.715rem")};
    resize: ${(p) => (p.resize ? p.resize : "none")};
    padding: 0.5rem 0.75rem 14px;
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
