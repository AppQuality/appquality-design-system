import { createGlobalStyle, StyleSheetManager } from "styled-components";
import { useEffect } from "react";
function addOpacityToHex(hex: string, alpha: string) {
  let hexAlphaPercent = parseInt((parseFloat(alpha) * 100).toString(), 16);
  return `${hex}${hexAlphaPercent}`;
}

export const DatepickerGlobalStyle = createGlobalStyle`${(props) => {
  return `
  @font-face {
    font-family: Mobiscroll;
    src: url(icons_mobiscroll.woff?vytnpl) format("woff"),
      url(icons_mobiscroll.woff) format("woff"),
      url(icons_mobiscroll.ttf?vytnpl) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  .mbsc-font-icon:before {
    font-family: Mobiscroll;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .mbsc-icon-material-backspace:before {
    content: "\\ea01";
  }

  .mbsc-icon-material-check-box-outline-blank:before {
    content: "\\ea02";
  }

  .mbsc-icon-material-check:before {
    content: "\\ea03";
  }

  .mbsc-icon-material-keyboard-arrow-down:before {
    content: "\\ea04";
  }

  .mbsc-icon-material-keyboard-arrow-left:before {
    content: "\\ea05";
  }

  .mbsc-icon-material-keyboard-arrow-right:before {
    content: "\\ea06";
  }

  .mbsc-icon-material-keyboard-arrow-up:before {
    content: "\\ea07";
  }

  .mbsc-icon-material-star-outline:before {
    content: "\\ea08";
  }

  .mbsc-icon-material-star:before {
    content: "\\ea09";
  }

  .mbsc-icon {
    display: inline-block;
    vertical-align: middle;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -moz-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .mbsc-icon > svg {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  .mbsc-material.mbsc-description.mbsc-disabled,
  .mbsc-material.mbsc-form-control-label.mbsc-disabled {
    opacity: 0.3;
  }

  .mbsc-form-control-label {
    display: block;
  }

  .mbsc-form-control-input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0;
    opacity: 0;
    margin: 0;
    z-index: 3;
  }

  .mbsc-material.mbsc-textfield-wrapper {
    margin-bottom: 0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-material.mbsc-textfield-inner.mbsc-disabled {
    opacity: 0.5;
  }

  .mbsc-material.mbsc-textfield {
    display: block;
    width: 100%;
    background-color: transparent;
    border-bottom: 0;
    font-size: 1em;
    -webkit-transition: border-color 0.2s;
    transition: border-color 0.2s;
  }

  .mbsc-material.mbsc-textfield-has-icon-left {
    padding-left: 2em;
  }

  .mbsc-material.mbsc-textfield-has-icon-right {
    padding-right: 2em;
  }

  .mbsc-material.mbsc-textfield-icon {
    top: 0.375em;
  }

  .mbsc-material.mbsc-textfield-icon-floating,
  .mbsc-material.mbsc-textfield-icon-outline,
  .mbsc-material.mbsc-textfield-icon-stacked {
    top: 1em;
  }

  .mbsc-material .mbsc-textfield-ripple {
    display: none;
  }

  .mbsc-material.mbsc-label {
    font-size: 0.75em;
  }

  .mbsc-material.mbsc-label-inline {
    line-height: 2em;
    font-size: 1em;
  }

  .mbsc-material.mbsc-label-inline.mbsc-ltr {
    padding-right: 0.5em;
  }

  .mbsc-material.mbsc-label-inline.mbsc-rtl {
    padding-left: 0.5em;
  }

  .mbsc-material.mbsc-label-floating {
    font-size: 1em;
    line-height: 1.5em;
    top: 1.125em;
  }

  .mbsc-material.mbsc-label-floating-active {
    -webkit-transform: translateY(-1.125em) scale(0.75);
    transform: translateY(-1.125em) scale(0.75);
  }

  .mbsc-material.mbsc-label.mbsc-disabled {
    opacity: 0.5;
  }

  .mbsc-material.mbsc-error-message.mbsc-ltr {
    left: 0;
  }

  .mbsc-material.mbsc-error-message.mbsc-rtl {
    right: 0;
  }

  .mbsc-material.mbsc-error-message-has-icon-left.mbsc-ltr {
    left: 2.66667em;
  }

  .mbsc-material.mbsc-error-message-has-icon-right.mbsc-rtl {
    right: 2.66667em;
  }

  .mbsc-material.mbsc-textfield-underline-floating,
  .mbsc-material.mbsc-textfield-underline-stacked {
    height: 3em;
    padding-top: 0.875em;
  }

  .mbsc-material.mbsc-textfield-icon-underline {
    top: 0.25em;
  }

  .mbsc-material.mbsc-textfield-icon-underline.mbsc-textfield-icon-floating,
  .mbsc-material.mbsc-textfield-icon-underline.mbsc-textfield-icon-stacked {
    top: 1.125em;
  }

  .mbsc-material.mbsc-label-underline-inline {
    padding-top: 1px;
  }

  .mbsc-material.mbsc-label-underline-stacked-has-icon-left.mbsc-ltr {
    left: 2.66667em;
  }

  .mbsc-material.mbsc-label-underline-stacked-has-icon-right.mbsc-rtl {
    right: 2.66667em;
  }

  .mbsc-material.mbsc-label-underline-floating-has-icon-left.mbsc-ltr {
    left: 2em;
  }

  .mbsc-material.mbsc-label-underline-floating-has-icon-right.mbsc-rtl {
    right: 2em;
  }

  .mbsc-material.mbsc-textfield-box,
  .mbsc-material.mbsc-textfield-inner-box {
    border-radius: 0.25em;
  }

  .mbsc-material.mbsc-textfield-box {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    color: #17405c;
    font-size: 0.875rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #f0f5f7;
    line-height: 1.5;
  }

  .mbsc-material.mbsc-textfield-box-floating,
  .mbsc-material.mbsc-textfield-box-stacked {
    height: 3.5em;
    padding-top: 1.25em;
  }

  .mbsc-material.mbsc-textfield-underline.mbsc-disabled {
    border-style: dotted;
  }

  .mbsc-material.mbsc-label-box-inline {
    padding-top: 1px;
  }

  .mbsc-material.mbsc-label-box-stacked {
    top: 0.666667em;
  }

  .mbsc-material.mbsc-label-box-floating {
    top: 1em;
  }

  .mbsc-material.mbsc-label-box-floating.mbsc-label-floating-active {
    -webkit-transform: translateY(-0.625em) scale(0.75);
    transform: translateY(-0.625em) scale(0.75);
  }

  .mbsc-material.mbsc-textfield-inner-outline {
    padding: 0 2px;
  }

  .mbsc-material.mbsc-textfield-outline {
    height: 3.5em;
    padding: 2px 1em;
    border: 0;
    border-radius: 4px;
  }

  .mbsc-material.mbsc-textfield-fieldset {
    top: -0.5em;
    border: 1px solid;
    border-radius: 4px;
    -webkit-transition: border-color 0.2s;
    transition: border-color 0.2s;
  }

  .mbsc-material.mbsc-textfield-fieldset-has-icon-left {
    padding-left: 3em;
  }

  .mbsc-material.mbsc-textfield-fieldset-has-icon-right {
    padding-right: 3em;
  }

  .mbsc-material.mbsc-textfield-fieldset.mbsc-focus {
    border-width: 2px;
  }

  .mbsc-material.mbsc-textfield-legend {
    padding: 0;
    margin: 0;
    font-size: 0.75em;
    color: transparent;
    width: 0.01px;
    white-space: nowrap;
  }

  .mbsc-material.mbsc-textfield-legend-active {
    width: auto;
    padding: 0 0.333334em;
    margin: 0 -0.333334em;
  }

  .mbsc-material.mbsc-label-outline-inline {
    line-height: 3.375em;
  }

  .mbsc-material.mbsc-label-outline-stacked {
    top: -0.5em;
    margin: 0 2px;
  }

  .mbsc-material.mbsc-label-outline-floating {
    top: 1em;
    margin: 0 2px;
  }

  .mbsc-material.mbsc-label-outline-floating.mbsc-label-floating-active {
    margin-top: -1px;
    -webkit-transform: translateY(-1.5em) scale(0.75);
    transform: translateY(-1.5em) scale(0.75);
  }

  .mbsc-material.mbsc-error-message-outline {
    margin: 0 2px;
  }

  .mbsc-material.mbsc-textfield-box-has-icon-left,
  .mbsc-material.mbsc-textfield-outline-has-icon-left {
    padding-left: 3em;
  }

  .mbsc-material.mbsc-textfield-box-has-icon-right,
  .mbsc-material.mbsc-textfield-outline-has-icon-right {
    padding-right: 3em;
  }

  .mbsc-material.mbsc-textfield-icon-box-left,
  .mbsc-material.mbsc-textfield-icon-outline-left {
    left: 0.75em;
  }

  .mbsc-material.mbsc-textfield-icon-box-right,
  .mbsc-material.mbsc-textfield-icon-outline-right {
    right: 0.75em;
  }

  .mbsc-material.mbsc-label-box-stacked.mbsc-ltr,
  .mbsc-material.mbsc-label-outline-stacked.mbsc-ltr {
    left: 1.333334em;
  }

  .mbsc-material.mbsc-label-box-stacked.mbsc-rtl,
  .mbsc-material.mbsc-label-outline-stacked.mbsc-rtl {
    right: 1.333334em;
  }

  .mbsc-material.mbsc-label-box-stacked-has-icon-left.mbsc-ltr,
  .mbsc-material.mbsc-label-outline-stacked-has-icon-left.mbsc-ltr {
    left: 4em;
  }

  .mbsc-material.mbsc-label-box-stacked-has-icon-right.mbsc-rtl,
  .mbsc-material.mbsc-label-outline-stacked-has-icon-right.mbsc-rtl {
    right: 4em;
  }

  .mbsc-material.mbsc-label-box-floating.mbsc-ltr,
  .mbsc-material.mbsc-label-outline-floating.mbsc-ltr {
    left: 1em;
  }

  .mbsc-material.mbsc-label-box-floating.mbsc-rtl,
  .mbsc-material.mbsc-label-outline-floating.mbsc-rtl {
    right: 1em;
  }

  .mbsc-material.mbsc-label-box-floating-has-icon-left.mbsc-ltr,
  .mbsc-material.mbsc-label-outline-floating-has-icon-left.mbsc-ltr {
    left: 3em;
  }

  .mbsc-material.mbsc-label-box-floating-has-icon-left.mbsc-rtl,
  .mbsc-material.mbsc-label-outline-floating-has-icon-left.mbsc-rtl {
    right: 1em;
  }

  .mbsc-material.mbsc-label-box-floating-has-icon-right.mbsc-rtl,
  .mbsc-material.mbsc-label-outline-floating-has-icon-right.mbsc-rtl {
    right: 3em;
  }

  .mbsc-material.mbsc-error-message-box.mbsc-ltr,
  .mbsc-material.mbsc-error-message-outline.mbsc-ltr {
    left: 1.333334em;
  }

  .mbsc-material.mbsc-error-message-box.mbsc-rtl,
  .mbsc-material.mbsc-error-message-outline.mbsc-rtl {
    right: 1.333334em;
  }

  .mbsc-material.mbsc-error-message-box.mbsc-error-message-has-icon-left.mbsc-ltr,
  .mbsc-material.mbsc-error-message-outline.mbsc-error-message-has-icon-left.mbsc-ltr {
    left: 4em;
  }

  .mbsc-material.mbsc-error-message-box.mbsc-error-message-has-icon-right.mbsc-rtl,
  .mbsc-material.mbsc-error-message-outline.mbsc-error-message-has-icon-right.mbsc-rtl {
    right: 4em;
  }

  .mbsc-material.mbsc-select.mbsc-ltr {
    padding-right: 3em;
  }

  .mbsc-material.mbsc-select.mbsc-rtl {
    padding-left: 3em;
  }

  .mbsc-material.mbsc-select.mbsc-textfield-has-icon-right.mbsc-ltr {
    padding-right: 4.5em;
  }

  .mbsc-material.mbsc-select.mbsc-textfield-has-icon-left.mbsc-rtl {
    padding-left: 4.5em;
  }

  .mbsc-material.mbsc-select.mbsc-textfield-underline-has-icon-right.mbsc-ltr {
    padding-right: 3.75em;
  }

  .mbsc-material.mbsc-select.mbsc-textfield-underline-has-icon-left.mbsc-rtl {
    padding-left: 3.75em;
  }

  .mbsc-material.mbsc-select-icon {
    top: 0.375em;
  }

  .mbsc-material.mbsc-select-icon.mbsc-ltr {
    right: 0.75em;
  }

  .mbsc-material.mbsc-select-icon.mbsc-rtl {
    left: 0.75em;
  }

  .mbsc-material.mbsc-select-icon-right.mbsc-ltr {
    right: 3em;
  }

  .mbsc-material.mbsc-select-icon-left.mbsc-rtl {
    left: 3em;
  }

  .mbsc-material.mbsc-select-icon-floating,
  .mbsc-material.mbsc-select-icon-outline,
  .mbsc-material.mbsc-select-icon-stacked {
    top: 1em;
  }

  .mbsc-material.mbsc-select-icon-underline {
    top: 0.25em;
  }

  .mbsc-material.mbsc-select-icon-underline.mbsc-ltr {
    right: 0;
  }

  .mbsc-material.mbsc-select-icon-underline.mbsc-rtl {
    left: 0;
  }

  .mbsc-material.mbsc-select-icon-underline.mbsc-select-icon-right.mbsc-ltr {
    right: 2.25em;
  }

  .mbsc-material.mbsc-select-icon-underline.mbsc-select-icon-left.mbsc-rtl {
    left: 2.25em;
  }

  .mbsc-material.mbsc-select-icon-underline.mbsc-select-icon-floating,
  .mbsc-material.mbsc-select-icon-underline.mbsc-select-icon-stacked {
    top: 1.125em;
  }

  .mbsc-material.mbsc-textarea {
    height: 1.875em;
    padding-bottom: 0.375em;
  }

  .mbsc-material.mbsc-textarea.mbsc-textfield-floating,
  .mbsc-material.mbsc-textarea.mbsc-textfield-stacked {
    padding-top: 0;
  }

  .mbsc-material.mbsc-textarea.mbsc-textfield-outline {
    height: 1.5em;
    padding-top: 0;
    padding-bottom: 0;
  }

  .mbsc-material.mbsc-textarea.mbsc-textfield-underline {
    padding-bottom: 0.3125em;
  }

  .mbsc-material.mbsc-textarea-inner.mbsc-textfield-inner-box {
    padding-top: 0.375em;
  }

  .mbsc-material.mbsc-textarea-inner.mbsc-textfield-inner-floating,
  .mbsc-material.mbsc-textarea-inner.mbsc-textfield-inner-stacked {
    padding-top: 1.625em;
  }

  .mbsc-material.mbsc-textarea-inner.mbsc-textfield-inner-outline {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .mbsc-material.mbsc-textarea-inner.mbsc-textfield-inner-underline {
    padding-top: 0.25em;
  }

  .mbsc-material.mbsc-textarea-inner.mbsc-textfield-inner-underline.mbsc-textfield-inner-floating,
  .mbsc-material.mbsc-textarea-inner.mbsc-textfield-inner-underline.mbsc-textfield-inner-stacked {
    padding-top: 1.125em;
  }

  .mbsc-material.mbsc-textfield {
    color: rgba(0, 0, 0, 0.87);
  }

  .mbsc-material.mbsc-textfield.mbsc-hover {
    /*border-color: rgba(0, 0, 0, 0.87);*/
  }

  .mbsc-material.mbsc-textfield.mbsc-error {
    border-color: #de3226;
  }

  .mbsc-material.mbsc-select-icon,
  .mbsc-material.mbsc-textfield-icon {
    color: rgba(0, 0, 0, 0.54);
  }

  .mbsc-material.mbsc-textfield-ripple {
    background-color: #1a73e8;
  }

  .mbsc-material.mbsc-textfield-ripple.mbsc-error {
    background-color: #de3226;
  }

  .mbsc-material.mbsc-label {
    color: rgba(0, 0, 0, 0.6);
  }

  .mbsc-material.mbsc-label-floating.mbsc-focus,
  .mbsc-material.mbsc-label-stacked.mbsc-focus {
    color: #1a73e8;
  }

  .mbsc-material.mbsc-error-message,
  .mbsc-material.mbsc-label.mbsc-error {
    color: #de3226;
  }

  .mbsc-material.mbsc-select {
    background: #fff;
  }

  .mbsc-material.mbsc-textfield-box.mbsc-select,
  .mbsc-material.mbsc-textfield-inner-box {
    background: #f5f5f5;
  }

  .mbsc-material.mbsc-textfield-box.mbsc-select.mbsc-hover,
  .mbsc-material.mbsc-textfield-inner-box.mbsc-hover {
    background: ${props.theme.colors.white};
  }

  .mbsc-material.mbsc-textfield-box.mbsc-select.mbsc-focus,
  .mbsc-material.mbsc-textfield-inner-box.mbsc-focus {
    background: #e3e3e3;
  }

  .mbsc-material.mbsc-textfield-fieldset {
    border-color: rgba(0, 0, 0, 0.42);
  }

  .mbsc-material.mbsc-textfield-fieldset.mbsc-hover {
    border-color: rgba(0, 0, 0, 0.87);
  }

  .mbsc-material.mbsc-textfield-fieldset.mbsc-focus {
    //border-color: #1a73e8;
  }

  .mbsc-material.mbsc-textfield-fieldset.mbsc-error {
    border-color: #de3226;
  }

  .mbsc-material.mbsc-textfield-fieldset.disabled {
    border-color: rgba(0, 0, 0, 0.87);
  }

  .mbsc-material-dark.mbsc-textfield {
    border-bottom-color: #fff;
    color: #fff;
  }

  .mbsc-material-dark.mbsc-textfield.mbsc-hover {
    border-color: #fff;
  }

  .mbsc-material-dark.mbsc-textfield.mbsc-error {
    border-color: #de3226;
  }

  .mbsc-material-dark.mbsc-select-icon,
  .mbsc-material-dark.mbsc-textfield-icon {
    color: #fff;
  }

  .mbsc-material-dark.mbsc-textfield-ripple {
    background-color: transparent;
  }

  .mbsc-material-dark.mbsc-textfield-ripple.mbsc-error {
    background-color: transparent;
  }

  .mbsc-material-dark.mbsc-label {
    color: hsla(0, 0%, 100%, 0.6);
  }

  .mbsc-material-dark.mbsc-label-floating.mbsc-focus,
  .mbsc-material-dark.mbsc-label-stacked.mbsc-focus {
    color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-error-message,
  .mbsc-material-dark.mbsc-label.mbsc-error {
    color: #de3226;
  }

  .mbsc-material-dark.mbsc-select {
    background: #000;
  }

  .mbsc-material-dark.mbsc-textfield-box.mbsc-select,
  .mbsc-material-dark.mbsc-textfield-inner-box {
    background: #0a0a0a;
  }

  .mbsc-material-dark.mbsc-textfield-box.mbsc-select.mbsc-hover,
  .mbsc-material-dark.mbsc-textfield-inner-box.mbsc-hover {
    background: #121212;
  }

  .mbsc-material-dark.mbsc-textfield-box.mbsc-select.mbsc-focus,
  .mbsc-material-dark.mbsc-textfield-inner-box.mbsc-focus {
    background: #1c1c1c;
  }

  .mbsc-material-dark.mbsc-textfield-fieldset,
  .mbsc-material-dark.mbsc-textfield-fieldset.mbsc-hover {
    border-color: #fff;
  }

  .mbsc-material-dark.mbsc-textfield-fieldset.mbsc-focus {
    border-color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-textfield-fieldset.mbsc-error {
    border-color: #de3226;
  }

  .mbsc-material-dark.mbsc-textfield-fieldset.disabled {
    border-color: #fff;
  }

  @-webkit-keyframes autofill {
    0% {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes autofill {
    0% {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }

  .mbsc-textfield-wrapper {
    position: relative;
    display: block;
    margin: 0;
    z-index: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .mbsc-textfield-wrapper-inline {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .mbsc-textfield-inner {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    display: block;
  }

  .mbsc-textfield-inner-inline {
    -webkit-box-flex: 1;
    -webkit-flex: 1 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 auto;
    flex: 1 auto;
  }

  .mbsc-textfield {
    display: block;
    width: 100%;
    font-size: 1em;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    outline: 0;
    font-family: inherit;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -moz-appearance: none;
    appearance: none;
    -webkit-appearance: none;
  }

  .mbsc-textfield:-webkit-autofill {
    -webkit-animation-name: autofill;
    animation-name: autofill;
  }

  .mbsc-textfield::-webkit-inner-spin-button {
    height: 2em;
    -webkit-align-self: center;
    align-self: center;
  }

  .mbsc-textfield::-moz-placeholder {
    color: ${props.theme.colors.disabled};
    opacity: 1;
  }

  .mbsc-textfield::-webkit-input-placeholder {
    color: ${props.theme.colors.disabled};
    opacity: 1;
  }

  .mbsc-textfield-floating:-ms-input-placeholder {
    color: transparent;
  }

  .mbsc-textfield-floating::-moz-placeholder {
    opacity: 0;
    -moz-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }

  .mbsc-textfield-floating::-webkit-input-placeholder {
    opacity: 0;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }

  .mbsc-textfield-floating::-webkit-datetime-edit {
    color: transparent;
  }

  .mbsc-textfield-floating-active:-ms-input-placeholder {
    color: inherit;
  }

  .mbsc-textfield-floating-active::-moz-placeholder {
    opacity: 0.5;
  }

  .mbsc-textfield-floating-active::-webkit-input-placeholder {
    opacity: 0.5;
  }

  .mbsc-textfield-floating-active::-webkit-datetime-edit {
    color: inherit;
  }

  .mbsc-textfield-fieldset {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0 1em;
    pointer-events: none;
  }

  .mbsc-textfield-icon {
    position: absolute;
    top: 0;
    text-align: center;
  }

  .mbsc-textfield-icon-left {
    left: 0;
  }

  .mbsc-textfield-icon-right {
    right: 0;
  }

  .mbsc-label {
    position: absolute;
    z-index: 1;
    top: 0;
    line-height: 1em;
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;
  }

  .mbsc-label-inline {
    position: static;
    overflow: hidden;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -moz-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 30%;
    max-width: 12.5em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    pointer-events: auto;
  }

  .mbsc-label-floating-animate {
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
  }

  .mbsc-label-floating.mbsc-ltr {
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }

  .mbsc-label-floating.mbsc-rtl {
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }

  .mbsc-error-message {
    position: absolute;
    top: 100%;
    font-size: 0.75em;
    line-height: 1.5em;
  }

  .mbsc-textfield-file {
    position: absolute;
    left: 0;
    opacity: 0;
  }

  .mbsc-select {
    cursor: pointer;
  }

  .mbsc-select-icon {
    position: absolute;
    text-align: center;
    pointer-events: none;
  }

  .mbsc-textarea {
    resize: none;
    overflow: hidden;
    line-height: 1.5em;
  }

  .mbsc-toggle-icon:hover {
    cursor: pointer;
  }

  :root {
    --mbsc-safe-top: 0;
    --mbsc-safe-right: 0;
    --mbsc-safe-bottom: 0;
    --mbsc-safe-left: 0;
  }

  @supports (top: constant(safe-area-inset-top)) {
    :root {
      --mbsc-safe-top: constant(safe-area-inset-top);
      --mbsc-safe-right: constant(safe-area-inset-right);
      --mbsc-safe-bottom: constant(safe-area-inset-bottom);
      --mbsc-safe-left: constant(safe-area-inset-left);
    }
  }

  @supports (top: env(safe-area-inset-top)) {
    :root {
      --mbsc-safe-top: env(safe-area-inset-top);
      --mbsc-safe-right: env(safe-area-inset-right);
      --mbsc-safe-bottom: env(safe-area-inset-bottom);
      --mbsc-safe-left: env(safe-area-inset-left);
    }
  }

  .mbsc-font {
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
    font-size: 16px;
    font-weight: ${props.theme.typography.fontWeight.light};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
  }

  .mbsc-reset {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .mbsc-resize {
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
  }

  .mbsc-resize,
  .mbsc-resize-i {
    position: absolute;
    left: 0;
    top: 0;
  }

  .mbsc-resize-y {
    width: 200%;
    height: 200%;
  }

  .mbsc-hidden {
    visibility: hidden;
  }

  .mbsc-ltr {
    direction: ltr;
  }

  .mbsc-rtl {
    direction: rtl;
  }

  .mbsc-ripple {
    background: currentColor;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: 1000em;
    pointer-events: none;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  .mbsc-flex,
  .mbsc-flex-col {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .mbsc-flex-col {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .mbsc-flex-1-1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1;
    -moz-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
  }

  @media (-webkit-min-device-pixel-ratio: 2) {
    .mbsc-hb,
    .mbsc-hb:after,
    .mbsc-hb:before {
      border-width: 0.5px !important;
    }
  }

  .mbsc-material.mbsc-button {
    min-width: 4.571429em;
    padding: 0.428572em 1.142858em;
    border-radius: 0.285715em;
    font-size: 0.875em;
    font-weight: 600;
    line-height: 1.714286em;
    -webkit-transition: box-shadow 0.2s ease-out, background-color 0.2s ease-out;
    transition: box-shadow 0.2s ease-out, background-color 0.2s ease-out;
    margin: 0.5em;
  }

  .mbsc-material.mbsc-button-outline {
    border: 1px solid;
  }

  .mbsc-material.mbsc-button .mbsc-icon {
    font-size: 1.142858em;
  }

  .mbsc-material.mbsc-icon-button {
    min-width: 0;
    padding: 0.5em;
    border-radius: 2em;
    font-size: 1em;
    line-height: normal;
  }

  .mbsc-material.mbsc-icon-button .mbsc-icon {
    width: 1.5em;
    height: 1.5em;
    font-size: 1em;
  }

  .mbsc-material.mbsc-button.mbsc-disabled,
  .mbsc-material.mbsc-button:disabled {
    opacity: 0.3;
  }

  .mbsc-material.mbsc-ltr.mbsc-button-icon-start {
    padding-right: 0.5em;
    margin-left: -0.25em;
  }

  .mbsc-material.mbsc-ltr.mbsc-button-icon-end,
  .mbsc-material.mbsc-rtl.mbsc-button-icon-start {
    padding-left: 0.5em;
    margin-right: -0.25em;
  }

  .mbsc-material.mbsc-rtl.mbsc-button-icon-end {
    padding-right: 0.5em;
    margin-left: -0.25em;
  }

  .mbsc-material .mbsc-button-group,
  .mbsc-material .mbsc-button-group-justified {
    margin: 0.5em;
  }

  .mbsc-material .mbsc-button-group-block {
    margin: 0.5em 1em;
  }

  .mbsc-material.mbsc-button-standard {
    background: #cfcfcf;
    color: #000;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material.mbsc-button-standard.mbsc-hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material.mbsc-button-standard.mbsc-active,
  .mbsc-material.mbsc-button-standard.mbsc-focus {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .mbsc-material.mbsc-button-flat,
  .mbsc-material.mbsc-button-outline {
    color: #000;
  }

  .mbsc-material.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-flat.mbsc-hover,
  .mbsc-material.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-outline.mbsc-hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .mbsc-material.mbsc-button-flat.mbsc-focus,
  .mbsc-material.mbsc-button-outline.mbsc-focus {
    background: rgba(0, 0, 0, 0.3);
  }

  .mbsc-material.mbsc-button-outline {
    border-color: #000;
  }

  .mbsc-material.mbsc-button-primary.mbsc-button-standard {
    background: #3f97f6;
    color: #fff;
  }

  .mbsc-material.mbsc-button-secondary.mbsc-button-standard {
    background: #90979e;
    color: #fff;
  }

  .mbsc-material.mbsc-button-success.mbsc-button-standard {
    background: #43be5f;
    color: #fff;
  }

  .mbsc-material.mbsc-button-danger.mbsc-button-standard {
    background: #f5504e;
    color: #fff;
  }

  .mbsc-material.mbsc-button-warning.mbsc-button-standard {
    background: #f8b042;
    color: #fff;
  }

  .mbsc-material.mbsc-button-info.mbsc-button-standard {
    background: #5bb7c5;
    color: #fff;
  }

  .mbsc-material.mbsc-button-dark.mbsc-button-standard {
    background: #47494a;
    color: #fff;
  }

  .mbsc-material.mbsc-button-light.mbsc-button-standard {
    background: #fff;
    color: #303030;
  }

  .mbsc-material.mbsc-button-primary.mbsc-button-flat {
    color: #3f97f6;
  }

  .mbsc-material.mbsc-button-primary.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-primary.mbsc-button-flat.mbsc-hover {
    background: rgba(63, 151, 246, 0.2);
  }

  .mbsc-material.mbsc-button-primary.mbsc-button-flat.mbsc-focus {
    background: rgba(63, 151, 246, 0.3);
  }

  .mbsc-material.mbsc-button-secondary.mbsc-button-flat {
    color: #90979e;
  }

  .mbsc-material.mbsc-button-secondary.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-secondary.mbsc-button-flat.mbsc-hover {
    background: rgba(144, 151, 158, 0.2);
  }

  .mbsc-material.mbsc-button-secondary.mbsc-button-flat.mbsc-focus {
    background: rgba(144, 151, 158, 0.3);
  }

  .mbsc-material.mbsc-button-success.mbsc-button-flat {
    color: #43be5f;
  }

  .mbsc-material.mbsc-button-success.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-success.mbsc-button-flat.mbsc-hover {
    background: rgba(67, 190, 95, 0.2);
  }

  .mbsc-material.mbsc-button-success.mbsc-button-flat.mbsc-focus {
    background: rgba(67, 190, 95, 0.3);
  }

  .mbsc-material.mbsc-button-danger.mbsc-button-flat {
    color: #f5504e;
  }

  .mbsc-material.mbsc-button-danger.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-danger.mbsc-button-flat.mbsc-hover {
    background: rgba(245, 80, 78, 0.2);
  }

  .mbsc-material.mbsc-button-danger.mbsc-button-flat.mbsc-focus {
    background: rgba(245, 80, 78, 0.3);
  }

  .mbsc-material.mbsc-button-warning.mbsc-button-flat {
    color: #f8b042;
  }

  .mbsc-material.mbsc-button-warning.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-warning.mbsc-button-flat.mbsc-hover {
    background: rgba(248, 176, 66, 0.2);
  }

  .mbsc-material.mbsc-button-warning.mbsc-button-flat.mbsc-focus {
    background: rgba(248, 176, 66, 0.3);
  }

  .mbsc-material.mbsc-button-info.mbsc-button-flat {
    color: #5bb7c5;
  }

  .mbsc-material.mbsc-button-info.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-info.mbsc-button-flat.mbsc-hover {
    background: rgba(91, 183, 197, 0.2);
  }

  .mbsc-material.mbsc-button-info.mbsc-button-flat.mbsc-focus {
    background: rgba(91, 183, 197, 0.3);
  }

  .mbsc-material.mbsc-button-dark.mbsc-button-flat {
    color: #47494a;
  }

  .mbsc-material.mbsc-button-dark.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-dark.mbsc-button-flat.mbsc-hover {
    background: rgba(71, 73, 74, 0.2);
  }

  .mbsc-material.mbsc-button-dark.mbsc-button-flat.mbsc-focus {
    background: rgba(71, 73, 74, 0.3);
  }

  .mbsc-material.mbsc-button-light.mbsc-button-flat {
    color: #ccc;
  }

  .mbsc-material.mbsc-button-light.mbsc-button-flat.mbsc-active,
  .mbsc-material.mbsc-button-light.mbsc-button-flat.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-material.mbsc-button-light.mbsc-button-flat.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.3);
  }

  .mbsc-material.mbsc-button-primary.mbsc-button-outline {
    border-color: #3f97f6;
    color: #3f97f6;
  }

  .mbsc-material.mbsc-button-primary.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-primary.mbsc-button-outline.mbsc-hover {
    background: rgba(63, 151, 246, 0.2);
  }

  .mbsc-material.mbsc-button-primary.mbsc-button-outline.mbsc-focus {
    background: rgba(63, 151, 246, 0.3);
  }

  .mbsc-material.mbsc-button-secondary.mbsc-button-outline {
    border-color: #90979e;
    color: #90979e;
  }

  .mbsc-material.mbsc-button-secondary.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-secondary.mbsc-button-outline.mbsc-hover {
    background: rgba(144, 151, 158, 0.2);
  }

  .mbsc-material.mbsc-button-secondary.mbsc-button-outline.mbsc-focus {
    background: rgba(144, 151, 158, 0.3);
  }

  .mbsc-material.mbsc-button-success.mbsc-button-outline {
    border-color: #43be5f;
    color: #43be5f;
  }

  .mbsc-material.mbsc-button-success.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-success.mbsc-button-outline.mbsc-hover {
    background: rgba(67, 190, 95, 0.2);
  }

  .mbsc-material.mbsc-button-success.mbsc-button-outline.mbsc-focus {
    background: rgba(67, 190, 95, 0.3);
  }

  .mbsc-material.mbsc-button-danger.mbsc-button-outline {
    border-color: #f5504e;
    color: #f5504e;
  }

  .mbsc-material.mbsc-button-danger.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-danger.mbsc-button-outline.mbsc-hover {
    background: rgba(245, 80, 78, 0.2);
  }

  .mbsc-material.mbsc-button-danger.mbsc-button-outline.mbsc-focus {
    background: rgba(245, 80, 78, 0.3);
  }

  .mbsc-material.mbsc-button-warning.mbsc-button-outline {
    border-color: #f8b042;
    color: #f8b042;
  }

  .mbsc-material.mbsc-button-warning.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-warning.mbsc-button-outline.mbsc-hover {
    background: rgba(248, 176, 66, 0.2);
  }

  .mbsc-material.mbsc-button-warning.mbsc-button-outline.mbsc-focus {
    background: rgba(248, 176, 66, 0.3);
  }

  .mbsc-material.mbsc-button-info.mbsc-button-outline {
    border-color: #5bb7c5;
    color: #5bb7c5;
  }

  .mbsc-material.mbsc-button-info.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-info.mbsc-button-outline.mbsc-hover {
    background: rgba(91, 183, 197, 0.2);
  }

  .mbsc-material.mbsc-button-info.mbsc-button-outline.mbsc-focus {
    background: rgba(91, 183, 197, 0.3);
  }

  .mbsc-material.mbsc-button-dark.mbsc-button-outline {
    border-color: #47494a;
    color: #47494a;
  }

  .mbsc-material.mbsc-button-dark.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-dark.mbsc-button-outline.mbsc-hover {
    background: rgba(71, 73, 74, 0.2);
  }

  .mbsc-material.mbsc-button-dark.mbsc-button-outline.mbsc-focus {
    background: rgba(71, 73, 74, 0.3);
  }

  .mbsc-material.mbsc-button-light.mbsc-button-outline {
    border-color: #ccc;
    color: #ccc;
  }

  .mbsc-material.mbsc-button-light.mbsc-button-outline.mbsc-active,
  .mbsc-material.mbsc-button-light.mbsc-button-outline.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-material.mbsc-button-light.mbsc-button-outline.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.3);
  }

  .mbsc-material-dark.mbsc-button-standard {
    background: #2b2b2b;
    color: #fff;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material-dark.mbsc-button-standard.mbsc-hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material-dark.mbsc-button-standard.mbsc-active,
  .mbsc-material-dark.mbsc-button-standard.mbsc-focus {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .mbsc-material-dark.mbsc-button-flat,
  .mbsc-material-dark.mbsc-button-outline {
    color: #fff;
  }

  .mbsc-material-dark.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-flat.mbsc-hover,
  .mbsc-material-dark.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-outline.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-material-dark.mbsc-button-flat.mbsc-focus,
  .mbsc-material-dark.mbsc-button-outline.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.3);
  }

  .mbsc-material-dark.mbsc-button-outline {
    border-color: #fff;
  }

  .mbsc-material-dark.mbsc-button-primary.mbsc-button-standard {
    background: #3f97f6;
    color: #000;
  }

  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-standard {
    background: #90979e;
    color: #000;
  }

  .mbsc-material-dark.mbsc-button-success.mbsc-button-standard {
    background: #43be5f;
    color: #000;
  }

  .mbsc-material-dark.mbsc-button-danger.mbsc-button-standard {
    background: #f5504e;
    color: #000;
  }

  .mbsc-material-dark.mbsc-button-warning.mbsc-button-standard {
    background: #f8b042;
    color: #000;
  }

  .mbsc-material-dark.mbsc-button-info.mbsc-button-standard {
    background: #5bb7c5;
    color: #000;
  }

  .mbsc-material-dark.mbsc-button-dark.mbsc-button-standard {
    background: #47494a;
    color: #000;
  }

  .mbsc-material-dark.mbsc-button-light.mbsc-button-standard {
    background: #fff;
    color: #fff;
  }

  .mbsc-material-dark.mbsc-button-primary.mbsc-button-flat {
    color: #3f97f6;
  }

  .mbsc-material-dark.mbsc-button-primary.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-primary.mbsc-button-flat.mbsc-hover {
    background: rgba(63, 151, 246, 0.2);
  }

  .mbsc-material-dark.mbsc-button-primary.mbsc-button-flat.mbsc-focus {
    background: rgba(63, 151, 246, 0.3);
  }

  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-flat {
    color: #90979e;
  }

  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-flat.mbsc-hover {
    background: rgba(144, 151, 158, 0.2);
  }

  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-flat.mbsc-focus {
    background: rgba(144, 151, 158, 0.3);
  }

  .mbsc-material-dark.mbsc-button-success.mbsc-button-flat {
    color: #43be5f;
  }

  .mbsc-material-dark.mbsc-button-success.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-success.mbsc-button-flat.mbsc-hover {
    background: rgba(67, 190, 95, 0.2);
  }

  .mbsc-material-dark.mbsc-button-success.mbsc-button-flat.mbsc-focus {
    background: rgba(67, 190, 95, 0.3);
  }

  .mbsc-material-dark.mbsc-button-danger.mbsc-button-flat {
    color: #f5504e;
  }

  .mbsc-material-dark.mbsc-button-danger.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-danger.mbsc-button-flat.mbsc-hover {
    background: rgba(245, 80, 78, 0.2);
  }

  .mbsc-material-dark.mbsc-button-danger.mbsc-button-flat.mbsc-focus {
    background: rgba(245, 80, 78, 0.3);
  }

  .mbsc-material-dark.mbsc-button-warning.mbsc-button-flat {
    color: #f8b042;
  }

  .mbsc-material-dark.mbsc-button-warning.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-warning.mbsc-button-flat.mbsc-hover {
    background: rgba(248, 176, 66, 0.2);
  }

  .mbsc-material-dark.mbsc-button-warning.mbsc-button-flat.mbsc-focus {
    background: rgba(248, 176, 66, 0.3);
  }

  .mbsc-material-dark.mbsc-button-info.mbsc-button-flat {
    color: #5bb7c5;
  }

  .mbsc-material-dark.mbsc-button-info.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-info.mbsc-button-flat.mbsc-hover {
    background: rgba(91, 183, 197, 0.2);
  }

  .mbsc-material-dark.mbsc-button-info.mbsc-button-flat.mbsc-focus {
    background: rgba(91, 183, 197, 0.3);
  }

  .mbsc-material-dark.mbsc-button-dark.mbsc-button-flat {
    color: #47494a;
  }

  .mbsc-material-dark.mbsc-button-dark.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-dark.mbsc-button-flat.mbsc-hover {
    background: rgba(71, 73, 74, 0.2);
  }

  .mbsc-material-dark.mbsc-button-dark.mbsc-button-flat.mbsc-focus {
    background: rgba(71, 73, 74, 0.3);
  }

  .mbsc-material-dark.mbsc-button-light.mbsc-button-flat {
    color: #ccc;
  }

  .mbsc-material-dark.mbsc-button-light.mbsc-button-flat.mbsc-active,
  .mbsc-material-dark.mbsc-button-light.mbsc-button-flat.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-material-dark.mbsc-button-light.mbsc-button-flat.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.3);
  }

  .mbsc-material-dark.mbsc-button-primary.mbsc-button-outline {
    border-color: #3f97f6;
    color: #3f97f6;
  }

  .mbsc-material-dark.mbsc-button-primary.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-primary.mbsc-button-outline.mbsc-hover {
    background: rgba(63, 151, 246, 0.2);
  }

  .mbsc-material-dark.mbsc-button-primary.mbsc-button-outline.mbsc-focus {
    background: rgba(63, 151, 246, 0.3);
  }

  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-outline {
    border-color: #90979e;
    color: #90979e;
  }

  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-outline.mbsc-hover {
    background: rgba(144, 151, 158, 0.2);
  }

  .mbsc-material-dark.mbsc-button-secondary.mbsc-button-outline.mbsc-focus {
    background: rgba(144, 151, 158, 0.3);
  }

  .mbsc-material-dark.mbsc-button-success.mbsc-button-outline {
    border-color: #43be5f;
    color: #43be5f;
  }

  .mbsc-material-dark.mbsc-button-success.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-success.mbsc-button-outline.mbsc-hover {
    background: rgba(67, 190, 95, 0.2);
  }

  .mbsc-material-dark.mbsc-button-success.mbsc-button-outline.mbsc-focus {
    background: rgba(67, 190, 95, 0.3);
  }

  .mbsc-material-dark.mbsc-button-danger.mbsc-button-outline {
    border-color: #f5504e;
    color: #f5504e;
  }

  .mbsc-material-dark.mbsc-button-danger.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-danger.mbsc-button-outline.mbsc-hover {
    background: rgba(245, 80, 78, 0.2);
  }

  .mbsc-material-dark.mbsc-button-danger.mbsc-button-outline.mbsc-focus {
    background: rgba(245, 80, 78, 0.3);
  }

  .mbsc-material-dark.mbsc-button-warning.mbsc-button-outline {
    border-color: #f8b042;
    color: #f8b042;
  }

  .mbsc-material-dark.mbsc-button-warning.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-warning.mbsc-button-outline.mbsc-hover {
    background: rgba(248, 176, 66, 0.2);
  }

  .mbsc-material-dark.mbsc-button-warning.mbsc-button-outline.mbsc-focus {
    background: rgba(248, 176, 66, 0.3);
  }

  .mbsc-material-dark.mbsc-button-info.mbsc-button-outline {
    border-color: #5bb7c5;
    color: #5bb7c5;
  }

  .mbsc-material-dark.mbsc-button-info.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-info.mbsc-button-outline.mbsc-hover {
    background: rgba(91, 183, 197, 0.2);
  }

  .mbsc-material-dark.mbsc-button-info.mbsc-button-outline.mbsc-focus {
    background: rgba(91, 183, 197, 0.3);
  }

  .mbsc-material-dark.mbsc-button-dark.mbsc-button-outline {
    border-color: #47494a;
    color: #47494a;
  }

  .mbsc-material-dark.mbsc-button-dark.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-dark.mbsc-button-outline.mbsc-hover {
    background: rgba(71, 73, 74, 0.2);
  }

  .mbsc-material-dark.mbsc-button-dark.mbsc-button-outline.mbsc-focus {
    background: rgba(71, 73, 74, 0.3);
  }

  .mbsc-material-dark.mbsc-button-light.mbsc-button-outline {
    border-color: #ccc;
    color: #ccc;
  }

  .mbsc-material-dark.mbsc-button-light.mbsc-button-outline.mbsc-active,
  .mbsc-material-dark.mbsc-button-light.mbsc-button-outline.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-material-dark.mbsc-button-light.mbsc-button-outline.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.3);
  }

  .mbsc-button {
    position: relative;
    z-index: 1;
    display: inline-block;
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 1em;
    box-sizing: border-box;
    touch-action: manipulation;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .mbsc-button.mbsc-disabled,
  .mbsc-button:disabled {
    cursor: not-allowed;
  }

  .mbsc-button:focus {
    outline: 0;
  }

  .mbsc-button::-moz-focus-inner {
    border: 0;
  }

  .mbsc-icon-button {
    width: 2.5em;
    height: 2.5em;
    padding: 0.5em;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -moz-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .mbsc-button-icon > *,
  .mbsc-button-icon > * > * {
    height: 100%;
  }

  .mbsc-button-icon-end {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -moz-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }

  .mbsc-button-group,
  .mbsc-button-group-block,
  .mbsc-button-group-justified {
    border: 1px solid transparent;
  }

  .mbsc-button-block,
  .mbsc-button-group-block .mbsc-button {
    display: block;
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .mbsc-button-group-justified,
  .mbsc-button-group-justified mbsc-button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .mbsc-button-group-justified .mbsc-button,
  .mbsc-button-group-justified mbsc-button {
    -webkit-box-flex: 1;
    -webkit-flex: 1 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 auto;
    flex: 1 auto;
  }

  .mbsc-material.mbsc-popup-body-anchored,
  .mbsc-material.mbsc-popup-body-center,
  .mbsc-material.mbsc-popup-body-round {
    border-radius: 0.25em;
  }

  .mbsc-material.mbsc-popup-header {
    font-size: 1.25em;
    font-weight: 500;
    padding: 0.8em 0.8em 0;
    line-height: 1.4em;
  }

  .mbsc-material.mbsc-popup-buttons {
    padding: 0.5em;
  }

  .mbsc-material.mbsc-popup-buttons.mbsc-ltr,
  .mbsc-material.mbsc-popup-buttons.mbsc-rtl {
    text-align: right;
  }

  .mbsc-material.mbsc-popup-button.mbsc-button-flat {
    margin-left: 0;
    margin-right: 0;
  }

  .mbsc-material.mbsc-popup-button.mbsc-font {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 0.9375em;
  }

  .mbsc-material.mbsc-popup-round .mbsc-popup-body-bottom-full {
    border-radius: 0.25em 0.25em 0 0;
  }

  .mbsc-material.mbsc-popup-round .mbsc-popup-body-top-full {
    border-radius: 0 0 0.25em 0.25em;
  }

  .mbsc-material.mbsc-popup-body {
    background: #fff;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    color: #303030;
  }

  .mbsc-material.mbsc-popup-arrow {
    background: #fff;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  }

  .mbsc-material.mbsc-popup-button.mbsc-font {
    color: #1a73e8;
  }

  .mbsc-material-dark.mbsc-popup-body {
    background: #303030;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    color: #fff;
  }

  .mbsc-material-dark.mbsc-popup-arrow {
    background: #303030;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  }

  .mbsc-material-dark.mbsc-popup-button.mbsc-font {
    color: #87b0f3;
  }

  @-webkit-keyframes mbsc-fade-in {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes mbsc-fade-in {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes mbsc-fade-out {
    0% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes mbsc-fade-out {
    0% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-webkit-keyframes mbsc-pop-in {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes mbsc-pop-in {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes mbsc-pop-out {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      opacity: 0;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
  }

  @keyframes mbsc-pop-out {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      opacity: 0;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
  }

  @-webkit-keyframes mbsc-slide-up-in {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes mbsc-slide-up-in {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes mbsc-slide-up-out {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @keyframes mbsc-slide-up-out {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @-webkit-keyframes mbsc-slide-down-in {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes mbsc-slide-down-in {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes mbsc-slide-down-out {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @keyframes mbsc-slide-down-out {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  .mbsc-popup-open-ios {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
  }

  .mbsc-popup-ctx {
    position: relative;
    --mbsc-safe-top: 0;
    --mbsc-safe-right: 0;
    --mbsc-safe-bottom: 0;
    --mbsc-safe-left: 0;
  }

  .mbsc-popup-limits {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .mbsc-popup-limits-anchored,
  .mbsc-popup-limits-center {
    margin: 1em;
  }

  .mbsc-popup-wrapper {
    z-index: 99998;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .mbsc-popup,
  .mbsc-popup-wrapper {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-popup-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border: 0 solid transparent;
  }

  .mbsc-popup-wrapper-ctx {
    position: absolute;
    right: auto;
    bottom: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .mbsc-popup-wrapper-center {
    padding: 1em;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-width: var(--mbsc-safe-top) var(--mbsc-safe-right)
      var(--mbsc-safe-bottom) var(--mbsc-safe-left);
  }

  .mbsc-popup-wrapper-top {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -moz-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-bottom: var(--mbsc-safe-bottom) solid transparent;
  }

  .mbsc-popup-wrapper-bottom {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -moz-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    border-top-width: var(--mbsc-safe-top);
  }

  .mbsc-popup-wrapper-anchored {
    border-left-width: var(--mbsc-safe-left);
    border-bottom-width: var(--mbsc-safe-bottom);
    border-right-width: var(--mbsc-safe-right);
    border-top-width: 0;
  }

  .mbsc-popup-hidden {
    opacity: 0;
  }

  .mbsc-popup-overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -10em;
    pointer-events: auto;
    background: rgba(0, 0, 0, 0.5);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .mbsc-popup-overlay-in {
    opacity: 1;
    -webkit-animation: mbsc-fade-in 0.15s cubic-bezier(0, 0, 0.2, 1);
    animation: mbsc-fade-in 0.15s cubic-bezier(0, 0, 0.2, 1);
  }

  .mbsc-popup-overlay-out {
    opacity: 0;
    -webkit-animation: mbsc-fade-out 75ms cubic-bezier(0.4, 0, 1, 1);
    animation: mbsc-fade-out 75ms cubic-bezier(0.4, 0, 1, 1);
  }

  .mbsc-popup {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: 100%;
    min-width: 12em;
    position: relative;
    z-index: 2;
    pointer-events: auto;
    text-shadow: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .mbsc-popup-center {
    min-width: 16em;
  }

  .mbsc-popup-bottom {
    width: 100%;
    bottom: 0;
  }

  .mbsc-popup-top {
    width: 100%;
    top: 0;
  }

  .mbsc-popup-anchored {
    position: absolute;
  }

  .mbsc-popup-anchored-left {
    margin-left: -1em;
  }

  .mbsc-popup-anchored-right {
    margin-left: 1em;
  }

  .mbsc-popup-arrow-wrapper {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    pointer-events: none;
  }

  .mbsc-popup-arrow-wrapper-bottom,
  .mbsc-popup-arrow-wrapper-top {
    left: 0;
    right: 0;
    height: 2em;
  }

  .mbsc-popup-arrow-wrapper-left,
  .mbsc-popup-arrow-wrapper-right {
    top: 0;
    bottom: 0;
    width: 2em;
  }

  .mbsc-popup-arrow-wrapper-top {
    top: 100%;
  }

  .mbsc-popup-arrow-wrapper-bottom {
    bottom: 100%;
  }

  .mbsc-popup-arrow-wrapper-left {
    left: 100%;
  }

  .mbsc-popup-arrow-wrapper-right {
    right: 100%;
  }

  .mbsc-popup-arrow {
    position: absolute;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 1.5em;
    height: 1.5em;
    pointer-events: auto;
  }

  .mbsc-popup-arrow-top {
    bottom: 1.25em;
  }

  .mbsc-popup-arrow-bottom {
    top: 1.25em;
  }

  .mbsc-popup-arrow-bottom,
  .mbsc-popup-arrow-top {
    left: 50%;
    margin-left: -0.75em;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .mbsc-popup-arrow-left {
    right: 1.25em;
  }

  .mbsc-popup-arrow-right {
    left: 1.25em;
  }

  .mbsc-popup-arrow-left,
  .mbsc-popup-arrow-right {
    top: 50%;
    margin-top: -0.75em;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .mbsc-popup-focus {
    outline: 0;
  }

  .mbsc-popup-body {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .mbsc-popup-body-top {
    padding-top: var(--mbsc-safe-top);
  }

  .mbsc-popup-body-bottom {
    padding-bottom: var(--mbsc-safe-bottom);
  }

  .mbsc-popup-body-bottom,
  .mbsc-popup-body-top {
    padding-left: var(--mbsc-safe-left);
    padding-right: var(--mbsc-safe-right);
  }

  .mbsc-popup-body-round {
    padding: 0;
  }

  .mbsc-popup-header {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mbsc-popup-content {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 1 auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    flex: 1 1 auto;
  }

  .mbsc-popup-padding {
    padding: 1em;
  }

  .mbsc-popup-buttons {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -moz-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }

  .mbsc-popup-pop-in {
    opacity: 1;
    -webkit-animation: mbsc-pop-in 0.15s cubic-bezier(0, 0, 0.2, 1);
    animation: mbsc-pop-in 0.15s cubic-bezier(0, 0, 0.2, 1);
  }

  .mbsc-popup-pop-out {
    opacity: 0;
    -webkit-animation: mbsc-pop-out 75ms cubic-bezier(0.4, 0, 1, 1);
    animation: mbsc-pop-out 75ms cubic-bezier(0.4, 0, 1, 1);
  }

  .mbsc-popup-slide-up-in {
    -webkit-animation: mbsc-slide-up-in 0.25s cubic-bezier(0, 0, 0.2, 1);
    animation: mbsc-slide-up-in 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  .mbsc-popup-slide-up-out {
    -webkit-animation: mbsc-slide-up-out 0.2s cubic-bezier(0.4, 0, 1, 1);
    animation: mbsc-slide-up-out 0.2s cubic-bezier(0.4, 0, 1, 1);
  }

  .mbsc-popup-slide-down-in {
    -webkit-animation: mbsc-slide-down-in 0.25s cubic-bezier(0, 0, 0.2, 1);
    animation: mbsc-slide-down-in 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  .mbsc-popup-slide-down-out {
    -webkit-animation: mbsc-slide-down-out 0.2s cubic-bezier(0.4, 0, 1, 1);
    animation: mbsc-slide-down-out 0.2s cubic-bezier(0.4, 0, 1, 1);
  }

  .mbsc-popup-pointer.mbsc-picker .mbsc-popup-overlay,
  .mbsc-popup-pointer .mbsc-popup-overlay-anchored {
    background: none;
  }

  .mbsc-popup-round .mbsc-popup-slide-up-in {
    -webkit-animation-name: mbsc-slide-up-in, mbsc-fade-in;
    animation-name: mbsc-slide-up-in, mbsc-fade-in;
  }

  .mbsc-popup-round .mbsc-popup-slide-up-out {
    -webkit-animation-name: mbsc-slide-up-out, mbsc-fade-out;
    animation-name: mbsc-slide-up-out, mbsc-fade-out;
  }

  .mbsc-popup-round .mbsc-popup-slide-down-in {
    -webkit-animation-name: mbsc-slide-down-in, mbsc-fade-in;
    animation-name: mbsc-slide-down-in, mbsc-fade-in;
  }

  .mbsc-popup-round .mbsc-popup-slide-down-out {
    -webkit-animation-name: mbsc-slide-down-out, mbsc-fade-out;
    animation-name: mbsc-slide-down-out, mbsc-fade-out;
  }

  .mbsc-popup-round .mbsc-popup-bottom,
  .mbsc-popup-round .mbsc-popup-top {
    width: auto;
    margin-top: 3em;
    margin-bottom: 3em;
  }

  .mbsc-material.mbsc-calendar-wrapper-fixed:after {
    content: "";
    position: absolute;
    z-index: 4;
    bottom: -0.5em;
    left: 0;
    right: 0;
    height: 0.5em;
    pointer-events: none;
  }

  .mbsc-material.mbsc-calendar-controls {
    padding: 0.5em;
  }

  .mbsc-material.mbsc-calendar-header .mbsc-calendar-week-days {
    padding: 0 0.5em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-material.mbsc-calendar-week-day {
    height: 2.5em;
    line-height: 2.5em;
    font-size: 0.75em;
    font-weight: 700;
  }

  .mbsc-material.mbsc-calendar-week-nr {
    width: 2.363637em;
    font-size: 0.6875em;
    line-height: 3em;
    font-weight: 700;
  }

  .mbsc-material.mbsc-calendar-button.mbsc-button {
    padding: 0.428572em;
  }

  .mbsc-material.mbsc-calendar-title {
    font-size: ${props.theme.typography.fontSize.base};
    font-weight: ${props.theme.typography.fontWeight.light};
    text-transform: none;
    line-height: 1.4em;
  }

  .mbsc-material.mbsc-calendar-cell-text {
    height: 2em;
    padding: 0 0.5em;
    line-height: 2em;
    border-radius: 2em;
  }

  .mbsc-material.mbsc-calendar-day-text {
    height: 1.846154em;
    width: 1.846154em;
    line-height: 1.846154em;
    margin: 0.230769em auto;
    padding: 0;
    font-size: 0.8125em;
    border: 2px solid transparent;
  }

  .mbsc-material.mbsc-range-day:after,
  .mbsc-material.mbsc-range-hover:before {
    content: "";
    height: 1.75em;
    position: absolute;
    left: 0;
    right: 0;
    top: 0.25em;
    z-index: -1;
  }

  .mbsc-material.mbsc-range-hover:before {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 1.5em;
    border-top: 2px dashed;
    border-bottom: 2px dashed;
  }

  .mbsc-material.mbsc-range-day-end.mbsc-rtl:after,
  .mbsc-material.mbsc-range-day-start.mbsc-ltr:after {
    margin-left: -0.875em;
    border-radius: 2em 0 0 2em;
    left: 50%;
    right: 0;
  }

  .mbsc-material.mbsc-range-day-end.mbsc-ltr:after,
  .mbsc-material.mbsc-range-day-start.mbsc-rtl:after {
    margin-right: -0.875em;
    border-radius: 0 2em 2em 0;
    right: 50%;
    left: 0;
  }

  .mbsc-material.mbsc-range-hover-end.mbsc-rtl:before,
  .mbsc-material.mbsc-range-hover-start.mbsc-ltr:before {
    left: 50%;
    right: 0;
  }

  .mbsc-material.mbsc-range-hover-end.mbsc-ltr:before,
  .mbsc-material.mbsc-range-hover-start.mbsc-rtl:before {
    right: 50%;
    left: 0;
  }

  .mbsc-material.mbsc-range-day-start.mbsc-range-day-end:after,
  .mbsc-material.mbsc-range-hover-start.mbsc-range-hover-end:before {
    display: none;
  }

  .mbsc-material.mbsc-calendar-marks {
    margin-top: -0.375em;
    -webkit-transition: -webkit-transform 0.1s ease-out;
    transition: -webkit-transform 0.1s ease-out;
    transition: transform 0.1s ease-out;
    transition: transform 0.1s ease-out, -webkit-transform 0.1s ease-out;
  }

  .mbsc-material.mbsc-calendar-day-colors .mbsc-calendar-marks,
  .mbsc-material.mbsc-focus .mbsc-calendar-marks,
  .mbsc-material.mbsc-highlighted .mbsc-calendar-marks,
  .mbsc-material.mbsc-hover-highlighted .mbsc-calendar-marks,
  .mbsc-material.mbsc-hover .mbsc-calendar-marks,
  .mbsc-material.mbsc-selected .mbsc-calendar-marks {
    -webkit-transform: translate3d(0, 0.25em, 0);
    transform: translate3d(0, 0.25em, 0);
  }

  .mbsc-material.mbsc-calendar-label {
    font-weight: 600;
    border-radius: 0.2em;
  }

  .mbsc-material.mbsc-calendar-label-background {
    background: currentColor;
    border-radius: 0.2em;
  }

  .mbsc-material.mbsc-calendar-text:before {
    border-radius: 0.2em;
  }

  .mbsc-material.mbsc-calendar-height-md .mbsc-calendar-slide {
    padding: 0;
  }

  .mbsc-material.mbsc-calendar-height-md .mbsc-calendar-day {
    border-left: 1px solid;
    border-bottom: 1px solid;
  }

  .mbsc-material.mbsc-calendar-height-md .mbsc-calendar-week-nr {
    padding: 0;
    font-size: 0.6875em;
    line-height: 3.636363em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-week-days {
    padding: 0;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-week-day {
    padding: 0 1em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-day-inner {
    min-height: 4em;
  }

  .mbsc-material.mbsc-calendar-width-md
    .mbsc-calendar-day-labels
    .mbsc-calendar-day-inner {
    min-height: 5.5em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-day-text {
    margin: 0.461539em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-marks {
    padding: 0 1.125em;
    margin-left: -1px;
    margin-right: -1px;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-text {
    height: 1.8em;
    line-height: 1.8em;
    margin: 0 0.4em 0.2em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-text:before {
    border-radius: 0.4em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-label {
    padding: 0 0.4em;
    border-radius: 0.4em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-label-background {
    border-radius: 0.4em;
  }

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-label-text {
    font-size: 1.2em;
  }

  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md
    .mbsc-calendar-day.mbsc-ltr,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md
    .mbsc-calendar-marks.mbsc-ltr,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md
    .mbsc-calendar-week-day.mbsc-ltr {
    text-align: left;
  }

  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md
    .mbsc-calendar-day.mbsc-rtl,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md
    .mbsc-calendar-marks.mbsc-rtl,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md
    .mbsc-calendar-week-day.mbsc-rtl {
    text-align: right;
  }

  .mbsc-material.mbsc-calendar-wrapper:after {
    box-shadow: inset 0 0.5em 0.25em -0.5em rgba(48, 48, 48, 0.5);
  }

  .mbsc-material.mbsc-calendar-button.mbsc-button {
    color: #303030;
  }

  .mbsc-material.mbsc-calendar-picker-slide,
  .mbsc-material.mbsc-calendar-slide {
    background: #fff;
  }

  .mbsc-material.mbsc-calendar-week-day {
    color: rgba(48, 48, 48, 0.7);
  }

  .mbsc-material.mbsc-calendar-cell-text {
    color: #303030;
  }

  .mbsc-material.mbsc-calendar-today {
    color: #1a73e8;
  }

  .mbsc-material.mbsc-focus .mbsc-calendar-cell-text {
    box-shadow: 0 0 0 2px rgba(48, 48, 48, 0.7);
  }

  .mbsc-material.mbsc-hover .mbsc-calendar-cell-text {
    background: rgba(0, 0, 0, 0.1);
  }

  .mbsc-material.mbsc-range-hover:before {
    border-color: #e6e6e6;
  }

  .mbsc-material.mbsc-range-day:after {
    background-color: rgba(26, 115, 232, 0.25);
  }

  .mbsc-material.mbsc-selected .mbsc-calendar-cell-text {
    background: #1a73e8;
    border-color: #1a73e8;
    color: #fff;
  }

  .mbsc-material.mbsc-calendar-mark {
    background: #1a73e8;
  }

  .mbsc-material.mbsc-calendar-label {
    color: #1a73e8;
  }

  .mbsc-material.mbsc-calendar-label-inner {
    color: #fff;
  }

  .mbsc-material.mbsc-calendar-label.mbsc-calendar-label-active,
  .mbsc-material.mbsc-calendar-label.mbsc-calendar-label-dragging {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
      0 1px 3px -1px rgba(0, 0, 0, 0.2);
  }

  .mbsc-material.mbsc-calendar-text-more {
    box-shadow: none;
  }

  .mbsc-material.mbsc-calendar-text-more .mbsc-calendar-label-text {
    color: #303030;
  }

  .mbsc-material.mbsc-calendar-popup .mbsc-popup-arrow,
  .mbsc-material.mbsc-calendar-popup .mbsc-popup-body {
    background: #fff;
  }

  .mbsc-material.mbsc-calendar-height-md .mbsc-calendar-day,
  .mbsc-material.mbsc-calendar-height-md .mbsc-calendar-week-day {
    border-color: #cfcfcf;
  }

  .mbsc-material-dark.mbsc-calendar-wrapper:after {
    box-shadow: inset 0 0.5em 0.25em -0.5em hsla(0, 0%, 100%, 0.5);
  }

  .mbsc-material-dark.mbsc-calendar-button.mbsc-button {
    color: #fff;
  }

  .mbsc-material-dark.mbsc-calendar-slide {
    background: #000;
  }

  .mbsc-material-dark.mbsc-calendar-picker-slide {
    background: #303030;
  }

  .mbsc-material-dark.mbsc-calendar-week-day {
    color: hsla(0, 0%, 100%, 0.7);
  }

  .mbsc-material-dark.mbsc-calendar-cell-text {
    color: #fff;
  }

  .mbsc-material-dark.mbsc-calendar-today {
    color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-focus .mbsc-calendar-cell-text {
    box-shadow: 0 0 0 2px hsla(0, 0%, 100%, 0.7);
  }

  .mbsc-material-dark.mbsc-hover .mbsc-calendar-cell-text {
    background: hsla(0, 0%, 100%, 0.1);
  }

  .mbsc-material-dark.mbsc-range-hover:before {
    border-color: #1a1a1a;
  }

  .mbsc-material-dark.mbsc-range-day:after {
    background-color: rgba(135, 176, 243, 0.25);
  }

  .mbsc-material-dark.mbsc-selected .mbsc-calendar-cell-text {
    background: #87b0f3;
    border-color: #87b0f3;
    color: #000;
  }

  .mbsc-material-dark.mbsc-calendar-mark {
    background: #87b0f3;
  }

  .mbsc-material-dark.mbsc-calendar-label {
    color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-calendar-label-inner {
    color: #000;
  }

  .mbsc-material-dark.mbsc-calendar-label.mbsc-calendar-label-active,
  .mbsc-material-dark.mbsc-calendar-label.mbsc-calendar-label-dragging {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
      0 1px 3px -1px rgba(0, 0, 0, 0.2);
  }

  .mbsc-material-dark.mbsc-calendar-text-more {
    box-shadow: none;
  }

  .mbsc-material-dark.mbsc-calendar-text-more .mbsc-calendar-label-text {
    color: #fff;
  }

  .mbsc-material-dark.mbsc-calendar-popup .mbsc-popup-arrow,
  .mbsc-material-dark.mbsc-calendar-popup .mbsc-popup-body {
    background: #303030;
  }

  .mbsc-material-dark.mbsc-calendar-height-md .mbsc-calendar-day,
  .mbsc-material-dark.mbsc-calendar-height-md .mbsc-calendar-week-day {
    border-color: #2b2b2b;
  }

  @-webkit-keyframes mbsc-zoom-in-up {
    0% {
      opacity: 0;
      -webkit-transform: scale(2);
      transform: scale(2);
    }
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes mbsc-zoom-in-up {
    0% {
      opacity: 0;
      -webkit-transform: scale(2);
      transform: scale(2);
    }
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes mbsc-zoom-in-down {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes mbsc-zoom-in-down {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes mbsc-zoom-out-up {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      opacity: 0;
      -webkit-transform: scale(2);
      transform: scale(2);
    }
  }

  @keyframes mbsc-zoom-out-up {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      opacity: 0;
      -webkit-transform: scale(2);
      transform: scale(2);
    }
  }

  @-webkit-keyframes mbsc-zoom-out-down {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      opacity: 0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }

  @keyframes mbsc-zoom-out-down {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      opacity: 0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }

  .mbsc-calendar {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    position: relative;
  }

  .mbsc-calendar-wrapper {
    position: relative;
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100%;
  }

  .mbsc-calendar-header {
    position: relative;
    z-index: 1;
    will-change: opacity;
  }

  .mbsc-calendar,
  .mbsc-calendar-controls,
  .mbsc-calendar-title-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .mbsc-calendar-controls {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    min-height: 2.5em;
  }

  .mbsc-calendar-button.mbsc-button.mbsc-reset {
    margin: 0;
  }

  .mbsc-calendar-button-prev-multi {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -moz-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
  }

  .mbsc-calendar-button-next-multi {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -moz-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }

  .mbsc-calendar-body {
    height: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: table-row;
  }

  .mbsc-calendar-body-inner {
    height: 100%;
    position: relative;
    overflow: hidden;
    margin-left: -1px;
  }

  .mbsc-calendar-wrapper-fixed {
    display: block;
    height: auto;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -moz-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .mbsc-calendar-wrapper-fixed .mbsc-calendar-header {
    display: block;
  }

  .mbsc-calendar-wrapper-fixed .mbsc-calendar-body {
    display: block;
    height: auto;
  }

  .mbsc-calendar-hidden {
    visibility: hidden;
  }

  .mbsc-calendar-title-wrapper {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }

  .mbsc-calendar-title-wrapper-multi .mbsc-calendar-button {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .mbsc-calendar-title {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.125em;
    padding: 0 0.25em;
    display: inline-block;
    vertical-align: middle;
  }

  .mbsc-calendar-scroll-wrapper {
    display: block;
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .mbsc-calendar-picker-wrapper {
    position: relative;
    width: 15em;
    height: 15em;
    overflow: hidden;
  }

  .mbsc-calendar-picker {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .mbsc-calendar-picker-main {
    position: relative;
  }

  .mbsc-calendar-picker-in-up {
    opacity: 0;
    -webkit-animation: mbsc-zoom-in-up 0.2s cubic-bezier(0, 0, 0.2, 1);
    animation: mbsc-zoom-in-up 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  .mbsc-calendar-picker-in-down {
    opacity: 0;
    -webkit-animation: mbsc-zoom-in-down 0.2s cubic-bezier(0, 0, 0.2, 1);
    animation: mbsc-zoom-in-down 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  .mbsc-calendar-picker-out-up {
    opacity: 0;
    -webkit-animation: mbsc-zoom-out-up 0.2s cubic-bezier(0.4, 0, 1, 1);
    animation: mbsc-zoom-out-up 0.2s cubic-bezier(0.4, 0, 1, 1);
  }

  .mbsc-calendar-picker-out-down {
    opacity: 0;
    -webkit-animation: mbsc-zoom-out-down 0.2s cubic-bezier(0, 0, 0.2, 1);
    animation: mbsc-zoom-out-down 0.2s cubic-bezier(0, 0, 0.2, 1);
  }

  .mbsc-calendar-scroll-wrapper > div {
    height: 100%;
  }

  .mbsc-calendar-scroll-wrapper > div > div {
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .mbsc-calendar-slide {
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-calendar-slide.mbsc-ltr {
    left: 0;
  }

  .mbsc-calendar-slide.mbsc-rtl {
    right: 0;
  }

  .mbsc-calendar-slide:first-child {
    position: relative;
  }

  .mbsc-calendar-table {
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .mbsc-calendar-table,
  .mbsc-calendar-week-days {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  .mbsc-calendar-row,
  .mbsc-calendar-table .mbsc-calendar-week-days {
    display: table-row;
  }

  .mbsc-calendar-cell,
  .mbsc-calendar-week-day {
    display: table-cell;
  }

  .mbsc-calendar-cell {
    position: relative;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
  }

  .mbsc-calendar-cell:focus {
    outline: 0;
  }

  .mbsc-calendar-cell-inner {
    display: inline-block;
    padding: 0 0.25em;
    vertical-align: middle;
  }

  .mbsc-calendar-cell.mbsc-disabled {
    cursor: not-allowed;
  }

  .mbsc-calendar-week-day {
    height: 2em;
    font-size: 0.6875em;
    line-height: 2em;
    text-align: center;
    border-bottom: 1px solid transparent;
  }

  .mbsc-calendar-month,
  .mbsc-calendar-year {
    vertical-align: middle;
  }

  .mbsc-calendar-month-text,
  .mbsc-calendar-year-text {
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 4.5em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-calendar-day {
    max-width: 14.285715%;
    text-align: center;
    vertical-align: top;
  }

  .mbsc-calendar-day-text {
    display: inline-block;
    text-align: center;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .mbsc-calendar-day-inner {
    display: table;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 1px solid transparent;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-calendar-day-hidden {
    visibility: hidden;
  }

  .mbsc-calendar-day-outer .mbsc-appquality.mbsc-calendar-day-text {
    color: ${props.theme.colors.disabled};
  }

  .mbsc-calendar-day-outer.mbsc-selected .mbsc-calendar-day-text {
    opacity: 1;
  }

  .mbsc-disabled .mbsc-calendar-cell-text {
    opacity: 0.2;
  }

  .mbsc-calendar-day-highlight:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }

  .mbsc-calendar-day-marked {
    padding-bottom: 0.25em;
  }

  .mbsc-calendar-marks {
    position: absolute;
    left: 0;
    right: 0;
    height: 0.375em;
    margin-top: -0.125em;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
  }

  .mbsc-calendar-mark {
    display: inline-block;
    vertical-align: top;
    width: 0.25em;
    height: 0.25em;
    margin: 0.0625em;
    border-radius: 0.25em;
  }

  .mbsc-calendar-labels {
    position: absolute;
    left: 0;
    right: 0;
  }

  .mbsc-calendar-label-wrapper {
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }

  .mbsc-calendar-label {
    padding: 0 0.3em;
  }

  .mbsc-calendar-text:focus {
    outline: 0;
  }

  .mbsc-calendar-label-text {
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    z-index: 2;
  }

  .mbsc-calendar-label-background,
  .mbsc-calendar-text:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
  }

  .mbsc-calendar-label.mbsc-calendar-label-hover:before {
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .mbsc-calendar-text-more {
    padding: 0 0.3em;
  }

  .mbsc-calendar-text-more.mbsc-calendar-label-active:before,
  .mbsc-calendar-text-more.mbsc-calendar-label-hover:before {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .mbsc-calendar-text {
    display: block;
    position: relative;
    height: 1.6em;
    line-height: 1.6em;
    font-size: 0.625em;
    white-space: nowrap;
    margin: 0 0.1em 0.2em;
  }

  .mbsc-calendar-text-placeholder {
    z-index: -1;
  }

  .mbsc-calendar-text.mbsc-ltr {
    text-align: left;
  }

  .mbsc-calendar-text.mbsc-rtl {
    text-align: right;
  }

  .mbsc-calendar-label-resize {
    position: absolute;
    top: 0;
    height: 100%;
    width: 0.5em;
    z-index: 2;
    cursor: ew-resize;
  }

  .mbsc-calendar-label-resize:after {
    content: "";
    display: none;
    position: absolute;
    top: 50%;
    width: 0.8em;
    height: 0.8em;
    margin-top: -0.4em;
    background: #fff;
    border-radius: 0.8em;
    border: 1px solid;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-calendar-label-resize-end.mbsc-rtl,
  .mbsc-calendar-label-resize-start.mbsc-ltr {
    left: 0;
  }

  .mbsc-calendar-label-resize-end.mbsc-ltr,
  .mbsc-calendar-label-resize-start.mbsc-rtl {
    right: 0;
  }

  .mbsc-calendar-label-resize-end.mbsc-rtl:after,
  .mbsc-calendar-label-resize-start.mbsc-ltr:after {
    left: -0.4em;
  }

  .mbsc-calendar-label-resize-end.mbsc-ltr:after,
  .mbsc-calendar-label-resize-start.mbsc-rtl:after {
    right: -0.4em;
  }

  .mbsc-calendar-label-resize-end-touch:before,
  .mbsc-calendar-label-resize-start-touch:before {
    content: "";
    position: absolute;
    top: 50%;
    margin-top: -1em;
    width: 2em;
    height: 2em;
  }

  .mbsc-calendar-label-resize-start-touch:before {
    left: -1em;
  }

  .mbsc-calendar-label-resize-end-touch:before {
    right: -1em;
  }

  .mbsc-calendar-label-dragging .mbsc-calendar-label-resize:after,
  .mbsc-calendar-label-hover .mbsc-calendar-label-resize:after {
    display: block;
  }

  .mbsc-calendar-label-inactive {
    opacity: 0.4;
  }

  .mbsc-calendar-label-hidden {
    visibility: hidden;
  }

  .mbsc-calendar-labels-dragging {
    z-index: 3;
  }

  .mbsc-material.mbsc-scroller-wheel-wrapper {
    margin: 0 0.25em;
    padding: 0.5em 0;
  }

  .mbsc-material.mbsc-scroller-wheel-cont {
    border-width: 2px;
  }

  .mbsc-material.mbsc-scroller-wheel-group {
    padding: 2em 0.25em;
  }

  .mbsc-material.mbsc-scroller-wheel-item {
    padding: 0 0.272727em;
    font-size: ${props.theme.typography.fontSize.base};
    text-align: center;
  }

  .mbsc-material.mbsc-wheel-item-multi {
    padding: 0 2em;
  }

  .mbsc-material.mbsc-wheel-checkmark {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    display: none;
    border-radius: 0.1875em;
    width: 1.3em;
    height: 1.3em;
    margin-top: -0.55em;
  }

  .mbsc-material.mbsc-wheel-checkmark:after {
    content: "";
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    display: block;
    top: 0.27273em;
    left: 0.27273em;
    width: 0.8125em;
    height: 0.4375em;
    opacity: 0;
    border: 0.125em solid;
    border-top: 0;
    border-right: 0;
    -webkit-transform: scale(0) rotate(-45deg);
    transform: scale(0) rotate(-45deg);
    -webkit-transition: -webkit-transform 0.1s ease-out;
    transition: -webkit-transform 0.1s ease-out;
    transition: transform 0.1s ease-out;
    transition: transform 0.1s ease-out, -webkit-transform 0.1s ease-out;
  }

  .mbsc-material.mbsc-wheel-checkmark.mbsc-selected:after {
    opacity: 1;
    -webkit-transform: scale(1) rotate(-45deg);
    transform: scale(1) rotate(-45deg);
  }

  .mbsc-material.mbsc-wheel-checkmark.mbsc-ltr {
    left: 0.25em;
  }

  .mbsc-material.mbsc-wheel-checkmark.mbsc-rtl {
    right: 0.25em;
  }

  .mbsc-material.mbsc-wheel-item-multi .mbsc-material.mbsc-wheel-checkmark {
    display: block;
  }

  .mbsc-material.mbsc-scroller-pointer .mbsc-scroller-wheel-group {
    padding: 0 0.5em;
  }

  .mbsc-material.mbsc-scroller-pointer .mbsc-scroller-wheel-wrapper {
    margin: 0;
    padding: 0;
  }

  .mbsc-material.mbsc-scroller-pointer .mbsc-scroller-wheel-item {
    font-size: 1em;
    padding: 0 1.25em;
  }

  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-item-multi {
    padding: 0 2em;
  }

  .mbsc-material.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-item.mbsc-ltr,
  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-item-multi.mbsc-ltr {
    text-align: left;
  }

  .mbsc-material.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-item.mbsc-rtl,
  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-item-multi.mbsc-rtl {
    text-align: right;
  }

  .mbsc-material.mbsc-scroller-wheel-cont {
    border-color: #1a73e8;
  }

  .mbsc-material.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-single,
  .mbsc-material.mbsc-scroller-wheel-multi {
    border-color: transparent;
  }

  .mbsc-material.mbsc-scroller-wheel-item.mbsc-active,
  .mbsc-material.mbsc-scroller-wheel-item.mbsc-focus,
  .mbsc-material.mbsc-scroller-wheel-item.mbsc-hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .mbsc-material.mbsc-wheel-checkmark:after {
    border-color: #1a73e8;
  }

  .mbsc-material.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-item.mbsc-selected {
    color: #1a73e8;
    background: rgba(0, 0, 0, 0.15);
  }

  .mbsc-material-dark.mbsc-scroller-wheel-cont {
    border-color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-single,
  .mbsc-material-dark.mbsc-scroller-wheel-multi {
    border-color: transparent;
  }

  .mbsc-material-dark.mbsc-scroller-wheel-item.mbsc-active,
  .mbsc-material-dark.mbsc-scroller-wheel-item.mbsc-focus,
  .mbsc-material-dark.mbsc-scroller-wheel-item.mbsc-hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .mbsc-material-dark.mbsc-wheel-checkmark:after {
    border-color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-item.mbsc-selected {
    color: #87b0f3;
    background: rgba(0, 0, 0, 0.15);
  }

  .mbsc-scroller {
    width: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .mbsc-scroller-wheel-group-cont {
    position: relative;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
  }

  .mbsc-scroller-wheel-group-cont:first-child:last-child {
    display: block;
  }

  .mbsc-scroller-wheel-group {
    margin: 0 auto;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .mbsc-scroller-wheel-group-3d {
    -webkit-perspective: 1200px;
    perspective: 1200px;
  }

  .mbsc-scroller-wheel-wrapper {
    display: block;
    max-width: 100%;
    position: relative;
    -ms-touch-action: none;
    touch-action: none;
    min-width: 80px;
  }

  .mbsc-scroller-wheel-line {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .mbsc-scroller-wheel-line,
  .mbsc-scroller-wheel-overlay {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    pointer-events: none;
  }

  .mbsc-scroller-wheel-overlay {
    z-index: 2;
    top: 0;
    bottom: 0;
  }

  .mbsc-scroller-wheel {
    display: block;
    overflow: hidden;
    margin: -1px 0;
  }

  .mbsc-scroller-wheel,
  .mbsc-scroller-wheel-cont {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .mbsc-scroller-wheel-cont {
    position: relative;
    z-index: 1;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .mbsc-scroller-wheel-cont-3d {
    overflow: hidden;
    border: 0;
  }

  .mbsc-scroller-wheel-cont-3d > div {
    position: relative;
    top: -1px;
  }

  .mbsc-scroller-items-3d {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .mbsc-scroller .mbsc-scroller-wheel,
  .mbsc-scroller .mbsc-scroller-wheel-cont {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .mbsc-scroller-wheel-item {
    display: block;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mbsc-scroller-wheel-item:focus {
    outline: 0;
  }

  .mbsc-scroller-wheel-item-3d {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .mbsc-scroller-wheel-item.mbsc-disabled {
    opacity: 0.3;
  }

  .mbsc-scroller-bar-cont {
    display: none;
    position: absolute;
    z-index: 4;
    top: 0;
    bottom: 0;
    width: 10px;
    opacity: 0;
    background: rgba(0, 0, 0, 0.05);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }

  .mbsc-scroller-bar-cont.mbsc-ltr {
    right: 0;
  }

  .mbsc-scroller-bar-cont.mbsc-rtl {
    left: 0;
  }

  .mbsc-scroller-bar-hidden {
    display: none;
  }

  .mbsc-scroller-bar-started,
  .mbsc-scroller-wheel:hover .mbsc-scroller-bar-cont {
    opacity: 1;
  }

  .mbsc-scroller-bar {
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
  }

  .mbsc-scroller-bar:after {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
  }

  .mbsc-material.mbsc-segmented {
    padding: 0.75em;
  }

  .mbsc-material.mbsc-segmented-selectbox {
    display: none;
  }

  .mbsc-material.mbsc-segmented-item:first-child .mbsc-segmented-button {
    border-top-left-radius: 0.25em;
    border-bottom-left-radius: 0.25em;
  }

  .mbsc-material.mbsc-segmented-item:first-child
    .mbsc-segmented-button.mbsc-rtl {
    border-radius: 0 0.25em 0.25em 0;
    border-right-width: 0.142858em;
  }

  .mbsc-material.mbsc-segmented-item:last-child .mbsc-segmented-button {
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    border-right-width: 0.142858em;
  }

  .mbsc-material.mbsc-segmented-item:last-child
    .mbsc-segmented-button.mbsc-rtl {
    border-radius: 0.25em 0 0 0.25em;
    border-right-width: 0;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button {
    margin: 0;
    padding: 0.285715em 1.142858em;
    border: 0.142858em solid transparent;
    border-right-width: 0;
    border-radius: 0;
    background: none;
    box-shadow: none;
    min-width: auto;
    font-size: 0.875em;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-hover {
    box-shadow: none;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-focus:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-primary {
    color: #3f97f6;
    border-color: #3f97f6;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-primary.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-primary.mbsc-hover {
    background: rgba(63, 151, 246, 0.2);
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-primary.mbsc-selected {
    background: #3f97f6;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-secondary {
    color: #90979e;
    border-color: #90979e;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-secondary.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-secondary.mbsc-hover {
    background: rgba(144, 151, 158, 0.2);
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-secondary.mbsc-selected {
    background: #90979e;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-success {
    color: #43be5f;
    border-color: #43be5f;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-success.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-success.mbsc-hover {
    background: rgba(67, 190, 95, 0.2);
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-success.mbsc-selected {
    background: #43be5f;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-danger {
    color: #f5504e;
    border-color: #f5504e;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-danger.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-danger.mbsc-hover {
    background: rgba(245, 80, 78, 0.2);
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-danger.mbsc-selected {
    background: #f5504e;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-warning {
    color: #f8b042;
    border-color: #f8b042;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-warning.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-warning.mbsc-hover {
    background: rgba(248, 176, 66, 0.2);
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-warning.mbsc-selected {
    background: #f8b042;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-info {
    color: #5bb7c5;
    border-color: #5bb7c5;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-info.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-info.mbsc-hover {
    background: rgba(91, 183, 197, 0.2);
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-button-info.mbsc-selected {
    background: #5bb7c5;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button {
    border-color: #1a73e8;
    color: #000;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-active,
  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-selected {
    background: #1a73e8;
    color: #fff;
  }

  .mbsc-material.mbsc-segmented-button.mbsc-button.mbsc-focus:after {
    background: rgba(0, 0, 0, 0.2);
  }

  .mbsc-material-dark.mbsc-segmented-button.mbsc-button {
    border-color: #87b0f3;
    color: #fff;
  }

  .mbsc-material-dark.mbsc-segmented-button.mbsc-button.mbsc-active,
  .mbsc-material-dark.mbsc-segmented-button.mbsc-button.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-material-dark.mbsc-segmented-button.mbsc-button.mbsc-selected {
    background: #87b0f3;
    color: #000;
  }

  .mbsc-material-dark.mbsc-segmented-button.mbsc-button.mbsc-focus:after {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-segmented {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
  }

  .mbsc-segmented-item {
    margin: 0;
    position: relative;
    vertical-align: top;
    text-align: center;
    font-size: 1em;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0;
    -moz-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    min-width: 0;
  }

  .mbsc-segmented-label {
    display: block;
    margin: 0;
    padding: 0;
  }

  .mbsc-segmented-input {
    width: 1px;
    height: 0;
    opacity: 0;
    position: absolute;
  }

  .mbsc-segmented-button.mbsc-button {
    width: 100%;
  }

  .mbsc-material.mbsc-picker-header {
    font-size: 1.25em;
    font-weight: 500;
    padding: 0.8em 0.8em 0;
    line-height: 1.4em;
    text-align: center;
  }

  .mbsc-material.mbsc-range-control-wrapper .mbsc-segmented {
    padding: 0;
    max-width: 100%;
    width: 18.5em;
  }

  .mbsc-material.mbsc-range-control-wrapper
    .mbsc-segmented-button.mbsc-button.mbsc-font {
    background: none;
    border: 0;
    border-bottom: 2px solid transparent;
    border-radius: 0;
    padding: 0.8571422em 1.142857em;
    display: block;
  }

  .mbsc-material.mbsc-range-control-wrapper .mbsc-segmented-button.mbsc-ltr {
    text-align: left;
  }

  .mbsc-material.mbsc-range-control-wrapper .mbsc-segmented-button.mbsc-rtl {
    text-align: right;
  }

  .mbsc-material.mbsc-range-control-wrapper
    .mbsc-range-value-nonempty
    .mbsc-segmented-button.mbsc-ltr {
    padding-right: 2.642857em;
  }

  .mbsc-material.mbsc-range-control-wrapper
    .mbsc-range-value-nonempty
    .mbsc-segmented-button.mbsc-rtl {
    padding-left: 2.642857em;
  }

  .mbsc-material.mbsc-datepicker-control-calendar.mbsc-datepicker-control-time
    .mbsc-range-control-wrapper
    .mbsc-segmented,
  .mbsc-material.mbsc-datepicker-control-date.mbsc-datepicker-control-time
    .mbsc-range-control-wrapper
    .mbsc-segmented,
  .mbsc-material.mbsc-datepicker-control-datetime
    .mbsc-range-control-wrapper
    .mbsc-segmented {
    width: 25em;
  }

  .mbsc-material.mbsc-range-control-label {
    text-transform: capitalize;
    color: ${props.theme.colors.cyan300};
  }

  .mbsc-material.mbsc-range-control-value {
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mbsc-material.mbsc-range-label-clear {
    margin-top: -0.625em;
    right: 0.75em;
    width: 1.3125em;
    height: 1.3125em;
  }

  .mbsc-material.mbsc-range-label-clear.mbsc-ltr {
    right: 0.75em;
  }

  .mbsc-material.mbsc-range-label-clear.mbsc-rtl {
    left: 0.75em;
  }

  .mbsc-material.mbsc-datepicker .mbsc-calendar-title {
    font-size: 1.142858em;
    line-height: 1.75em;
  }

  .mbsc-material.mbsc-datepicker .mbsc-calendar-slide {
    background: #fff;
  }

  .mbsc-material.mbsc-datepicker-inline {
    background: #fff;
    color: #303030;
  }

  .mbsc-material.mbsc-datepicker-inline .mbsc-calendar-slide {
    background: #fff;
  }

  .mbsc-material.mbsc-range-control-wrapper {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .mbsc-material.mbsc-range-control-wrapper
    .mbsc-material.mbsc-segmented-button.mbsc-selected {
    border-bottom-color: #1a73e8;
  }

  .mbsc-material.mbsc-range-control-label.active,
  .mbsc-material.mbsc-range-control-value.active {
    color: #1a73e8;
  }

  .mbsc-material.mbsc-range-control-text-empty,
  .mbsc-material.mbsc-range-control-text-empty.active {
    color: rgba(48, 48, 48, 0.4);
  }

  .mbsc-material.mbsc-range-label-clear {
    color: #b0b0b0;
  }

  .mbsc-material.mbsc-range-label-clear:hover {
    color: #7d7d7d;
  }

  .mbsc-material-dark.mbsc-datepicker .mbsc-calendar-slide {
    background: #303030;
  }

  .mbsc-material-dark.mbsc-datepicker-inline {
    background: #000;
    color: #fff;
  }

  .mbsc-material-dark.mbsc-datepicker-inline .mbsc-calendar-slide {
    background: #000;
  }

  .mbsc-material-dark.mbsc-range-control-wrapper {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-material-dark.mbsc-range-control-wrapper
    .mbsc-material-dark.mbsc-segmented-button.mbsc-selected {
    border-bottom-color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-range-control-label.active,
  .mbsc-material-dark.mbsc-range-control-value.active {
    color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-range-control-text-empty,
  .mbsc-material-dark.mbsc-range-control-text-empty.active {
    color: hsla(0, 0%, 100%, 0.4);
  }

  .mbsc-material-dark.mbsc-range-label-clear {
    color: grey;
  }

  .mbsc-material-dark.mbsc-range-label-clear:hover {
    color: #b3b3b3;
  }

  mbsc-datetime {
    display: block;
    width: 100%;
  }

  .mbsc-datepicker .mbsc-calendar {
    padding-bottom: 0.5em;
  }

  .mbsc-datepicker .mbsc-calendar-week-days {
    padding: 0 0.5em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: -1px;
  }

  .mbsc-range-control-wrapper .mbsc-segmented-input {
    width: 1px;
  }

  .mbsc-range-label-clear {
    position: absolute;
    top: 50%;
    display: none;
  }

  .mbsc-range-label-clear.active {
    display: block;
  }

  .mbsc-range-label-clear.mbsc-range-value-empty {
    display: none;
  }

  .mbsc-datepicker-tab-wrapper {
    position: relative;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .mbsc-datepicker-tab,
  .mbsc-datepicker-tab-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .mbsc-datepicker-tab {
    visibility: hidden;
    max-width: 100%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .mbsc-datepicker-tab-expand {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .mbsc-datepicker-tab-active {
    visibility: visible;
  }

  .mbsc-datepicker-time-modal {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    max-width: none;
    height: 100%;
  }

  .mbsc-datepicker .mbsc-calendar-slide {
    padding: 0 0.5em;
  }

  .mbsc-appquality.mbsc-calendar-wrapper:after {
    box-shadow: inset 0 0.5em 0.25em -0.5em rgba(23, 64, 92, 0.5);
  }

  .mbsc-appquality.mbsc-calendar-button.mbsc-button {
    color: ${props.theme.palette.primary};
  }

  .mbsc-appquality.mbsc-calendar-picker-slide,
  .mbsc-appquality.mbsc-calendar-slide {
    background: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-calendar-week-day {
    color: ${props.theme.palette.primary};
    font-weight: ${props.theme.typography.fontWeight.light};
    font-size: ${props.theme.typography.fontSize.base};
  }

  .mbsc-appquality.mbsc-calendar-cell-text {
    color: ${props.theme.palette.primary};
  }

  .mbsc-appquality.mbsc-calendar-today {
    color: ${props.theme.palette.primary};
    font-weight: ${props.theme.typography.fontWeight.normal};
  }

  .mbsc-appquality.mbsc-focus .mbsc-calendar-cell-text {
    box-shadow: 0 0 0 2px rgba(23, 64, 92, 0.7);
  }

  .mbsc-appquality.mbsc-hover .mbsc-calendar-cell-text {
    background: ${addOpacityToHex(props.theme.palette.info, "0.2")};
  }

  .mbsc-appquality.mbsc-range-hover:before {
    border-color: #d4d4d4;
  }

  .mbsc-appquality.mbsc-range-day:after {
    background-color: rgba(62, 173, 83, 0.25);
  }

  .mbsc-appquality.mbsc-selected .mbsc-calendar-cell-text {
    background: ${props.theme.palette.success};
    border-color: ${props.theme.palette.success};
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-calendar-mark {
    background: ${props.theme.palette.success};
  }

  .mbsc-appquality.mbsc-calendar-label {
    color: ${props.theme.palette.success};
  }

  .mbsc-appquality.mbsc-calendar-label-inner {
    color: #fff;
  }

  .mbsc-appquality.mbsc-calendar-label.mbsc-calendar-label-active,
  .mbsc-appquality.mbsc-calendar-label.mbsc-calendar-label-dragging {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12),
      0 1px 3px -1px rgba(0, 0, 0, 0.2);
  }

  .mbsc-appquality.mbsc-calendar-text-more {
    box-shadow: none;
  }

  .mbsc-appquality.mbsc-calendar-text-more .mbsc-calendar-label-text {
    color: ${props.theme.palette.primary};
  }

  .mbsc-appquality.mbsc-calendar-popup .mbsc-popup-arrow,
  .mbsc-appquality.mbsc-calendar-popup .mbsc-popup-body {
    background: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-calendar-height-md .mbsc-calendar-day,
  .mbsc-appquality.mbsc-calendar-height-md .mbsc-calendar-week-day {
    border-color: #bdbdbd;
  }

  .mbsc-appquality.mbsc-datepicker .mbsc-calendar-slide {
    background: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-datepicker-inline {
    background: ${props.theme.colors.white};
    color: ${props.theme.palette.primary};
  }

  .mbsc-appquality.mbsc-datepicker-inline .mbsc-calendar-slide {
    background: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-range-control-wrapper {
    border-bottom: 1px solid ${props.theme.colors.disabled};
  }

  .mbsc-appquality.mbsc-range-control-wrapper
    .mbsc-appquality.mbsc-segmented-button.mbsc-selected {
    border-bottom-color: ${props.theme.palette.success};
  }

  .mbsc-appquality.mbsc-range-control-label.active {
    color: ${props.theme.palette.info};
    font-weight: ${props.theme.typography.fontWeight.normal};
  }
  .mbsc-appquality.mbsc-range-control-value.active {
    color: ${props.theme.palette.success};
  }

  .mbsc-appquality.mbsc-range-control-text-empty,
  .mbsc-appquality.mbsc-range-control-text-empty.active {
    color: ${props.theme.colors.disabled};
    text-transform: capitalize;
  }

  .mbsc-appquality.mbsc-range-label-clear {
    color: #8fc1e3;
  }

  .mbsc-appquality.mbsc-range-label-clear:hover {
    color: #3d94cf;
  }

  .mbsc-appquality.mbsc-button-standard {
    background: #bdbdbd;
    color: #000;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-appquality.mbsc-button-standard.mbsc-hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-appquality.mbsc-button-standard.mbsc-active,
  .mbsc-appquality.mbsc-button-standard.mbsc-focus {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .mbsc-appquality.mbsc-button-flat,
  .mbsc-appquality.mbsc-button-outline {
    color: #000;
  }

  .mbsc-appquality.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-flat.mbsc-hover,
  .mbsc-appquality.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-outline.mbsc-hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .mbsc-appquality.mbsc-button-flat.mbsc-focus,
  .mbsc-appquality.mbsc-button-outline.mbsc-focus {
    background: rgba(0, 0, 0, 0.3);
  }

  .mbsc-appquality.mbsc-button-outline {
    border-color: #000;
  }

  .mbsc-appquality.mbsc-button-primary.mbsc-button-standard {
    background: #3f97f6;
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-button-secondary.mbsc-button-standard {
    background: #90979e;
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-button-success.mbsc-button-standard {
    background: #43be5f;
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-button-danger.mbsc-button-standard {
    background: #f5504e;
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-button-warning.mbsc-button-standard {
    background: #f8b042;
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-button-info.mbsc-button-standard {
    background: #5bb7c5;
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-button-dark.mbsc-button-standard {
    background: #47494a;
    color: ${props.theme.colors.white};
  }

  .mbsc-appquality.mbsc-button-light.mbsc-button-standard {
    background: #fff;
    color: ${props.theme.palette.primary};
  }

  .mbsc-appquality.mbsc-button-primary.mbsc-button-flat {
    color: #3f97f6;
  }

  .mbsc-appquality.mbsc-button-primary.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-primary.mbsc-button-flat.mbsc-hover {
    background: rgba(63, 151, 246, 0.2);
  }

  .mbsc-appquality.mbsc-button-primary.mbsc-button-flat.mbsc-focus {
    background: rgba(63, 151, 246, 0.3);
  }

  .mbsc-appquality.mbsc-button-secondary.mbsc-button-flat {
    color: #90979e;
  }

  .mbsc-appquality.mbsc-button-secondary.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-secondary.mbsc-button-flat.mbsc-hover {
    background: rgba(144, 151, 158, 0.2);
  }

  .mbsc-appquality.mbsc-button-secondary.mbsc-button-flat.mbsc-focus {
    background: rgba(144, 151, 158, 0.3);
  }

  .mbsc-appquality.mbsc-button-success.mbsc-button-flat {
    color: #43be5f;
  }

  .mbsc-appquality.mbsc-button-success.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-success.mbsc-button-flat.mbsc-hover {
    background: rgba(67, 190, 95, 0.2);
  }

  .mbsc-appquality.mbsc-button-success.mbsc-button-flat.mbsc-focus {
    background: rgba(67, 190, 95, 0.3);
  }

  .mbsc-appquality.mbsc-button-danger.mbsc-button-flat {
    color: #f5504e;
  }

  .mbsc-appquality.mbsc-button-danger.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-danger.mbsc-button-flat.mbsc-hover {
    background: rgba(245, 80, 78, 0.2);
  }

  .mbsc-appquality.mbsc-button-danger.mbsc-button-flat.mbsc-focus {
    background: rgba(245, 80, 78, 0.3);
  }

  .mbsc-appquality.mbsc-button-warning.mbsc-button-flat {
    color: #f8b042;
  }

  .mbsc-appquality.mbsc-button-warning.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-warning.mbsc-button-flat.mbsc-hover {
    background: rgba(248, 176, 66, 0.2);
  }

  .mbsc-appquality.mbsc-button-warning.mbsc-button-flat.mbsc-focus {
    background: rgba(248, 176, 66, 0.3);
  }

  .mbsc-appquality.mbsc-button-info.mbsc-button-flat {
    color: #5bb7c5;
  }

  .mbsc-appquality.mbsc-button-info.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-info.mbsc-button-flat.mbsc-hover {
    background: rgba(91, 183, 197, 0.2);
  }

  .mbsc-appquality.mbsc-button-info.mbsc-button-flat.mbsc-focus {
    background: rgba(91, 183, 197, 0.3);
  }

  .mbsc-appquality.mbsc-button-dark.mbsc-button-flat {
    color: #47494a;
  }

  .mbsc-appquality.mbsc-button-dark.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-dark.mbsc-button-flat.mbsc-hover {
    background: rgba(71, 73, 74, 0.2);
  }

  .mbsc-appquality.mbsc-button-dark.mbsc-button-flat.mbsc-focus {
    background: rgba(71, 73, 74, 0.3);
  }

  .mbsc-appquality.mbsc-button-light.mbsc-button-flat {
    color: #ccc;
  }

  .mbsc-appquality.mbsc-button-light.mbsc-button-flat.mbsc-active,
  .mbsc-appquality.mbsc-button-light.mbsc-button-flat.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-appquality.mbsc-button-light.mbsc-button-flat.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.3);
  }

  .mbsc-appquality.mbsc-button-primary.mbsc-button-outline {
    border-color: #3f97f6;
    color: #3f97f6;
  }

  .mbsc-appquality.mbsc-button-primary.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-primary.mbsc-button-outline.mbsc-hover {
    background: rgba(63, 151, 246, 0.2);
  }

  .mbsc-appquality.mbsc-button-primary.mbsc-button-outline.mbsc-focus {
    background: rgba(63, 151, 246, 0.3);
  }

  .mbsc-appquality.mbsc-button-secondary.mbsc-button-outline {
    border-color: #90979e;
    color: #90979e;
  }

  .mbsc-appquality.mbsc-button-secondary.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-secondary.mbsc-button-outline.mbsc-hover {
    background: rgba(144, 151, 158, 0.2);
  }

  .mbsc-appquality.mbsc-button-secondary.mbsc-button-outline.mbsc-focus {
    background: rgba(144, 151, 158, 0.3);
  }

  .mbsc-appquality.mbsc-button-success.mbsc-button-outline {
    border-color: #43be5f;
    color: #43be5f;
  }

  .mbsc-appquality.mbsc-button-success.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-success.mbsc-button-outline.mbsc-hover {
    background: rgba(67, 190, 95, 0.2);
  }

  .mbsc-appquality.mbsc-button-success.mbsc-button-outline.mbsc-focus {
    background: rgba(67, 190, 95, 0.3);
  }

  .mbsc-appquality.mbsc-button-danger.mbsc-button-outline {
    border-color: #f5504e;
    color: #f5504e;
  }

  .mbsc-appquality.mbsc-button-danger.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-danger.mbsc-button-outline.mbsc-hover {
    background: rgba(245, 80, 78, 0.2);
  }

  .mbsc-appquality.mbsc-button-danger.mbsc-button-outline.mbsc-focus {
    background: rgba(245, 80, 78, 0.3);
  }

  .mbsc-appquality.mbsc-button-warning.mbsc-button-outline {
    border-color: #f8b042;
    color: #f8b042;
  }

  .mbsc-appquality.mbsc-button-warning.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-warning.mbsc-button-outline.mbsc-hover {
    background: rgba(248, 176, 66, 0.2);
  }

  .mbsc-appquality.mbsc-button-warning.mbsc-button-outline.mbsc-focus {
    background: rgba(248, 176, 66, 0.3);
  }

  .mbsc-appquality.mbsc-button-info.mbsc-button-outline {
    border-color: #5bb7c5;
    color: #5bb7c5;
  }

  .mbsc-appquality.mbsc-button-info.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-info.mbsc-button-outline.mbsc-hover {
    background: rgba(91, 183, 197, 0.2);
  }

  .mbsc-appquality.mbsc-button-info.mbsc-button-outline.mbsc-focus {
    background: rgba(91, 183, 197, 0.3);
  }

  .mbsc-appquality.mbsc-button-dark.mbsc-button-outline {
    border-color: #47494a;
    color: #47494a;
  }

  .mbsc-appquality.mbsc-button-dark.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-dark.mbsc-button-outline.mbsc-hover {
    background: rgba(71, 73, 74, 0.2);
  }

  .mbsc-appquality.mbsc-button-dark.mbsc-button-outline.mbsc-focus {
    background: rgba(71, 73, 74, 0.3);
  }

  .mbsc-appquality.mbsc-button-light.mbsc-button-outline {
    border-color: #ccc;
    color: #ccc;
  }

  .mbsc-appquality.mbsc-button-light.mbsc-button-outline.mbsc-active,
  .mbsc-appquality.mbsc-button-light.mbsc-button-outline.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-appquality.mbsc-button-light.mbsc-button-outline.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.3);
  }

  .mbsc-appquality.mbsc-popup-body {
    background: ${props.theme.colors.white};
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    color: ${props.theme.palette.primary};
  }

  .mbsc-appquality.mbsc-popup-arrow {
    background: ${props.theme.colors.white};
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  }

  .mbsc-appquality.mbsc-popup-button.mbsc-font {
    color: ${props.theme.palette.success};
  }

  .mbsc-appquality.mbsc-popup-button.mbsc-font.mbsc-popup-button-close {
    color: ${props.theme.palette.danger};
  }

  .mbsc-appquality.mbsc-scroller-wheel-cont {
    border-color: ${props.theme.palette.success};
  }

  .mbsc-appquality.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-single,
  .mbsc-appquality.mbsc-scroller-wheel-multi {
    border-color: transparent;
  }

  .mbsc-appquality.mbsc-scroller-wheel-item.mbsc-active,
  .mbsc-appquality.mbsc-scroller-wheel-item.mbsc-focus,
  .mbsc-appquality.mbsc-scroller-wheel-item.mbsc-hover {
    background: ${addOpacityToHex(props.theme.palette.info, "0.2")};
  }

  .mbsc-appquality.mbsc-wheel-checkmark:after {
    border-color: ${props.theme.palette.success};
  }

  .mbsc-appquality.mbsc-scroller-pointer
    .mbsc-wheel-group-cont-single
    .mbsc-scroller-wheel-item.mbsc-selected {
    color: ${props.theme.palette.success};
    background: rgba(0, 0, 0, 0.15);
  }
`;
}}`;

const DatepickerStyle = () => {
  useEffect(() => {
    (window as any).MBSCappqGlobalStyleAlreadyRendered = false;
  });
  if ((window as any).MBSCappqGlobalStyleAlreadyRendered) return null;
  return (
    <>
      <StyleSheetManager disableVendorPrefixes={true}>
        <DatepickerGlobalStyle />
      </StyleSheetManager>
      {((window as any).MBSCappqGlobalStyleAlreadyRendered = true)}
    </>
  );
};

export default DatepickerStyle;
