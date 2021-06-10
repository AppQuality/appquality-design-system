import styled, { css } from "styled-components";
import { FormCheckProps, FormGroupProps } from "./_types";

// $form-switch-bg-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$info}'/></svg>");
// $form-switch-focus-bg-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$info}'/></svg>") !default;

// $form-check-input-checked-bg-color: $info;

// $dropzone-padding: 8px;
// $dropzone-preview-size: 100px;
// $dropzone-remove-btn-size: 32px;

const GeneralStyledInput = styled.div`
  .invalid-feedback {
    color: ${(props) => props.theme.palette.danger};
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
  }
  &.is-invalid {
    .form-control {
      border-color: ${(props) => props.theme.palette.danger};
      padding-right: calc(1.5em + 0.75rem);
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23d71116'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23d71116' stroke='none'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right calc(0.375em + 0.1875rem) center;
      background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }
    .form-control:focus,
    .form-check-input:focus {
      border-color: ${(props) => props.theme.palette.danger};
      box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.red100};
    }
    .form-check-input {
      border-color: ${(props) => props.theme.palette.danger};
    }
  }
`;

export const FormGroup = styled(GeneralStyledInput)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;

  .form-label {
    order: -1;
    margin-bottom: 0.5rem;
    .form-icon {
      line-height: 1;
      float: right;
    }
  }
  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    color: ${(props) => props.theme.palette.primary};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    background-color: ${(props) => props.theme.colors.white};
    background-clip: padding-box;
    border: 1px solid ${(props) => props.theme.colors.gray100};
    border-radius: 5px;
    box-shadow: none;

    // Customize the \`:focus\` state to imitate native WebKit styles.
    &:focus,
    &:focus-visible {
      color: ${(props) => props.theme.palette.primary};
      background-color: ${(props) => props.theme.colors.white};
      border-color: ${(props) => props.theme.palette.primary};
      outline: 0;
      box-shadow: inset 0 1px 2px ${(props) => props.theme.colors.gray100},
        0 0 0 0.25rem ${(props) => props.theme.colors.gray200};
    }

    // Placeholder
    &::placeholder {
      color: ${(props) => props.theme.colors.disabled};
      opacity: 1;
    }

    // Disabled and read-only inputs
    //
    // HTML5 says that controls under a fieldset > legend:first-child won't be
    // disabled if the fieldset is disabled. Due to implementation difficulty, we
    // don't honor that edge case; we style them as disabled anyway.
    &:disabled,
    &[readonly] {
      background-color: ${(props) => props.theme.colors.gray100};
      border-color: transparent;
      cursor: not-allowed;
      opacity: 1;
    }
  }
`;

export const FormCheck = styled(GeneralStyledInput)`
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5em;

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
    border: 1px solid ${(props) => props.theme.colors.gray100};
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
