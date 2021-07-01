import styled, { css } from "styled-components";

export const InvalidInputStyle = css`
  border-color: ${(props) => props.theme.palette.danger};
`;
export const InvalidFocusStyle = css`
  border-color: ${(props) => props.theme.palette.danger};
  box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.red100};
`;
export const InvalidCheckStyle = css`
  border-color: ${(props) => props.theme.palette.danger};
`;

export const GeneralStyledInput = styled.div`
  &.is-invalid {
    .form-control,
    .mbsc-material.mbsc-textfield-box {
      ${InvalidInputStyle}
      &:focus {
        ${InvalidFocusStyle}
      }
    }
    .form-check-input {
      ${InvalidCheckStyle}
      &:focus {
        ${InvalidFocusStyle}
      }
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const FormCheck = styled(GeneralStyledInput)`
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5em;

  .form-check-label {
    display: inline-block;
  }
  .form-check-input {
    float: left;
    margin-left: -1.5em;
    border-radius: 0.25em;
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    appearance: none;
    color-adjust: exact;
    &:checked[type="checkbox"] {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3 6-6'/%3E%3C/svg%3E");
    }
    &:checked {
      background-color: ${(props) => props.theme.colors.blue500};
      border-color: ${(props) => props.theme.palette.primary};
    }
    &:focus {
      border-color: ${(props) => props.theme.colors.blue700};
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.gray300};
    }
  }
`;
