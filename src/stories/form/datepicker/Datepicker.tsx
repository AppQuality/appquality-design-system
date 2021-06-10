import { Datepicker as MobiScrollDatePicker } from "@mobiscroll/react";
import { DatepickerProps } from "./_types";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Datepicker = ({
  select,
  value,
  onChange,
  selectMultiple,
}: DatepickerProps) => {
  return (
    <MobiScrollDatePicker
      select={select}
      theme="material"
      controls={["date"]}
      themeVariant="light"
    />
  );
};

export const DatepickerStyle = createGlobalStyle`
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

  .mbsc-icon-arrow-down5:before {
    content: "\\ea01";
  }

  .mbsc-icon-arrow-left2:before {
    content: "\\ea02";
  }

  .mbsc-icon-arrow-left5:before {
    content: "\\ea03";
  }

  .mbsc-icon-arrow-right2:before {
    content: "\\ea04";
  }

  .mbsc-icon-arrow-right5:before {
    content: "\\ea05";
  }

  .mbsc-icon-arrow-up5:before {
    content: "\\ea06";
  }

  .mbsc-icon-checkmark:before {
    content: "\\ea07";
  }

  .mbsc-icon-close:before {
    content: "\\ea08";
  }

  .mbsc-icon-ion-ios7-arrow-back:before {
    content: "\\ea09";
  }

  .mbsc-icon-ion-ios7-arrow-forward:before {
    content: "\\ea0a";
  }

  .mbsc-icon-ion-ios7-checkmark-empty:before {
    content: "\\ea0b";
  }

  .mbsc-icon-ios-backspace:before {
    content: "\\ea0c";
  }

  .mbsc-icon-loop2:before {
    content: "\\ea0d";
  }

  .mbsc-icon-material-backspace:before {
    content: "\\ea0e";
  }

  .mbsc-icon-material-check-box-outline-blank:before {
    content: "\\ea0f";
  }

  .mbsc-icon-material-check:before {
    content: "\\ea10";
  }

  .mbsc-icon-material-keyboard-arrow-down:before {
    content: "\\ea11";
  }

  .mbsc-icon-material-keyboard-arrow-left:before {
    content: "\\ea12";
  }

  .mbsc-icon-material-keyboard-arrow-right:before {
    content: "\\ea13";
  }

  .mbsc-icon-material-keyboard-arrow-up:before {
    content: "\\ea14";
  }

  .mbsc-icon-material-star-outline:before {
    content: "\\ea15";
  }

  .mbsc-icon-material-star:before {
    content: "\\ea16";
  }

  .mbsc-icon-minus:before {
    content: "\\ea17";
  }

  .mbsc-icon-plus:before {
    content: "\\ea18";
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

  .mbsc-ios.mbsc-form-control-wrapper {
    margin-top: -1px;
  }

  .mbsc-ios.mbsc-form-control-wrapper.mbsc-error {
    z-index: 2;
  }

  .mbsc-ios.mbsc-form-control-wrapper:after,
  .mbsc-ios.mbsc-form-control-wrapper:before {
    content: "";
    position: absolute;
    border-top: 1px solid transparent;
  }

  .mbsc-ios.mbsc-form-control-wrapper.mbsc-ltr:after,
  .mbsc-ios.mbsc-form-control-wrapper.mbsc-ltr:before {
    right: 0;
    left: 1em;
  }

  .mbsc-ios.mbsc-form-control-wrapper.mbsc-rtl:after,
  .mbsc-ios.mbsc-form-control-wrapper.mbsc-rtl:before {
    left: 0;
    right: 1em;
  }

  .mbsc-ios.mbsc-form-control-wrapper:before {
    top: 0;
  }

  .mbsc-ios.mbsc-form-control-wrapper:after {
    bottom: 0;
  }

  .mbsc-ios.mbsc-form-control-wrapper.mbsc-ltr:first-of-type:before,
  .mbsc-ios.mbsc-form-control-wrapper.mbsc-ltr:last-of-type:after {
    left: 0;
  }

  .mbsc-ios.mbsc-form-control-wrapper.mbsc-rtl:first-of-type:before,
  .mbsc-ios.mbsc-form-control-wrapper.mbsc-rtl:last-of-type:after {
    right: 0;
  }

  .mbsc-ios.mbsc-description.mbsc-disabled,
  .mbsc-ios.mbsc-form-control-label.mbsc-disabled {
    opacity: 0.3;
  }

  .mbsc-ios .mbsc-form-group-inset .mbsc-form-control-wrapper:first-child,
  .mbsc-ios .mbsc-form-group-inset .mbsc-form-group-title + .mbsc-form-control-wrapper {
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }

  .mbsc-ios .mbsc-form-group-inset .mbsc-form-control-wrapper:last-child {
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }

  .mbsc-ios .mbsc-form-group-inset .mbsc-form-control-wrapper:first-child:before,
  .mbsc-ios .mbsc-form-group-inset .mbsc-form-control-wrapper:last-child:after,
  .mbsc-ios .mbsc-form-group-inset .mbsc-form-group-title,
  .mbsc-ios .mbsc-form-group-inset .mbsc-form-group-title + .mbsc-form-control-wrapper:before {
    border-width: 0;
  }

  .mbsc-ios.mbsc-form-control-wrapper {
    background: #fff;
  }

  .mbsc-ios.mbsc-form-control-wrapper:after,
  .mbsc-ios.mbsc-form-control-wrapper:before {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-form-control-wrapper.mbsc-error + .mbsc-form-control-wrapper:before,
  .mbsc-ios.mbsc-form-control-wrapper.mbsc-error:after {
    border-color: #d8332a;
  }

  .mbsc-ios-dark.mbsc-form-control-wrapper {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-form-control-wrapper:after,
  .mbsc-ios-dark.mbsc-form-control-wrapper:before {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-form-control-wrapper.mbsc-error + .mbsc-form-control-wrapper:before,
  .mbsc-ios-dark.mbsc-form-control-wrapper.mbsc-error:after {
    border-color: #d8332a;
  }

  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-form-control-wrapper {
    background: #2b2b2b;
  }

  .mbsc-material.mbsc-description.mbsc-disabled,
  .mbsc-material.mbsc-form-control-label.mbsc-disabled,
  .mbsc-windows.mbsc-description.mbsc-disabled,
  .mbsc-windows.mbsc-form-control-label.mbsc-disabled {
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

  .mbsc-ios.mbsc-textfield-wrapper-has-icon-left.mbsc-ltr,
  .mbsc-ios.mbsc-textfield-wrapper-has-icon-right.mbsc-rtl {
    z-index: 1;
  }

  .mbsc-ios.mbsc-textfield-wrapper-has-icon-left.mbsc-ltr:after,
  .mbsc-ios.mbsc-textfield-wrapper-has-icon-left.mbsc-ltr:before {
    left: 3.375em;
  }

  .mbsc-ios.mbsc-textfield-wrapper-has-icon-right.mbsc-rtl:after,
  .mbsc-ios.mbsc-textfield-wrapper-has-icon-right.mbsc-rtl:before {
    right: 3.375em;
  }

  .mbsc-ios.mbsc-textfield-inner {
    position: static;
    -webkit-box-flex: 1;
    -webkit-flex: 1 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 auto;
    flex: 1 auto;
  }

  .mbsc-ios.mbsc-textfield-inner.mbsc-disabled {
    opacity: 0.5;
  }

  .mbsc-ios.mbsc-textfield {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 1em;
    background: transparent;
    height: 2.75em;
  }

  .mbsc-ios.mbsc-textfield-has-icon-left {
    padding-left: 3.375em;
  }

  .mbsc-ios.mbsc-textfield-has-icon-right {
    padding-right: 3.375em;
  }

  .mbsc-ios.mbsc-textfield-floating,
  .mbsc-ios.mbsc-textfield-stacked {
    height: 3.5em;
    padding-top: 1.25em;
  }

  .mbsc-ios.mbsc-textfield-icon {
    top: 0.625em;
    z-index: 1;
  }

  .mbsc-ios.mbsc-textfield-icon-left {
    left: 0.9375em;
  }

  .mbsc-ios.mbsc-textfield-icon-right {
    right: 0.9375em;
  }

  .mbsc-ios.mbsc-textfield-icon-floating,
  .mbsc-ios.mbsc-textfield-icon-stacked {
    top: 1em;
  }

  .mbsc-ios.mbsc-label-inline {
    line-height: 2.75em;
  }

  .mbsc-ios.mbsc-label-inline.mbsc-ltr {
    padding-left: 1em;
  }

  .mbsc-ios.mbsc-label-inline.mbsc-rtl {
    padding-right: 1em;
  }

  .mbsc-ios.mbsc-label-stacked {
    top: 0.75em;
    font-size: 0.75em;
    line-height: 1em;
  }

  .mbsc-ios.mbsc-label-stacked.mbsc-ltr {
    left: 1.333334em;
  }

  .mbsc-ios.mbsc-label-stacked.mbsc-rtl {
    right: 1.333334em;
  }

  .mbsc-ios.mbsc-label-floating {
    top: 0.875em;
    line-height: 2em;
  }

  .mbsc-ios.mbsc-label-floating.mbsc-ltr {
    left: 1em;
  }

  .mbsc-ios.mbsc-label-floating.mbsc-rtl {
    right: 1em;
  }

  .mbsc-ios.mbsc-label-floating-active.mbsc-label {
    -webkit-transform: translateY(-0.5em) scale(0.75);
    transform: translateY(-0.5em) scale(0.75);
  }

  .mbsc-ios.mbsc-label.mbsc-disabled {
    opacity: 0.5;
  }

  .mbsc-ios.mbsc-error-message {
    display: block;
    padding: 0 1.333334em;
    line-height: 1.666667em;
  }

  .mbsc-ios.mbsc-error-message-underline {
    position: static;
  }

  .mbsc-ios.mbsc-error-message-has-icon-left.mbsc-ltr {
    padding-left: 4.5em;
  }

  .mbsc-ios.mbsc-error-message-has-icon-right.mbsc-rtl {
    padding-right: 4.5em;
  }

  .mbsc-ios.mbsc-textfield-underline-inline-has-icon-left.mbsc-ltr {
    padding-left: 1em;
  }

  .mbsc-ios.mbsc-textfield-underline-inline-has-icon-right.mbsc-rtl {
    padding-right: 1em;
  }

  .mbsc-ios.mbsc-label-underline {
    margin: 0;
  }

  .mbsc-ios.mbsc-label-underline-stacked-has-icon-left.mbsc-ltr {
    left: 4.5em;
  }

  .mbsc-ios.mbsc-label-underline-stacked-has-icon-right.mbsc-rtl {
    right: 4.5em;
  }

  .mbsc-ios.mbsc-label-underline-inline-has-icon-left.mbsc-ltr {
    padding-left: 3.375em;
  }

  .mbsc-ios.mbsc-label-underline-inline-has-icon-right.mbsc-rtl {
    padding-right: 3.375em;
  }

  .mbsc-ios.mbsc-label-underline-floating-has-icon-left.mbsc-ltr {
    left: 3.375em;
  }

  .mbsc-ios.mbsc-label-underline-floating-has-icon-right.mbsc-rtl {
    right: 3.375em;
  }

  .mbsc-ios.mbsc-error-message-underline.mbsc-error-message-inline.mbsc-ltr {
    padding-left: 1.333334em;
  }

  .mbsc-ios.mbsc-error-message-underline.mbsc-error-message-inline.mbsc-rtl {
    padding-right: 1.333334em;
  }

  .mbsc-ios.mbsc-textfield-wrapper-box,
  .mbsc-ios.mbsc-textfield-wrapper-outline {
    margin: 1.5em 1em;
  }

  .mbsc-ios.mbsc-textfield-wrapper-box.mbsc-font:after,
  .mbsc-ios.mbsc-textfield-wrapper-box.mbsc-font:before,
  .mbsc-ios.mbsc-textfield-wrapper-outline.mbsc-font:after,
  .mbsc-ios.mbsc-textfield-wrapper-outline.mbsc-font:before {
    border: none;
  }

  .mbsc-ios.mbsc-textfield-box,
  .mbsc-ios.mbsc-textfield-outline {
    border-radius: 0.5em;
    border: 1px solid transparent;
  }

  .mbsc-ios.mbsc-textfield-inner-box,
  .mbsc-ios.mbsc-textfield-inner-outline {
    position: relative;
  }

  .mbsc-ios.mbsc-label-box-stacked-has-icon-left.mbsc-ltr,
  .mbsc-ios.mbsc-label-outline-stacked-has-icon-left.mbsc-ltr {
    left: 4.5em;
  }

  .mbsc-ios.mbsc-label-box-stacked-has-icon-right.mbsc-rtl,
  .mbsc-ios.mbsc-label-outline-stacked-has-icon-right.mbsc-rtl {
    right: 4.5em;
  }

  .mbsc-ios.mbsc-label-box-floating,
  .mbsc-ios.mbsc-label-box-stacked,
  .mbsc-ios.mbsc-label-outline-floating,
  .mbsc-ios.mbsc-label-outline-stacked {
    margin: 0 1px;
  }

  .mbsc-ios.mbsc-label-box-floating,
  .mbsc-ios.mbsc-label-outline-floating {
    top: 0.6875em;
  }

  .mbsc-ios.mbsc-label-box-floating-has-icon-left.mbsc-ltr,
  .mbsc-ios.mbsc-label-outline-floating-has-icon-left.mbsc-ltr {
    left: 3.375em;
  }

  .mbsc-ios.mbsc-label-box-floating-has-icon-right.mbsc-rtl,
  .mbsc-ios.mbsc-label-outline-floating-has-icon-right.mbsc-rtl {
    right: 3.375em;
  }

  .mbsc-ios.mbsc-error-message-box,
  .mbsc-ios.mbsc-error-message-outline {
    margin: 0 1px;
  }

  .mbsc-ios.mbsc-select.mbsc-ltr {
    padding-right: 3.375em;
  }

  .mbsc-ios.mbsc-select.mbsc-rtl {
    padding-left: 3.375em;
  }

  .mbsc-ios.mbsc-select.mbsc-textfield-has-icon-right.mbsc-ltr {
    padding-right: 4.875em;
  }

  .mbsc-ios.mbsc-select.mbsc-textfield-has-icon-left.mbsc-rtl {
    padding-left: 4.875em;
  }

  .mbsc-ios.mbsc-select-icon {
    top: 0.625em;
  }

  .mbsc-ios.mbsc-select-icon-floating,
  .mbsc-ios.mbsc-select-icon-stacked {
    top: 1em;
  }

  .mbsc-ios.mbsc-select-icon.mbsc-ltr {
    right: 0.9375em;
  }

  .mbsc-ios.mbsc-select-icon.mbsc-rtl {
    left: 0.9375em;
  }

  .mbsc-ios.mbsc-select-icon-right.mbsc-ltr {
    right: 3.375em;
  }

  .mbsc-ios.mbsc-select-icon-left.mbsc-rtl {
    left: 3.375em;
  }

  .mbsc-ios.mbsc-textarea {
    height: 3em;
    border: 0;
  }

  .mbsc-ios.mbsc-textarea.mbsc-textfield-floating,
  .mbsc-ios.mbsc-textarea.mbsc-textfield-stacked {
    padding-top: 0;
  }

  .mbsc-ios.mbsc-textarea-inner {
    padding-top: 0.625em;
    padding-bottom: 0.625em;
  }

  .mbsc-ios.mbsc-textarea-inner.mbsc-textfield-inner-box,
  .mbsc-ios.mbsc-textarea-inner.mbsc-textfield-inner-outline {
    border: 1px solid transparent;
    border-radius: 0.5em;
  }

  .mbsc-ios.mbsc-textarea-inner.mbsc-textfield-inner-floating,
  .mbsc-ios.mbsc-textarea-inner.mbsc-textfield-inner-stacked {
    padding-top: 1.875em;
  }

  .mbsc-ios.mbsc-textfield-wrapper {
    background: none;
  }

  .mbsc-ios.mbsc-textfield-wrapper-underline {
    background: #fff;
  }

  .mbsc-ios.mbsc-textfield {
    color: #000;
  }

  .mbsc-ios.mbsc-textfield-box,
  .mbsc-ios.mbsc-textfield-outline {
    background: #fff;
  }

  .mbsc-ios.mbsc-textfield-outline {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-select-icon,
  .mbsc-ios.mbsc-textfield-icon {
    color: #8c8c8c;
  }

  .mbsc-ios.mbsc-textfield-box.mbsc-error,
  .mbsc-ios.mbsc-textfield-outline.mbsc-error {
    border-color: #d8332a;
  }

  .mbsc-ios.mbsc-error-message {
    color: #d8332a;
  }

  .mbsc-ios.mbsc-select,
  .mbsc-ios.mbsc-textarea-inner.mbsc-textfield-inner-box,
  .mbsc-ios.mbsc-textarea-inner.mbsc-textfield-inner-outline {
    background: #fff;
  }

  .mbsc-ios.mbsc-textarea-inner.mbsc-textfield-inner-outline {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-textarea-inner.mbsc-error {
    border-color: #d8332a;
  }

  .mbsc-ios-dark.mbsc-textfield-wrapper {
    background: none;
  }

  .mbsc-ios-dark.mbsc-textfield-wrapper-underline {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-textfield {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-textfield-box,
  .mbsc-ios-dark.mbsc-textfield-outline {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-textfield-outline {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-select-icon,
  .mbsc-ios-dark.mbsc-textfield-icon {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-textfield-box.mbsc-error,
  .mbsc-ios-dark.mbsc-textfield-outline.mbsc-error {
    border-color: #d8332a;
  }

  .mbsc-ios-dark.mbsc-error-message {
    color: #d8332a;
  }

  .mbsc-ios-dark.mbsc-select,
  .mbsc-ios-dark.mbsc-textarea-inner.mbsc-textfield-inner-box,
  .mbsc-ios-dark.mbsc-textarea-inner.mbsc-textfield-inner-outline {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-textarea-inner.mbsc-textfield-inner-outline {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-textarea-inner.mbsc-error {
    border-color: #d8332a;
  }

  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-textfield-wrapper {
    background: none;
  }

  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-select,
  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-textarea-inner.mbsc-textfield-inner-box,
  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-textarea-inner.mbsc-textfield-inner-outline,
  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-textfield-box,
  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-textfield-outline,
  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-textfield-wrapper-underline {
    background: #2b2b2b;
  }

  .mbsc-material.mbsc-textfield-wrapper {
    margin: 1.5em 1em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-material.mbsc-textfield-inner.mbsc-disabled {
    opacity: 0.5;
  }

  .mbsc-material.mbsc-textfield {
    display: block;
    width: 100%;
    height: 2.125em;
    background-color: transparent;
    border-bottom: 1px solid;
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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    transition: -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }

  .mbsc-material .mbsc-textfield-ripple-active {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
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
    border-radius: 0.25em 0.25em 0 0;
  }

  .mbsc-material.mbsc-textfield-box {
    height: 2.25em;
    padding: 0 1em;
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
    border-bottom-color: rgba(0, 0, 0, 0.42);
    color: rgba(0, 0, 0, 0.87);
  }

  .mbsc-material.mbsc-textfield.mbsc-hover {
    border-color: rgba(0, 0, 0, 0.87);
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
    background: #ededed;
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
    border-color: #1a73e8;
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
    background-color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-textfield-ripple.mbsc-error {
    background-color: #de3226;
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

  .mbsc-windows.mbsc-textfield-wrapper {
    margin: 1em;
  }

  .mbsc-windows.mbsc-textfield-wrapper-inline {
    margin: 1.75em 1em;
  }

  .mbsc-windows.mbsc-textfield-wrapper-floating {
    padding-top: 1.75em;
  }

  .mbsc-windows.mbsc-textfield {
    height: 2em;
    padding: 0 0.5em;
    border: 1px solid;
    border-radius: 2px;
  }

  .mbsc-windows.mbsc-textfield-icon {
    top: 0.4375em;
    width: 1.125em;
    height: 1.125em;
    line-height: 1.125em;
    margin: 0 1px;
  }

  .mbsc-windows.mbsc-textfield-has-icon-right {
    padding-right: 2em;
  }

  .mbsc-windows.mbsc-textfield-has-icon-left {
    padding-left: 2em;
  }

  .mbsc-windows.mbsc-textfield-icon-left {
    left: 0.4375em;
  }

  .mbsc-windows.mbsc-textfield-icon-right {
    right: 0.4375em;
  }

  .mbsc-windows.mbsc-error-message {
    font-size: 0.75em;
  }

  .mbsc-windows.mbsc-label {
    line-height: 2em;
    font-size: 0.875em;
    font-weight: 600;
  }

  .mbsc-windows.mbsc-label-inline {
    line-height: 2.285715em;
  }

  .mbsc-windows.mbsc-label-floating {
    top: 2.142858em;
  }

  .mbsc-windows.mbsc-label-stacked {
    position: static;
  }

  .mbsc-windows.mbsc-label-floating.mbsc-ltr {
    -webkit-transform: translateX(0.57143em);
    transform: translateX(0.57143em);
  }

  .mbsc-windows.mbsc-label-floating.mbsc-rtl {
    -webkit-transform: translateX(-0.5em);
    transform: translateX(-0.5em);
  }

  .mbsc-windows.mbsc-label-box-floating-has-icon-left.mbsc-ltr,
  .mbsc-windows.mbsc-label-outline-floating-has-icon-left.mbsc-ltr,
  .mbsc-windows.mbsc-label-underline-floating-has-icon-left.mbsc-ltr {
    -webkit-transform: translateX(2.28572em);
    transform: translateX(2.28572em);
  }

  .mbsc-windows.mbsc-label-box-floating-has-icon-right.mbsc-rtl,
  .mbsc-windows.mbsc-label-outline-floating-has-icon-right.mbsc-rtl,
  .mbsc-windows.mbsc-label-underline-floating-has-icon-right.mbsc-rtl {
    -webkit-transform: translateX(-2.28572em);
    transform: translateX(-2.28572em);
  }

  .mbsc-windows.mbsc-label.mbsc-label-floating-active {
    -webkit-transform: translateY(-2.14286em);
    transform: translateY(-2.14286em);
  }

  .mbsc-windows.mbsc-textfield-wrapper-underline {
    border-bottom: 1px solid;
  }

  .mbsc-windows.mbsc-textfield-underline {
    border: 0;
    border-radius: 0;
  }

  .mbsc-windows.mbsc-select.mbsc-ltr {
    padding-right: 2em;
  }

  .mbsc-windows.mbsc-select.mbsc-rtl {
    padding-left: 2em;
  }

  .mbsc-windows.mbsc-select.mbsc-textfield-has-icon-right.mbsc-ltr {
    padding-right: 3.125em;
  }

  .mbsc-windows.mbsc-select.mbsc-textfield-has-icon-left.mbsc-rtl {
    padding-left: 3.125em;
  }

  .mbsc-windows.mbsc-select-icon {
    top: 0.4375em;
    width: 1.125em;
    height: 1.125em;
    line-height: 1.125em;
    margin: 0 1px;
  }

  .mbsc-windows.mbsc-select-icon.mbsc-ltr {
    right: 0.4375em;
  }

  .mbsc-windows.mbsc-select-icon.mbsc-rtl {
    left: 0.4375em;
  }

  .mbsc-windows.mbsc-select-icon-right.mbsc-ltr {
    right: 2em;
  }

  .mbsc-windows.mbsc-select-icon-left.mbsc-rtl {
    left: 2em;
  }

  .mbsc-windows.mbsc-textarea {
    height: 3.5em;
    padding-top: 0.1875em;
    padding-bottom: 0.1875em;
  }

  .mbsc-windows.mbsc-textfield-wrapper {
    color: #333;
  }

  .mbsc-windows.mbsc-textfield-wrapper.mbsc-disabled {
    color: #9e9e9e;
  }

  .mbsc-windows.mbsc-textfield {
    background: #fff;
    color: #333;
  }

  .mbsc-windows.mbsc-textfield-box,
  .mbsc-windows.mbsc-textfield-outline {
    border-color: #878787;
  }

  .mbsc-windows.mbsc-textfield.mbsc-hover {
    border-color: #333;
  }

  .mbsc-windows.mbsc-textfield-box.mbsc-focus,
  .mbsc-windows.mbsc-textfield-outline.mbsc-focus {
    border-color: #0078d7;
    box-shadow: inset 0 0 0 1px #0078d7;
  }

  .mbsc-windows.mbsc-textfield.mbsc-disabled {
    background: #f2f2f2;
    border-color: #f2f2f2;
  }

  .mbsc-windows.mbsc-textfield-box.mbsc-error.mbsc-focus,
  .mbsc-windows.mbsc-textfield-outline.mbsc-error.mbsc-focus {
    box-shadow: inset 0 0 0 1px;
  }

  .mbsc-windows.mbsc-textfield-wrapper-underline {
    border-color: #878787;
  }

  .mbsc-windows.mbsc-textfield-wrapper-underline.mbsc-hover {
    border-color: #333;
  }

  .mbsc-windows.mbsc-textfield-wrapper-underline.mbsc-focus {
    border-color: #0078d7;
    box-shadow: 0 1px 0 0 #0078d7;
  }

  .mbsc-windows.mbsc-textfield-wrapper-underline.mbsc-disabled {
    border-color: #f2f2f2;
  }

  .mbsc-windows.mbsc-textfield-wrapper-underline.mbsc-error.mbsc-focus {
    box-shadow: 0 1px 0 0;
  }

  .mbsc-windows-dark.mbsc-textfield-wrapper {
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-textfield-wrapper.mbsc-disabled {
    color: #949494;
  }

  .mbsc-windows-dark.mbsc-textfield {
    background: #1a1a1a;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-textfield-box,
  .mbsc-windows-dark.mbsc-textfield-outline {
    border-color: #ababab;
  }

  .mbsc-windows-dark.mbsc-textfield.mbsc-hover {
    border-color: #fff;
  }

  .mbsc-windows-dark.mbsc-textfield-box.mbsc-focus,
  .mbsc-windows-dark.mbsc-textfield-outline.mbsc-focus {
    border-color: #0078d7;
    box-shadow: inset 0 0 0 1px #0078d7;
  }

  .mbsc-windows-dark.mbsc-textfield.mbsc-disabled {
    background: #272727;
    border-color: #272727;
  }

  .mbsc-windows-dark.mbsc-textfield-box.mbsc-error.mbsc-focus,
  .mbsc-windows-dark.mbsc-textfield-outline.mbsc-error.mbsc-focus {
    box-shadow: inset 0 0 0 1px;
  }

  .mbsc-windows-dark.mbsc-textfield-wrapper-underline {
    border-color: #ababab;
  }

  .mbsc-windows-dark.mbsc-textfield-wrapper-underline.mbsc-hover {
    border-color: #fff;
  }

  .mbsc-windows-dark.mbsc-textfield-wrapper-underline.mbsc-focus {
    border-color: #0078d7;
    box-shadow: 0 1px 0 0 #0078d7;
  }

  .mbsc-windows-dark.mbsc-textfield-wrapper-underline.mbsc-disabled {
    border-color: #272727;
  }

  .mbsc-windows-dark.mbsc-textfield-wrapper-underline.mbsc-error.mbsc-focus {
    box-shadow: 0 1px 0 0;
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
    opacity: 0.5;
    color: inherit;
  }

  .mbsc-textfield::-webkit-input-placeholder {
    opacity: 0.5;
    color: inherit;
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
    font-weight: 400;
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

  .mbsc-ios.mbsc-button {
    padding: 0 0.5em;
    margin: 0.5em 0.25em;
    line-height: 2.25em;
    border-radius: 0.25em;
    -webkit-transition: opacity 0.1s ease-out, background-color 0.1s ease-out;
    transition: opacity 0.1s ease-out, background-color 0.1s ease-out;
  }

  .mbsc-ios.mbsc-icon-button {
    padding: 0.5em;
    line-height: normal;
    border-radius: 4em;
  }

  .mbsc-ios.mbsc-button.mbsc-hover {
    opacity: 0.7;
  }

  .mbsc-ios.mbsc-button.mbsc-active {
    opacity: 0.5;
  }

  .mbsc-ios.mbsc-button.mbsc-disabled,
  .mbsc-ios.mbsc-button:disabled {
    opacity: 0.2;
  }

  .mbsc-ios.mbsc-button-outline.mbsc-active {
    opacity: 1;
  }

  .mbsc-ios.mbsc-ltr.mbsc-button-icon-start {
    padding-right: 0.375em;
  }

  .mbsc-ios.mbsc-ltr.mbsc-button-icon-end,
  .mbsc-ios.mbsc-rtl.mbsc-button-icon-start {
    padding-left: 0.375em;
  }

  .mbsc-ios.mbsc-rtl.mbsc-button-icon-end {
    padding-right: 0.375em;
  }

  .mbsc-ios .mbsc-button-group,
  .mbsc-ios .mbsc-button-group-block,
  .mbsc-ios .mbsc-button-group-justified {
    margin: 0.5em 0.75em;
  }

  .mbsc-ios .mbsc-button-group-block {
    margin: 0.5em 1em;
  }

  .mbsc-ios.mbsc-button-standard {
    background: #fff;
    color: #007aff;
  }

  .mbsc-ios.mbsc-button-flat {
    color: #007aff;
  }

  .mbsc-ios.mbsc-button-outline {
    border: 1px solid #1273de;
    color: #1273de;
  }

  .mbsc-ios.mbsc-button-outline.mbsc-active {
    background: #1273de;
    color: #f7f7f7;
  }

  .mbsc-ios.mbsc-button.mbsc-focus {
    background: rgba(0, 0, 0, 0.05);
  }

  .mbsc-ios.mbsc-button-primary.mbsc-button-standard {
    background: #3f97f6;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-secondary.mbsc-button-standard {
    background: #90979e;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-success.mbsc-button-standard {
    background: #43be5f;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-danger.mbsc-button-standard {
    background: #f5504e;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-warning.mbsc-button-standard {
    background: #f8b042;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-info.mbsc-button-standard {
    background: #5bb7c5;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-dark.mbsc-button-standard {
    background: #47494a;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-light.mbsc-button-standard {
    background: #fff;
    color: #000;
  }

  .mbsc-ios.mbsc-button-primary.mbsc-button-flat {
    color: #3f97f6;
  }

  .mbsc-ios.mbsc-button-secondary.mbsc-button-flat {
    color: #90979e;
  }

  .mbsc-ios.mbsc-button-success.mbsc-button-flat {
    color: #43be5f;
  }

  .mbsc-ios.mbsc-button-danger.mbsc-button-flat {
    color: #f5504e;
  }

  .mbsc-ios.mbsc-button-warning.mbsc-button-flat {
    color: #f8b042;
  }

  .mbsc-ios.mbsc-button-info.mbsc-button-flat {
    color: #5bb7c5;
  }

  .mbsc-ios.mbsc-button-dark.mbsc-button-flat {
    color: #47494a;
  }

  .mbsc-ios.mbsc-button-light.mbsc-button-flat {
    color: #ccc;
  }

  .mbsc-ios.mbsc-button-primary.mbsc-button-outline {
    border-color: #3f97f6;
    color: #3f97f6;
  }

  .mbsc-ios.mbsc-button-primary.mbsc-button-outline.mbsc-active {
    background: #3f97f6;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-secondary.mbsc-button-outline {
    border-color: #90979e;
    color: #90979e;
  }

  .mbsc-ios.mbsc-button-secondary.mbsc-button-outline.mbsc-active {
    background: #90979e;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-success.mbsc-button-outline {
    border-color: #43be5f;
    color: #43be5f;
  }

  .mbsc-ios.mbsc-button-success.mbsc-button-outline.mbsc-active {
    background: #43be5f;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-danger.mbsc-button-outline {
    border-color: #f5504e;
    color: #f5504e;
  }

  .mbsc-ios.mbsc-button-danger.mbsc-button-outline.mbsc-active {
    background: #f5504e;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-warning.mbsc-button-outline {
    border-color: #f8b042;
    color: #f8b042;
  }

  .mbsc-ios.mbsc-button-warning.mbsc-button-outline.mbsc-active {
    background: #f8b042;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-info.mbsc-button-outline {
    border-color: #5bb7c5;
    color: #5bb7c5;
  }

  .mbsc-ios.mbsc-button-info.mbsc-button-outline.mbsc-active {
    background: #5bb7c5;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-dark.mbsc-button-outline {
    border-color: #47494a;
    color: #47494a;
  }

  .mbsc-ios.mbsc-button-dark.mbsc-button-outline.mbsc-active {
    background: #47494a;
    color: #fff;
  }

  .mbsc-ios.mbsc-button-light.mbsc-button-outline {
    border-color: #bfbfbf;
    color: #bfbfbf;
  }

  .mbsc-ios.mbsc-button-light.mbsc-button-outline.mbsc-active {
    background: #bfbfbf;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-standard {
    background: #3b3b3b;
    color: #ff9f0a;
  }

  .mbsc-ios-dark.mbsc-button-flat {
    color: #ff9f0a;
  }

  .mbsc-ios-dark.mbsc-button-outline {
    border: 1px solid #ffa519;
    color: #ffa519;
  }

  .mbsc-ios-dark.mbsc-button-outline.mbsc-active {
    background: #ffa519;
    color: #000;
  }

  .mbsc-ios-dark.mbsc-button.mbsc-focus {
    background: hsla(0, 0%, 100%, 0.05);
  }

  .mbsc-ios-dark.mbsc-button-primary.mbsc-button-standard {
    background: #3f97f6;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-secondary.mbsc-button-standard {
    background: #90979e;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-success.mbsc-button-standard {
    background: #43be5f;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-danger.mbsc-button-standard {
    background: #f5504e;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-warning.mbsc-button-standard {
    background: #f8b042;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-info.mbsc-button-standard {
    background: #5bb7c5;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-dark.mbsc-button-standard {
    background: #47494a;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-light.mbsc-button-standard {
    background: #fff;
    color: #000;
  }

  .mbsc-ios-dark.mbsc-button-primary.mbsc-button-flat {
    color: #3f97f6;
  }

  .mbsc-ios-dark.mbsc-button-secondary.mbsc-button-flat {
    color: #90979e;
  }

  .mbsc-ios-dark.mbsc-button-success.mbsc-button-flat {
    color: #43be5f;
  }

  .mbsc-ios-dark.mbsc-button-danger.mbsc-button-flat {
    color: #f5504e;
  }

  .mbsc-ios-dark.mbsc-button-warning.mbsc-button-flat {
    color: #f8b042;
  }

  .mbsc-ios-dark.mbsc-button-info.mbsc-button-flat {
    color: #5bb7c5;
  }

  .mbsc-ios-dark.mbsc-button-dark.mbsc-button-flat {
    color: #47494a;
  }

  .mbsc-ios-dark.mbsc-button-light.mbsc-button-flat {
    color: #ccc;
  }

  .mbsc-ios-dark.mbsc-button-primary.mbsc-button-outline {
    border-color: #3f97f6;
    color: #3f97f6;
  }

  .mbsc-ios-dark.mbsc-button-primary.mbsc-button-outline.mbsc-active {
    background: #3f97f6;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-secondary.mbsc-button-outline {
    border-color: #90979e;
    color: #90979e;
  }

  .mbsc-ios-dark.mbsc-button-secondary.mbsc-button-outline.mbsc-active {
    background: #90979e;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-success.mbsc-button-outline {
    border-color: #43be5f;
    color: #43be5f;
  }

  .mbsc-ios-dark.mbsc-button-success.mbsc-button-outline.mbsc-active {
    background: #43be5f;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-danger.mbsc-button-outline {
    border-color: #f5504e;
    color: #f5504e;
  }

  .mbsc-ios-dark.mbsc-button-danger.mbsc-button-outline.mbsc-active {
    background: #f5504e;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-warning.mbsc-button-outline {
    border-color: #f8b042;
    color: #f8b042;
  }

  .mbsc-ios-dark.mbsc-button-warning.mbsc-button-outline.mbsc-active {
    background: #f8b042;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-info.mbsc-button-outline {
    border-color: #5bb7c5;
    color: #5bb7c5;
  }

  .mbsc-ios-dark.mbsc-button-info.mbsc-button-outline.mbsc-active {
    background: #5bb7c5;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-dark.mbsc-button-outline {
    border-color: #47494a;
    color: #47494a;
  }

  .mbsc-ios-dark.mbsc-button-dark.mbsc-button-outline.mbsc-active {
    background: #47494a;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-button-light.mbsc-button-outline {
    border-color: #bfbfbf;
    color: #bfbfbf;
  }

  .mbsc-ios-dark.mbsc-button-light.mbsc-button-outline.mbsc-active {
    background: #bfbfbf;
    color: #fff;
  }

  .mbsc-material.mbsc-button {
    min-width: 4.571429em;
    padding: 0.428572em 1.142858em;
    border-radius: 0.285715em;
    font-size: 0.875em;
    font-weight: 600;
    text-transform: uppercase;
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
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material.mbsc-button-standard.mbsc-hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material.mbsc-button-standard.mbsc-active,
  .mbsc-material.mbsc-button-standard.mbsc-focus {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
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
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material-dark.mbsc-button-standard.mbsc-hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .mbsc-material-dark.mbsc-button-standard.mbsc-active,
  .mbsc-material-dark.mbsc-button-standard.mbsc-focus {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
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

  .mbsc-windows.mbsc-button {
    padding: 0 0.5em;
    line-height: 1.75em;
    margin: 0.5em 0.25em;
    border: 0.125em solid transparent;
    -webkit-transition: border-color 0.1s ease-out, background-color 0.1s ease-out;
    transition: border-color 0.1s ease-out, background-color 0.1s ease-out;
  }

  .mbsc-windows.mbsc-icon-button {
    width: 2.75em;
    height: 2em;
  }

  .mbsc-windows.mbsc-button-flat {
    -webkit-transition: background-color 0.1s ease-out;
    transition: background-color 0.1s ease-out;
  }

  .mbsc-windows.mbsc-button-flat.mbsc-hover {
    opacity: 0.7;
  }

  .mbsc-windows.mbsc-button-flat.mbsc-active {
    opacity: 1;
  }

  .mbsc-windows.mbsc-button.mbsc-disabled,
  .mbsc-windows.mbsc-button:disabled {
    opacity: 0.3;
  }

  .mbsc-windows.mbsc-ltr.mbsc-button-icon-start {
    padding-right: 0.5em;
  }

  .mbsc-windows.mbsc-ltr.mbsc-button-icon-end,
  .mbsc-windows.mbsc-rtl.mbsc-button-icon-start {
    padding-left: 0.5em;
  }

  .mbsc-windows.mbsc-rtl.mbsc-button-icon-end {
    padding-right: 0.5em;
  }

  .mbsc-windows .mbsc-button-group,
  .mbsc-windows .mbsc-button-group-justified {
    margin: 0.5em 0.75em;
  }

  .mbsc-windows .mbsc-button-group-block {
    margin: 0.5em 1em;
  }

  .mbsc-windows.mbsc-button-standard {
    background: #ccc;
    border-color: #ccc;
    color: #333;
  }

  .mbsc-windows.mbsc-button-standard.mbsc-hover {
    border-color: #7a7a7a;
  }

  .mbsc-windows.mbsc-button-standard.mbsc-active {
    border-color: #7a7a7a;
    background: #7a7a7a;
  }

  .mbsc-windows.mbsc-button-flat {
    color: #333;
  }

  .mbsc-windows.mbsc-button-flat.mbsc-active {
    background: #f2f2f2;
    border-color: #f2f2f2;
    color: #333;
  }

  .mbsc-windows.mbsc-button-outline {
    border: 0.125em solid #999;
    color: #999;
  }

  .mbsc-windows.mbsc-button-outline.mbsc-hover {
    border-color: grey;
  }

  .mbsc-windows.mbsc-button-outline.mbsc-active {
    border-color: grey;
    background: grey;
    color: #fff;
  }

  .mbsc-windows.mbsc-button.mbsc-focus {
    box-shadow: 0 0 0 1px #333;
  }

  .mbsc-windows.mbsc-button-primary.mbsc-button-standard {
    background: #3f97f6;
    border-color: #3f97f6;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-secondary.mbsc-button-standard {
    background: #90979e;
    border-color: #90979e;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-success.mbsc-button-standard {
    background: #43be5f;
    border-color: #43be5f;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-danger.mbsc-button-standard {
    background: #f5504e;
    border-color: #f5504e;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-warning.mbsc-button-standard {
    background: #f8b042;
    border-color: #f8b042;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-info.mbsc-button-standard {
    background: #5bb7c5;
    border-color: #5bb7c5;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-dark.mbsc-button-standard {
    background: #47494a;
    border-color: #47494a;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-light.mbsc-button-standard {
    background: #fff;
    border-color: #fff;
    color: #000;
  }

  .mbsc-windows.mbsc-button-primary.mbsc-button-flat {
    color: #3f97f6;
  }

  .mbsc-windows.mbsc-button-primary.mbsc-button-flat.mbsc-active {
    background: #88bff9;
    border-color: #88bff9;
  }

  .mbsc-windows.mbsc-button-secondary.mbsc-button-flat {
    color: #90979e;
  }

  .mbsc-windows.mbsc-button-secondary.mbsc-button-flat.mbsc-active {
    background: #b9bdc2;
    border-color: #b9bdc2;
  }

  .mbsc-windows.mbsc-button-success.mbsc-button-flat {
    color: #43be5f;
  }

  .mbsc-windows.mbsc-button-success.mbsc-button-flat.mbsc-active {
    background: #7cd28f;
    border-color: #7cd28f;
  }

  .mbsc-windows.mbsc-button-danger.mbsc-button-flat {
    color: #f5504e;
  }

  .mbsc-windows.mbsc-button-danger.mbsc-button-flat.mbsc-active {
    background: #f99896;
    border-color: #f99896;
  }

  .mbsc-windows.mbsc-button-warning.mbsc-button-flat {
    color: #f8b042;
  }

  .mbsc-windows.mbsc-button-warning.mbsc-button-flat.mbsc-active {
    background: #fbcf8c;
    border-color: #fbcf8c;
  }

  .mbsc-windows.mbsc-button-info.mbsc-button-flat {
    color: #5bb7c5;
  }

  .mbsc-windows.mbsc-button-info.mbsc-button-flat.mbsc-active {
    background: #94d0d9;
    border-color: #94d0d9;
  }

  .mbsc-windows.mbsc-button-dark.mbsc-button-flat {
    color: #47494a;
  }

  .mbsc-windows.mbsc-button-dark.mbsc-button-flat.mbsc-active {
    background: #6c7071;
    border-color: #6c7071;
  }

  .mbsc-windows.mbsc-button-light.mbsc-button-flat {
    color: #ccc;
  }

  .mbsc-windows.mbsc-button-light.mbsc-button-flat.mbsc-active {
    background: #fff;
    border-color: #fff;
  }

  .mbsc-windows.mbsc-button-primary.mbsc-button-outline {
    border-color: #3f97f6;
    color: #3f97f6;
  }

  .mbsc-windows.mbsc-button-secondary.mbsc-button-outline {
    border-color: #90979e;
    color: #90979e;
  }

  .mbsc-windows.mbsc-button-success.mbsc-button-outline {
    border-color: #43be5f;
    color: #43be5f;
  }

  .mbsc-windows.mbsc-button-danger.mbsc-button-outline {
    border-color: #f5504e;
    color: #f5504e;
  }

  .mbsc-windows.mbsc-button-warning.mbsc-button-outline {
    border-color: #f8b042;
    color: #f8b042;
  }

  .mbsc-windows.mbsc-button-info.mbsc-button-outline {
    border-color: #5bb7c5;
    color: #5bb7c5;
  }

  .mbsc-windows.mbsc-button-dark.mbsc-button-outline {
    border-color: #47494a;
    color: #47494a;
  }

  .mbsc-windows.mbsc-button-light.mbsc-button-outline {
    border-color: #ccc;
    color: #ccc;
  }

  .mbsc-windows.mbsc-button-primary.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-primary.mbsc-button-standard.mbsc-hover {
    border-color: #0964c6;
  }

  .mbsc-windows.mbsc-button-primary.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-primary.mbsc-button-standard.mbsc-active {
    background: #0964c6;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-secondary.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-secondary.mbsc-button-standard.mbsc-hover {
    border-color: #5d646b;
  }

  .mbsc-windows.mbsc-button-secondary.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-secondary.mbsc-button-standard.mbsc-active {
    background: #5d646b;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-success.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-success.mbsc-button-standard.mbsc-hover {
    border-color: #287339;
  }

  .mbsc-windows.mbsc-button-success.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-success.mbsc-button-standard.mbsc-active {
    background: #287339;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-danger.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-danger.mbsc-button-standard.mbsc-hover {
    border-color: #d10e0c;
  }

  .mbsc-windows.mbsc-button-danger.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-danger.mbsc-button-standard.mbsc-active {
    background: #d10e0c;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-warning.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-warning.mbsc-button-standard.mbsc-hover {
    border-color: #cc7f08;
  }

  .mbsc-windows.mbsc-button-warning.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-warning.mbsc-button-standard.mbsc-active {
    background: #cc7f08;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-info.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-info.mbsc-button-standard.mbsc-hover {
    border-color: #317e89;
  }

  .mbsc-windows.mbsc-button-info.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-info.mbsc-button-standard.mbsc-active {
    background: #317e89;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-dark.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-dark.mbsc-button-standard.mbsc-hover {
    border-color: #000;
  }

  .mbsc-windows.mbsc-button-dark.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-dark.mbsc-button-standard.mbsc-active {
    background: #000;
    color: #fff;
  }

  .mbsc-windows.mbsc-button-light.mbsc-button-outline.mbsc-hover,
  .mbsc-windows.mbsc-button-light.mbsc-button-standard.mbsc-hover {
    border-color: #999;
  }

  .mbsc-windows.mbsc-button-light.mbsc-button-outline.mbsc-active,
  .mbsc-windows.mbsc-button-light.mbsc-button-standard.mbsc-active {
    background: #999;
    color: #47494a;
  }

  .mbsc-windows-dark.mbsc-button-standard {
    background: #404040;
    border-color: #404040;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-standard.mbsc-hover {
    border-color: #ababab;
  }

  .mbsc-windows-dark.mbsc-button-standard.mbsc-active {
    border-color: #ababab;
    background: #ababab;
  }

  .mbsc-windows-dark.mbsc-button-flat {
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-flat.mbsc-active {
    background: #676767;
    border-color: #676767;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-outline {
    border: 0.125em solid #737373;
    color: #737373;
  }

  .mbsc-windows-dark.mbsc-button-outline.mbsc-hover {
    border-color: #8d8d8d;
  }

  .mbsc-windows-dark.mbsc-button-outline.mbsc-active {
    border-color: #8d8d8d;
    background: #8d8d8d;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button.mbsc-focus {
    box-shadow: 0 0 0 1px #fff;
  }

  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-standard {
    background: #3f97f6;
    border-color: #3f97f6;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-standard {
    background: #90979e;
    border-color: #90979e;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-success.mbsc-button-standard {
    background: #43be5f;
    border-color: #43be5f;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-standard {
    background: #f5504e;
    border-color: #f5504e;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-standard {
    background: #f8b042;
    border-color: #f8b042;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-info.mbsc-button-standard {
    background: #5bb7c5;
    border-color: #5bb7c5;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-standard {
    background: #47494a;
    border-color: #47494a;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-light.mbsc-button-standard {
    background: #fff;
    border-color: #fff;
    color: #000;
  }

  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-flat {
    color: #3f97f6;
  }

  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-flat.mbsc-active {
    background: #88bff9;
    border-color: #88bff9;
  }

  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-flat {
    color: #90979e;
  }

  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-flat.mbsc-active {
    background: #b9bdc2;
    border-color: #b9bdc2;
  }

  .mbsc-windows-dark.mbsc-button-success.mbsc-button-flat {
    color: #43be5f;
  }

  .mbsc-windows-dark.mbsc-button-success.mbsc-button-flat.mbsc-active {
    background: #7cd28f;
    border-color: #7cd28f;
  }

  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-flat {
    color: #f5504e;
  }

  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-flat.mbsc-active {
    background: #f99896;
    border-color: #f99896;
  }

  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-flat {
    color: #f8b042;
  }

  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-flat.mbsc-active {
    background: #fbcf8c;
    border-color: #fbcf8c;
  }

  .mbsc-windows-dark.mbsc-button-info.mbsc-button-flat {
    color: #5bb7c5;
  }

  .mbsc-windows-dark.mbsc-button-info.mbsc-button-flat.mbsc-active {
    background: #94d0d9;
    border-color: #94d0d9;
  }

  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-flat {
    color: #47494a;
  }

  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-flat.mbsc-active {
    background: #6c7071;
    border-color: #6c7071;
  }

  .mbsc-windows-dark.mbsc-button-light.mbsc-button-flat {
    color: #ccc;
  }

  .mbsc-windows-dark.mbsc-button-light.mbsc-button-flat.mbsc-active {
    background: #fff;
    border-color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-outline {
    border-color: #3f97f6;
    color: #3f97f6;
  }

  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-outline {
    border-color: #90979e;
    color: #90979e;
  }

  .mbsc-windows-dark.mbsc-button-success.mbsc-button-outline {
    border-color: #43be5f;
    color: #43be5f;
  }

  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-outline {
    border-color: #f5504e;
    color: #f5504e;
  }

  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-outline {
    border-color: #f8b042;
    color: #f8b042;
  }

  .mbsc-windows-dark.mbsc-button-info.mbsc-button-outline {
    border-color: #5bb7c5;
    color: #5bb7c5;
  }

  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-outline {
    border-color: #47494a;
    color: #47494a;
  }

  .mbsc-windows-dark.mbsc-button-light.mbsc-button-outline {
    border-color: #ccc;
    color: #ccc;
  }

  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-standard.mbsc-hover {
    border-color: #0964c6;
  }

  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-primary.mbsc-button-standard.mbsc-active {
    background: #0964c6;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-standard.mbsc-hover {
    border-color: #5d646b;
  }

  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-secondary.mbsc-button-standard.mbsc-active {
    background: #5d646b;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-success.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-success.mbsc-button-standard.mbsc-hover {
    border-color: #287339;
  }

  .mbsc-windows-dark.mbsc-button-success.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-success.mbsc-button-standard.mbsc-active {
    background: #287339;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-standard.mbsc-hover {
    border-color: #d10e0c;
  }

  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-danger.mbsc-button-standard.mbsc-active {
    background: #d10e0c;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-standard.mbsc-hover {
    border-color: #cc7f08;
  }

  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-warning.mbsc-button-standard.mbsc-active {
    background: #cc7f08;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-info.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-info.mbsc-button-standard.mbsc-hover {
    border-color: #317e89;
  }

  .mbsc-windows-dark.mbsc-button-info.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-info.mbsc-button-standard.mbsc-active {
    background: #317e89;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-standard.mbsc-hover {
    border-color: #000;
  }

  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-dark.mbsc-button-standard.mbsc-active {
    background: #000;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-button-light.mbsc-button-outline.mbsc-hover,
  .mbsc-windows-dark.mbsc-button-light.mbsc-button-standard.mbsc-hover {
    border-color: #999;
  }

  .mbsc-windows-dark.mbsc-button-light.mbsc-button-outline.mbsc-active,
  .mbsc-windows-dark.mbsc-button-light.mbsc-button-standard.mbsc-active {
    background: #999;
    color: #47494a;
  }

  .mbsc-button {
    position: relative;
    z-index: 1;
    display: inline-block;
    vertical-align: middle;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 1em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
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

  .mbsc-ios.mbsc-popup-wrapper-bottom-full {
    padding-top: 1em;
  }

  .mbsc-ios.mbsc-popup-wrapper-top-full {
    padding-bottom: 1em;
  }

  .mbsc-ios.mbsc-popup-top {
    border-bottom: 1px solid;
  }

  .mbsc-ios.mbsc-popup-bottom {
    border-top: 1px solid;
  }

  .mbsc-ios.mbsc-popup-body-center {
    border-radius: 0.9375em;
  }

  .mbsc-ios.mbsc-popup-body-bottom-full {
    border-radius: 0.75em 0.75em 0 0;
  }

  .mbsc-ios.mbsc-popup-body-top-full {
    border-radius: 0 0 0.75em 0.75em;
  }

  .mbsc-ios.mbsc-popup-body-anchored {
    border-radius: 0.9375em;
  }

  .mbsc-ios.mbsc-popup-arrow {
    border-radius: 0 0.375em;
  }

  .mbsc-ios.mbsc-popup-header {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    line-height: 1.25em;
    padding: 0.75em 4.375em;
    font-weight: 700;
    text-align: center;
  }

  .mbsc-ios.mbsc-popup-header-center,
  .mbsc-ios.mbsc-popup-header-no-buttons {
    position: relative;
    border-bottom: 1px solid;
  }

  .mbsc-ios.mbsc-popup-header-center {
    padding: 0.75em 0.5em;
  }

  .mbsc-ios.mbsc-popup-bottom-full .mbsc-popup-header,
  .mbsc-ios.mbsc-popup-top-full .mbsc-popup-header {
    padding: 1.125em 4.375em;
  }

  .mbsc-ios.mbsc-popup-buttons {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -moz-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    border-bottom: 1px solid;
  }

  .mbsc-ios.mbsc-popup-buttons.mbsc-ltr {
    text-align: right;
  }

  .mbsc-ios.mbsc-popup-buttons.mbsc-rtl {
    text-align: left;
  }

  .mbsc-ios.mbsc-popup-button.mbsc-font {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    z-index: 2;
  }

  .mbsc-ios.mbsc-popup-button-primary {
    font-weight: 700;
  }

  .mbsc-ios.mbsc-popup-button-close.mbsc-ltr {
    float: left;
  }

  .mbsc-ios.mbsc-popup-button-close.mbsc-rtl {
    float: right;
  }

  .mbsc-ios.mbsc-popup-buttons-anchored,
  .mbsc-ios.mbsc-popup-buttons-bottom,
  .mbsc-ios.mbsc-popup-buttons-top {
    padding: 0 0.25em;
  }

  .mbsc-ios.mbsc-popup-buttons-bottom-full,
  .mbsc-ios.mbsc-popup-buttons-top-full {
    padding: 0.375em 0.25em;
  }

  .mbsc-ios.mbsc-popup-buttons-flex {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -moz-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
    border: 0;
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }

  .mbsc-ios.mbsc-popup-buttons-flex.mbsc-popup-buttons {
    background: none;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-font {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    -moz-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    display: block;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-font.mbsc-button {
    opacity: 1;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-font.mbsc-button-flat {
    background: none;
    border-top: 1px solid;
    border-radius: 0;
    margin: 0;
    line-height: 2.75em;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-button-flat.mbsc-ltr {
    border-right-style: solid;
    border-right-width: 1px;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-button-flat.mbsc-rtl {
    border-left-style: solid;
    border-left-width: 1px;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-button-flat:last-child {
    border-left: 0;
    border-right: 0;
  }

  .mbsc-ios.mbsc-popup-body-round {
    border-radius: 0.9375em;
  }

  .mbsc-ios.mbsc-popup-pointer .mbsc-popup-body-round {
    border-radius: 0.5em;
  }

  .mbsc-ios.mbsc-popup-round .mbsc-popup {
    border: 0;
  }

  .mbsc-ios.mbsc-popup-round .mbsc-popup-body-bottom-full {
    border-radius: 0.75em 0.75em 0 0;
  }

  .mbsc-ios.mbsc-popup-round .mbsc-popup-body-top-full {
    border-radius: 0 0 0.75em 0.75em;
  }

  .mbsc-ios.mbsc-popup-arrow {
    background: #f2f2f7;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  }

  .mbsc-ios.mbsc-popup-bottom,
  .mbsc-ios.mbsc-popup-top {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-popup-body {
    background: #f2f2f7;
    color: #000;
  }

  .mbsc-ios.mbsc-popup-body-anchored,
  .mbsc-ios.mbsc-popup-body-center,
  .mbsc-ios.mbsc-popup-body-round {
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  }

  .mbsc-ios.mbsc-popup-buttons,
  .mbsc-ios.mbsc-popup-header-center,
  .mbsc-ios.mbsc-popup-header-no-buttons {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-popup-buttons-bottom,
  .mbsc-ios.mbsc-popup-buttons-top {
    background: #f7f7f7;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-button-flat.mbsc-font {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-font.mbsc-focus,
  .mbsc-ios.mbsc-popup-button-flex.mbsc-font.mbsc-hover {
    background: #eaeaea;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-font.mbsc-active {
    background: #ccc;
  }

  .mbsc-ios.mbsc-popup-button-flex.mbsc-button.mbsc-disabled {
    color: rgba(0, 122, 255, 0.2);
  }

  .mbsc-ios-dark.mbsc-popup-arrow {
    background: #1c1c1c;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  }

  .mbsc-ios-dark.mbsc-popup-bottom,
  .mbsc-ios-dark.mbsc-popup-top {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-popup-body {
    background: #1c1c1c;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-popup-body-anchored,
  .mbsc-ios-dark.mbsc-popup-body-center,
  .mbsc-ios-dark.mbsc-popup-body-round {
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  }

  .mbsc-ios-dark.mbsc-popup-buttons,
  .mbsc-ios-dark.mbsc-popup-header-center,
  .mbsc-ios-dark.mbsc-popup-header-no-buttons {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-popup-buttons-anchored,
  .mbsc-ios-dark.mbsc-popup-buttons-bottom,
  .mbsc-ios-dark.mbsc-popup-buttons-top {
    background: #292929;
  }

  .mbsc-ios-dark.mbsc-popup-button-flex.mbsc-button-flat.mbsc-font {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-popup-button-flex.mbsc-font.mbsc-focus,
  .mbsc-ios-dark.mbsc-popup-button-flex.mbsc-font.mbsc-hover {
    background: #242424;
  }

  .mbsc-ios-dark.mbsc-popup-button-flex.mbsc-font.mbsc-active {
    background: #333;
  }

  .mbsc-ios-dark.mbsc-popup-button-flex.mbsc-button.mbsc-disabled {
    color: rgba(255, 159, 10, 0.2);
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
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
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
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
    color: #fff;
  }

  .mbsc-material-dark.mbsc-popup-arrow {
    background: #303030;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  }

  .mbsc-material-dark.mbsc-popup-button.mbsc-font {
    color: #87b0f3;
  }

  .mbsc-windows.mbsc-popup {
    border: 1px solid;
  }

  .mbsc-windows.mbsc-popup-anchored-top {
    margin-top: -0.75em;
  }

  .mbsc-windows.mbsc-popup-anchored-bottom {
    margin-top: 0.75em;
  }

  .mbsc-windows.mbsc-popup-arrow {
    width: 1em;
    height: 1em;
    border: 1px solid;
  }

  .mbsc-windows.mbsc-popup-arrow-bottom,
  .mbsc-windows.mbsc-popup-arrow-top {
    margin-left: -0.5em;
  }

  .mbsc-windows.mbsc-popup-arrow-left,
  .mbsc-windows.mbsc-popup-arrow-right {
    margin-top: -0.5em;
  }

  .mbsc-windows.mbsc-popup-arrow-bottom {
    top: 1.5em;
  }

  .mbsc-windows.mbsc-popup-arrow-top {
    bottom: 1.5em;
  }

  .mbsc-windows.mbsc-popup-arrow-left {
    right: 1.5em;
  }

  .mbsc-windows.mbsc-popup-arrow-right {
    left: 1.5em;
  }

  .mbsc-windows.mbsc-popup-header {
    padding: 0.5em;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid;
  }

  .mbsc-windows.mbsc-popup-buttons {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -moz-box-orient: horizontal;
    -moz-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    border-top: 1px solid;
  }

  .mbsc-windows.mbsc-popup-button.mbsc-font {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1;
    -moz-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  }

  .mbsc-windows.mbsc-popup-button.mbsc-button-flat {
    margin: 0;
  }

  .mbsc-windows.mbsc-popup {
    box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.133), 0 1px 4px 0 rgba(0, 0, 0, 0.11);
    color: #333;
  }

  .mbsc-windows.mbsc-popup,
  .mbsc-windows.mbsc-popup-arrow {
    background: #fff;
    border-color: #e6e6e6;
  }

  .mbsc-windows.mbsc-popup-buttons,
  .mbsc-windows.mbsc-popup-header {
    border-color: #e6e6e6;
  }

  .mbsc-windows-dark.mbsc-popup {
    box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.133), 0 1px 4px 0 rgba(0, 0, 0, 0.11);
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-popup,
  .mbsc-windows-dark.mbsc-popup-arrow {
    background: #1a1a1a;
    border-color: #343434;
  }

  .mbsc-windows-dark.mbsc-popup-buttons,
  .mbsc-windows-dark.mbsc-popup-header {
    border-color: #343434;
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
    border-width: var(--mbsc-safe-top) var(--mbsc-safe-right) var(--mbsc-safe-bottom) var(--mbsc-safe-left);
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

  .mbsc-ios.mbsc-calendar-controls {
    padding: 0.125em;
  }

  .mbsc-ios.mbsc-calendar-cell {
    border-top-style: solid;
    border-top-width: 1px;
  }

  .mbsc-ios.mbsc-calendar-cell-text {
    height: 2em;
    padding: 0 0.5em;
    line-height: 2em;
    border-radius: 2em;
  }

  .mbsc-ios.mbsc-calendar-week-day {
    height: 1.7em;
    line-height: 1.7em;
    font-size: 0.625em;
  }

  .mbsc-ios.mbsc-calendar-week-nr {
    width: 2.363636em;
    height: auto;
    font-size: 0.75em;
    line-height: 3em;
  }

  .mbsc-ios.mbsc-calendar-day-text {
    width: 1.625em;
    height: 1.625em;
    margin: 0.1875em;
    padding: 0;
    line-height: 1.625em;
    border: 2px solid transparent;
    border-radius: 2em;
  }

  .mbsc-ios.mbsc-range-day .mbsc-calendar-cell-inner {
    z-index: 1;
  }

  .mbsc-ios.mbsc-range-day:after,
  .mbsc-ios.mbsc-range-hover:before {
    content: "";
    height: 1.875em;
    position: absolute;
    left: 0;
    right: 0;
    top: 0.25em;
    z-index: 0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-ios.mbsc-range-hover:before {
    border-top: 2px dashed;
    border-bottom: 2px dashed;
  }

  .mbsc-ios.mbsc-range-day-end.mbsc-rtl:after,
  .mbsc-ios.mbsc-range-day-start:after,
  .mbsc-ios.mbsc-range-hover-end.mbsc-rtl:before,
  .mbsc-ios.mbsc-range-hover-start:before {
    left: 50%;
    right: 0;
    margin-left: -0.9375em;
    border-radius: 2em 0 0 2em;
  }

  .mbsc-ios.mbsc-range-day-end:after,
  .mbsc-ios.mbsc-range-day-start.mbsc-rtl:after,
  .mbsc-ios.mbsc-range-hover-end:before,
  .mbsc-ios.mbsc-range-hover-start.mbsc-rtl:before {
    right: 50%;
    left: 0;
    margin-right: -0.9375em;
    border-radius: 0 2em 2em 0;
  }

  .mbsc-ios.mbsc-range-day-start.mbsc-range-day-end:after,
  .mbsc-ios.mbsc-range-hover-start.mbsc-range-hover-end:before {
    display: none;
  }

  .mbsc-ios.mbsc-calendar-day-marked {
    padding-bottom: 0.4375em;
  }

  .mbsc-ios.mbsc-calendar-marks {
    margin-top: -0.0625em;
  }

  .mbsc-ios.mbsc-calendar-mark {
    width: 0.375em;
    height: 0.375em;
    border-radius: 0.375em;
    margin: 0 0.0625em;
  }

  .mbsc-ios.mbsc-calendar-day-colors .mbsc-calendar-day-text {
    background-clip: padding-box;
  }

  .mbsc-ios.mbsc-calendar-day-colors.mbsc-hover .mbsc-calendar-cell-text {
    background-clip: border-box;
  }

  .mbsc-ios.mbsc-calendar-text:before {
    border-radius: 0.2em;
  }

  .mbsc-ios.mbsc-calendar-label {
    font-weight: 600;
  }

  .mbsc-ios.mbsc-calendar-label-background {
    background: currentColor;
    border-radius: 0.2em;
    opacity: 0.5;
    -webkit-transition: opacity 0.15s ease-in-out;
    transition: opacity 0.15s ease-in-out;
  }

  .mbsc-ios.mbsc-calendar-label-hover .mbsc-calendar-label-background {
    opacity: 0.6;
  }

  .mbsc-ios.mbsc-calendar-label.mbsc-calendar-label-hover:before {
    background: none;
  }

  .mbsc-ios.mbsc-calendar-label-active .mbsc-calendar-label-background,
  .mbsc-ios.mbsc-calendar-label-dragging .mbsc-calendar-label-background {
    opacity: 0.9;
  }

  .mbsc-ios.mbsc-calendar-height-md .mbsc-calendar-day {
    border-left-style: solid;
    border-left-width: 1px;
  }

  .mbsc-ios.mbsc-calendar-height-md .mbsc-calendar-week-nr {
    padding: 0;
    font-size: 0.75em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-title {
    font-size: 1.5em;
    line-height: 1.666667em;
    padding: 0 0.166667em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-year {
    font-weight: 200;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-week-day {
    height: 2.5em;
    padding: 0 0.5em;
    line-height: 2.5em;
    font-size: 1em;
    border-left: 1px solid transparent;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-day-inner {
    min-height: 2.5em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-day-labels .mbsc-calendar-day-inner {
    min-height: 4.75em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-marks {
    padding: 0 0.75em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-day-text {
    width: 1.375em;
    height: 1.375em;
    line-height: 1.375em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-text {
    height: 1.8em;
    line-height: 1.8em;
    margin: 0 0.4em 0.2em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-text:before {
    border-radius: 0.4em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-label {
    padding: 0 0.4em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-label-background {
    border-radius: 0.4em;
  }

  .mbsc-ios.mbsc-calendar-width-md .mbsc-calendar-label-text {
    font-size: 1.2em;
  }

  .mbsc-ios.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-day.mbsc-ltr,
  .mbsc-ios.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-marks.mbsc-ltr,
  .mbsc-ios.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-week-day.mbsc-ltr {
    text-align: right;
  }

  .mbsc-ios.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-day.mbsc-rtl,
  .mbsc-ios.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-marks.mbsc-rtl,
  .mbsc-ios.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-week-day.mbsc-rtl {
    text-align: left;
  }

  .mbsc-ios.mbsc-calendar {
    background: #fff;
    color: #000;
  }

  .mbsc-ios.mbsc-calendar-header,
  .mbsc-ios.mbsc-calendar-wrapper {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-calendar-button.mbsc-button {
    color: #007aff;
  }

  .mbsc-ios.mbsc-calendar-cell {
    background: #fff;
    border-color: #ccc;
    color: #000;
  }

  .mbsc-ios.mbsc-calendar-today {
    color: #007aff;
  }

  .mbsc-ios.mbsc-hover .mbsc-calendar-cell-text {
    background-color: rgba(0, 122, 255, 0.3);
  }

  .mbsc-ios.mbsc-range-day:after {
    background-color: rgba(185, 216, 249, 0.75);
  }

  .mbsc-ios.mbsc-range-day .mbsc-calendar-cell-text {
    color: #000;
  }

  .mbsc-ios.mbsc-range-hover:before {
    border-color: #dedede;
  }

  .mbsc-ios.mbsc-selected .mbsc-calendar-cell-text {
    border-color: #007aff;
    background: #007aff;
    color: #fff;
  }

  .mbsc-ios.mbsc-focus .mbsc-calendar-cell-text {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
  }

  .mbsc-ios.mbsc-focus .mbsc-calendar-day-text {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.5);
  }

  .mbsc-ios.mbsc-calendar-mark {
    background: #ccc;
  }

  .mbsc-ios.mbsc-calendar-label {
    color: #5ac8fa;
  }

  .mbsc-ios.mbsc-calendar-label-text {
    color: #000;
  }

  .mbsc-ios.mbsc-calendar-label-active .mbsc-calendar-label-inner,
  .mbsc-ios.mbsc-calendar-label-dragging .mbsc-calendar-label-inner {
    color: #fff;
  }

  .mbsc-ios.mbsc-calendar-label-active .mbsc-calendar-label-text,
  .mbsc-ios.mbsc-calendar-label-dragging .mbsc-calendar-label-text {
    color: inherit;
  }

  .mbsc-ios.mbsc-calendar-text-more .mbsc-calendar-label-text {
    color: #000;
  }

  .mbsc-ios.mbsc-calendar-popup .mbsc-calendar-cell,
  .mbsc-ios.mbsc-calendar-popup .mbsc-popup-arrow,
  .mbsc-ios.mbsc-calendar-popup .mbsc-popup-body {
    background: #fff;
  }

  .mbsc-ios-dark.mbsc-calendar {
    background: #000;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-calendar-header,
  .mbsc-ios-dark.mbsc-calendar-wrapper {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-calendar-button.mbsc-button {
    color: #ff9f0a;
  }

  .mbsc-ios-dark.mbsc-calendar-cell {
    background: #000;
    border-color: #333;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-calendar-today {
    color: #ff9f0a;
  }

  .mbsc-ios-dark.mbsc-hover .mbsc-calendar-cell-text {
    background-color: rgba(255, 159, 10, 0.3);
  }

  .mbsc-ios-dark.mbsc-range-day:after {
    background-color: rgba(64, 40, 3, 0.75);
  }

  .mbsc-ios-dark.mbsc-range-day .mbsc-calendar-cell-text {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-range-hover:before {
    border-color: #2b2b2b;
  }

  .mbsc-ios-dark.mbsc-selected .mbsc-calendar-cell-text {
    border-color: #ff9f0a;
    background: #ff9f0a;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-focus .mbsc-calendar-cell-text {
    box-shadow: 0 0 0 2px hsla(0, 0%, 100%, 0.5);
  }

  .mbsc-ios-dark.mbsc-focus .mbsc-calendar-day-text {
    box-shadow: none;
    border-color: hsla(0, 0%, 100%, 0.5);
  }

  .mbsc-ios-dark.mbsc-calendar-mark {
    background: #333;
  }

  .mbsc-ios-dark.mbsc-calendar-label {
    color: #5ac8fa;
  }

  .mbsc-ios-dark.mbsc-calendar-label-active .mbsc-calendar-label-inner,
  .mbsc-ios-dark.mbsc-calendar-label-dragging .mbsc-calendar-label-inner,
  .mbsc-ios-dark.mbsc-calendar-label-text {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-calendar-label-active .mbsc-calendar-label-text,
  .mbsc-ios-dark.mbsc-calendar-label-dragging .mbsc-calendar-label-text {
    color: inherit;
  }

  .mbsc-ios-dark.mbsc-calendar-text-more .mbsc-calendar-label-text {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-calendar-popup .mbsc-popup-arrow,
  .mbsc-ios-dark.mbsc-calendar-popup .mbsc-popup-body {
    background: #292929;
  }

  .mbsc-ios-dark.mbsc-calendar-popup .mbsc-calendar-cell {
    background: #1c1c1c;
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
    font-size: 1.428572em;
    font-weight: 400;
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

  .mbsc-material.mbsc-calendar-width-md .mbsc-calendar-day-labels .mbsc-calendar-day-inner {
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

  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-day.mbsc-ltr,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-marks.mbsc-ltr,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-week-day.mbsc-ltr {
    text-align: left;
  }

  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-day.mbsc-rtl,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-marks.mbsc-rtl,
  .mbsc-material.mbsc-calendar-height-md.mbsc-calendar-width-md .mbsc-calendar-week-day.mbsc-rtl {
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 3px -1px rgba(0, 0, 0, 0.2);
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 3px -1px rgba(0, 0, 0, 0.2);
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

  .mbsc-windows.mbsc-calendar-header {
    margin-bottom: -1px;
  }

  .mbsc-windows.mbsc-calendar-button.mbsc-button.mbsc-font {
    margin: 1px;
  }

  .mbsc-windows.mbsc-calendar-title-wrapper .mbsc-calendar-button {
    padding: 0;
  }

  .mbsc-windows.mbsc-calendar-controls {
    padding: 0.5em;
    min-height: 2.125em;
  }

  .mbsc-windows.mbsc-calendar-week-day {
    height: 2.5em;
    font-size: 0.75em;
    line-height: 2.5em;
  }

  .mbsc-windows.mbsc-calendar-body .mbsc-calendar-week-day {
    border: 0;
  }

  .mbsc-windows.mbsc-calendar-week-nr {
    width: 2.166667em;
    font-size: 0.75em;
    font-weight: 700;
    line-height: 3em;
  }

  .mbsc-windows.mbsc-calendar-picker-slide {
    padding: 0.25em;
  }

  .mbsc-windows.mbsc-calendar-cell {
    border-color: transparent;
    border-style: solid;
    border-width: 1px 0 0 1px;
    background-clip: padding-box;
  }

  .mbsc-windows.mbsc-calendar-cell:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .mbsc-windows.mbsc-calendar-cell-inner {
    display: table;
    table-layout: fixed;
    position: relative;
    width: 100%;
    height: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-color: transparent;
    border-style: solid;
    border-width: 2px 1px;
  }

  .mbsc-windows.mbsc-calendar-cell-text {
    display: table-cell;
    vertical-align: middle;
    min-width: 0;
  }

  .mbsc-windows.mbsc-calendar-day-empty:after {
    display: none;
  }

  .mbsc-windows.mbsc-calendar-day-text {
    display: inline-block;
    font-size: 0.875em;
    line-height: 2.285715em;
    border-radius: 2em;
    width: 2.285715em;
    margin: 0 auto;
  }

  .mbsc-windows.mbsc-calendar-day-labels .mbsc-calendar-day-text {
    display: block;
  }

  .mbsc-windows.mbsc-calendar-marks {
    bottom: 0.25em;
  }

  .mbsc-windows.mbsc-calendar-text {
    margin: 0 0 0.2em;
  }

  .mbsc-windows.mbsc-calendar-label-background {
    background: currentColor;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-title {
    font-size: 1.625em;
    font-weight: 300;
    line-height: 1.461538em;
    padding: 0 0.307693em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-week-day {
    height: 2.142858em;
    padding: 0 0.5em;
    font-size: 0.875em;
    line-height: 2.142858em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day-inner {
    min-height: 4em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day-text {
    text-align: center;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day-labels .mbsc-calendar-day-inner {
    min-height: 4.625em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-marks {
    bottom: 0.5em;
    padding: 0 0.625em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-text {
    height: 1.8em;
    line-height: 1.8em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-label {
    padding: 0 0.6em;
    margin: 0 0 0.2em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-label-text {
    font-size: 1.2em;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day.mbsc-ltr,
  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-marks.mbsc-ltr,
  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-week-day.mbsc-ltr {
    text-align: left;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day.mbsc-rtl,
  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-marks.mbsc-rtl,
  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-week-day.mbsc-rtl {
    text-align: right;
  }

  .mbsc-windows.mbsc-calendar,
  .mbsc-windows.mbsc-calendar-button.mbsc-button {
    color: #333;
  }

  .mbsc-windows.mbsc-calendar-button.mbsc-button.mbsc-active {
    background: #f2f2f2;
    border-color: #f2f2f2;
  }

  .mbsc-windows.mbsc-calendar-button.mbsc-button.mbsc-focus {
    box-shadow: 0 0 0 1px #333;
  }

  .mbsc-windows.mbsc-calendar-wrapper-fixed {
    border-bottom: 1px solid #e6e6e6;
  }

  .mbsc-windows.mbsc-calendar-slide {
    background: #fff;
    color: #333;
  }

  .mbsc-windows.mbsc-calendar-week-day {
    color: #666;
  }

  .mbsc-windows.mbsc-calendar-today {
    color: #0078d7;
  }

  .mbsc-windows.mbsc-range-day {
    border-left-color: rgba(0, 120, 215, 0.25);
  }

  .mbsc-windows.mbsc-range-day-end.mbsc-rtl,
  .mbsc-windows.mbsc-range-day-start.mbsc-ltr {
    border-left-color: transparent;
  }

  .mbsc-windows.mbsc-range-hover .mbsc-calendar-cell-inner {
    border-top-color: rgba(51, 51, 51, 0.1);
    border-bottom-color: rgba(51, 51, 51, 0.1);
    border-style: dashed;
  }

  .mbsc-windows.mbsc-range-day .mbsc-calendar-cell-inner,
  .mbsc-windows.mbsc-selected .mbsc-calendar-cell-inner {
    background: rgba(0, 120, 215, 0.25);
  }

  .mbsc-windows.mbsc-selected.mbsc-range-day .mbsc-calendar-cell-inner {
    background-color: #0078d7;
  }

  .mbsc-windows.mbsc-selected.mbsc-range-day .mbsc-calendar-cell-text {
    color: #fff;
  }

  .mbsc-windows.mbsc-calendar-day-colors.mbsc-selected:after {
    border: 2px solid #0078d7;
  }

  .mbsc-windows.mbsc-calendar-cell.mbsc-focus:after {
    border: 1px solid #333;
  }

  .mbsc-windows.mbsc-calendar-cell.mbsc-hover:after {
    background: rgba(51, 51, 51, 0.1);
  }

  .mbsc-windows.mbsc-calendar-mark {
    background: rgba(51, 51, 51, 0.5);
  }

  .mbsc-windows.mbsc-calendar-label {
    color: #0078d7;
  }

  .mbsc-windows.mbsc-calendar-label-inner {
    color: #fff;
  }

  .mbsc-windows.mbsc-calendar-label.mbsc-calendar-label-active {
    outline: 1px solid #333;
  }

  .mbsc-windows.mbsc-calendar-text-more .mbsc-calendar-label-text {
    color: #333;
  }

  .mbsc-windows.mbsc-calendar-height-md .mbsc-calendar-week-day {
    border-color: #e6e6e6;
  }

  .mbsc-windows.mbsc-calendar-popup .mbsc-popup,
  .mbsc-windows.mbsc-calendar-popup .mbsc-popup-arrow {
    background: #fff;
    border-color: #e6e6e6;
  }

  .mbsc-windows.mbsc-calendar-width-md .mbsc-calendar-day {
    border-color: #e6e6e6;
  }

  .mbsc-windows-dark.mbsc-calendar,
  .mbsc-windows-dark.mbsc-calendar-button.mbsc-button {
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-button.mbsc-button.mbsc-active {
    background: #676767;
    border-color: #676767;
  }

  .mbsc-windows-dark.mbsc-calendar-button.mbsc-button.mbsc-focus {
    box-shadow: 0 0 0 1px #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-wrapper-fixed {
    border-bottom: 1px solid #343434;
  }

  .mbsc-windows-dark.mbsc-calendar-slide {
    background: #1a1a1a;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-week-day {
    color: #ccc;
  }

  .mbsc-windows-dark.mbsc-calendar-today {
    color: #0078d7;
  }

  .mbsc-windows-dark.mbsc-range-day {
    border-left-color: rgba(0, 120, 215, 0.25);
  }

  .mbsc-windows-dark.mbsc-range-day-end.mbsc-rtl,
  .mbsc-windows-dark.mbsc-range-day-start.mbsc-ltr {
    border-left-color: transparent;
  }

  .mbsc-windows-dark.mbsc-range-hover .mbsc-calendar-cell-inner {
    border-top-color: hsla(0, 0%, 100%, 0.22);
    border-bottom-color: hsla(0, 0%, 100%, 0.22);
    border-style: dashed;
  }

  .mbsc-windows-dark.mbsc-range-day .mbsc-calendar-cell-inner,
  .mbsc-windows-dark.mbsc-selected .mbsc-calendar-cell-inner {
    background: rgba(0, 120, 215, 0.25);
  }

  .mbsc-windows-dark.mbsc-selected.mbsc-range-day .mbsc-calendar-cell-inner {
    background-color: #0078d7;
  }

  .mbsc-windows-dark.mbsc-selected.mbsc-range-day .mbsc-calendar-cell-text {
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-day-colors.mbsc-selected:after {
    border: 2px solid #0078d7;
  }

  .mbsc-windows-dark.mbsc-calendar-cell.mbsc-focus:after {
    border: 1px solid #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-cell.mbsc-hover:after {
    background: hsla(0, 0%, 100%, 0.22);
  }

  .mbsc-windows-dark.mbsc-calendar-mark {
    background: hsla(0, 0%, 100%, 0.5);
  }

  .mbsc-windows-dark.mbsc-calendar-label {
    color: #0078d7;
  }

  .mbsc-windows-dark.mbsc-calendar-label-inner {
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-label.mbsc-calendar-label-active {
    outline: 1px solid #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-text-more .mbsc-calendar-label-text {
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-calendar-height-md .mbsc-calendar-week-day {
    border-color: #343434;
  }

  .mbsc-windows-dark.mbsc-calendar-popup .mbsc-popup,
  .mbsc-windows-dark.mbsc-calendar-popup .mbsc-popup-arrow {
    background: #1a1a1a;
    border-color: #343434;
  }

  .mbsc-windows-dark.mbsc-calendar-width-md .mbsc-calendar-day {
    border-color: #343434;
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

  .mbsc-calendar-day-outer .mbsc-calendar-day-text {
    opacity: 0.5;
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
    font-size: 1.375em;
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

  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-ltr,
  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-item-multi.mbsc-ltr {
    text-align: left;
  }

  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-rtl,
  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-item-multi.mbsc-rtl {
    text-align: right;
  }

  .mbsc-material.mbsc-scroller-wheel-cont {
    border-color: #1a73e8;
  }

  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-single,
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

  .mbsc-material.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-selected {
    color: #1a73e8;
    background: rgba(0, 0, 0, 0.15);
  }

  .mbsc-material-dark.mbsc-scroller-wheel-cont {
    border-color: #87b0f3;
  }

  .mbsc-material-dark.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-single,
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

  .mbsc-material-dark.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-selected {
    color: #87b0f3;
    background: rgba(0, 0, 0, 0.15);
  }

  .mbsc-ios.mbsc-scroller-wheel-multi.mbsc-scroller-wheel-cont-3d {
    visibility: hidden;
  }

  .mbsc-ios.mbsc-scroller-wheel-group-cont {
    padding: 0 0.625em;
  }

  .mbsc-ios.mbsc-scroller-wheel-group {
    padding: 0.625em;
  }

  .mbsc-ios.mbsc-wheel-group-checkmark {
    padding: 0.625em 0;
  }

  .mbsc-ios.mbsc-scroller-wheel-line {
    display: block;
    z-index: 1;
    border-radius: 0.5em;
    margin: 0 0.625em;
  }

  .mbsc-ios.mbsc-scroller-wheel-item {
    padding: 0 0.5em;
    font-size: 1.25em;
    text-align: center;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 0.5em;
  }

  .mbsc-ios.mbsc-scroller-wheel-overlay {
    display: block;
  }

  .mbsc-ios.mbsc-wheel-checkmark {
    display: none;
    position: absolute;
    width: 1.75em;
    height: 1.75em;
    top: 50%;
    margin-top: -0.875em;
  }

  .mbsc-ios.mbsc-wheel-checkmark:after {
    content: "";
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    display: block;
    opacity: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 32%;
    left: 26%;
    width: 0.75em;
    height: 0.375em;
    border: 0.125em solid;
    border-top: 0;
    border-right: 0;
    -webkit-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
  }

  .mbsc-ios.mbsc-ltr .mbsc-wheel-checkmark {
    left: 0;
  }

  .mbsc-ios.mbsc-rtl .mbsc-wheel-checkmark {
    right: 0;
  }

  .mbsc-ios.mbsc-wheel-checkmark.mbsc-selected:after {
    opacity: 1;
  }

  .mbsc-ios.mbsc-scroller-pointer .mbsc-ios.mbsc-wheel-item-checkmark .mbsc-wheel-checkmark,
  .mbsc-ios.mbsc-wheel-item-multi .mbsc-ios.mbsc-wheel-checkmark {
    display: block;
  }

  .mbsc-ios.mbsc-scroller-wheel-3d {
    overflow: visible;
  }

  .mbsc-ios.mbsc-scroller-wheel-item-3d {
    font-size: 1.125em;
  }

  .mbsc-ios.mbsc-scroller-wheel-item-2d.mbsc-wheel-item-checkmark,
  .mbsc-ios.mbsc-scroller-wheel-item-3d.mbsc-wheel-item-checkmark {
    padding-left: 1.75em;
    padding-right: 1.75em;
  }

  .mbsc-ios.mbsc-scroller-pointer .mbsc-scroller-wheel-overlay {
    display: none;
  }

  .mbsc-ios.mbsc-scroller-pointer .mbsc-scroller-wheel-item {
    font-size: 1em;
    padding: 0 0.75em;
  }

  .mbsc-ios.mbsc-scroller-pointer .mbsc-scroller-wheel-item.mbsc-wheel-item-checkmark.mbsc-ltr {
    text-align: left;
    padding-left: 1.75em;
  }

  .mbsc-ios.mbsc-scroller-pointer .mbsc-scroller-wheel-item.mbsc-wheel-item-checkmark.mbsc-rtl {
    text-align: right;
    padding-right: 1.75em;
  }

  .mbsc-ios.mbsc-scroller {
    background: #fff;
  }

  .mbsc-ios.mbsc-scroller-bottom,
  .mbsc-ios.mbsc-scroller-top {
    background: #d1d5db;
  }

  .mbsc-ios.mbsc-scroller-wheel-overlay {
    background: -webkit-linear-gradient(#fff, hsla(0, 0%, 100%, 0) 52%, hsla(0, 0%, 100%, 0) 0, #fff);
    background: linear-gradient(#fff, hsla(0, 0%, 100%, 0) 52%, hsla(0, 0%, 100%, 0) 0, #fff);
  }

  .mbsc-ios.mbsc-scroller-wheel-overlay-bottom,
  .mbsc-ios.mbsc-scroller-wheel-overlay-top {
    background: -webkit-linear-gradient(#d1d5db, rgba(209, 213, 219, 0) 52%, rgba(209, 213, 219, 0) 0, #d1d5db);
    background: linear-gradient(#d1d5db, rgba(209, 213, 219, 0) 52%, rgba(209, 213, 219, 0) 0, #d1d5db);
  }

  .mbsc-ios.mbsc-scroller-wheel-line {
    background: rgba(0, 0, 0, 0.1);
  }

  .mbsc-ios.mbsc-scroller-wheel-item {
    color: #9e9e9e;
  }

  .mbsc-ios.mbsc-scroller-wheel-item.mbsc-active,
  .mbsc-ios.mbsc-scroller-wheel-item.mbsc-focus,
  .mbsc-ios.mbsc-scroller-wheel-item.mbsc-hover {
    background: rgba(0, 122, 255, 0.15);
  }

  .mbsc-ios.mbsc-scroller-wheel-item-2d,
  .mbsc-ios.mbsc-scroller-wheel-item.mbsc-selected {
    color: #000;
  }

  .mbsc-ios.mbsc-scroller-wheel-cont-3d {
    background: #fff;
  }

  .mbsc-ios.mbsc-scroller-wheel-item-3d {
    color: #a3a3a3;
  }

  .mbsc-ios.mbsc-scroller-wheel-item-3d.mbsc-wheel-item-multi {
    color: #000;
  }

  .mbsc-ios.mbsc-scroller-wheel-item-3d.mbsc-wheel-item-multi.mbsc-selected-3d {
    color: #007aff;
  }

  .mbsc-ios.mbsc-scroller-wheel-cont-bottom.mbsc-scroller-wheel-cont-3d,
  .mbsc-ios.mbsc-scroller-wheel-cont-top.mbsc-scroller-wheel-cont-3d {
    background: #d1d5db;
  }

  .mbsc-ios.mbsc-scroller-pointer.mbsc-scroller,
  .mbsc-ios.mbsc-scroller-pointer.mbsc-scroller-inline,
  .mbsc-ios.mbsc-scroller-wheel-cont-inline.mbsc-scroller-wheel-cont-3d {
    background: #fff;
  }

  .mbsc-ios.mbsc-scroller-pointer .mbsc-scroller-wheel-item {
    color: #000;
  }

  .mbsc-ios.mbsc-scroller-pointer .mbsc-scroller-wheel-item.mbsc-selected {
    color: #007aff;
  }

  .mbsc-ios-dark.mbsc-scroller,
  .mbsc-ios-dark.mbsc-scroller-bottom,
  .mbsc-ios-dark.mbsc-scroller-top {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-overlay,
  .mbsc-ios-dark.mbsc-scroller-wheel-overlay-bottom,
  .mbsc-ios-dark.mbsc-scroller-wheel-overlay-top {
    background: -webkit-linear-gradient(#1c1c1c, rgba(28, 28, 28, 0) 52%, rgba(28, 28, 28, 0) 0, #1c1c1c);
    background: linear-gradient(#1c1c1c, rgba(28, 28, 28, 0) 52%, rgba(28, 28, 28, 0) 0, #1c1c1c);
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-line {
    background: hsla(0, 0%, 100%, 0.1);
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-item {
    color: #9e9e9e;
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-item.mbsc-active,
  .mbsc-ios-dark.mbsc-scroller-wheel-item.mbsc-focus,
  .mbsc-ios-dark.mbsc-scroller-wheel-item.mbsc-hover {
    background: rgba(255, 159, 10, 0.15);
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-item-2d,
  .mbsc-ios-dark.mbsc-scroller-wheel-item.mbsc-selected {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-cont-3d {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-item-3d {
    color: #666;
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-item-3d.mbsc-wheel-item-multi {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-scroller-wheel-item-3d.mbsc-wheel-item-multi.mbsc-selected-3d {
    color: #ff9f0a;
  }

  .mbsc-ios-dark.mbsc-scroller-pointer.mbsc-scroller,
  .mbsc-ios-dark.mbsc-scroller-pointer.mbsc-scroller-inline,
  .mbsc-ios-dark.mbsc-scroller-wheel-cont-bottom.mbsc-scroller-wheel-cont-3d,
  .mbsc-ios-dark.mbsc-scroller-wheel-cont-inline.mbsc-scroller-wheel-cont-3d,
  .mbsc-ios-dark.mbsc-scroller-wheel-cont-top.mbsc-scroller-wheel-cont-3d {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-scroller-pointer .mbsc-scroller-wheel-item {
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-scroller-pointer .mbsc-scroller-wheel-item.mbsc-selected {
    color: #ff9f0a;
  }

  .mbsc-windows.mbsc-scroller {
    position: relative;
  }

  .mbsc-windows.mbsc-scroller-wheel-wrapper.mbsc-ltr {
    border-left-width: 1px;
    border-left-style: solid;
  }

  .mbsc-windows.mbsc-scroller-wheel-wrapper-0.mbsc-ltr {
    border-left: 0;
  }

  .mbsc-windows.mbsc-scroller-wheel-wrapper.mbsc-rtl {
    border-right-width: 1px;
    border-right-style: solid;
  }

  .mbsc-windows.mbsc-scroller-wheel-wrapper-0.mbsc-rtl {
    border-right: 0;
  }

  .mbsc-windows.mbsc-scroller-wheel-item {
    padding: 0 0.5em;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }

  .mbsc-windows.mbsc-wheel-item-multi {
    padding: 0 2.0625em;
  }

  .mbsc-windows.mbsc-wheel-item-multi.mbsc-ltr {
    text-align: left;
  }

  .mbsc-windows.mbsc-wheel-item-multi.mbsc-rtl {
    text-align: right;
  }

  .mbsc-windows.mbsc-scroller-wheel-line {
    display: block;
    z-index: 1;
  }

  .mbsc-windows.mbsc-wheel-checkmark {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    display: none;
    margin-top: -0.8125em;
    width: 1.5625em;
    height: 1.5625em;
  }

  .mbsc-windows.mbsc-wheel-checkmark:after {
    content: "";
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    display: block;
    opacity: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 28%;
    left: 21%;
    width: 0.875em;
    height: 0.475em;
    border: 0.125em solid;
    border-top: 0;
    border-right: 0;
  }

  .mbsc-windows.mbsc-wheel-checkmark.mbsc-selected:after {
    opacity: 1;
  }

  .mbsc-windows.mbsc-wheel-checkmark.mbsc-ltr {
    left: 0.25em;
  }

  .mbsc-windows.mbsc-wheel-checkmark.mbsc-rtl {
    right: 0.25em;
  }

  .mbsc-windows.mbsc-wheel-item-multi .mbsc-windows.mbsc-wheel-checkmark {
    display: block;
  }

  .mbsc-windows.mbsc-scroller-pointer .mbsc-scroller-wheel-item {
    padding: 0 1.25em;
  }

  .mbsc-windows.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-ltr {
    text-align: left;
  }

  .mbsc-windows.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-rtl {
    text-align: right;
  }

  .mbsc-windows.mbsc-scroller-pointer .mbsc-wheel-item-multi {
    padding: 0 2.0625em;
  }

  .mbsc-windows.mbsc-scroller-bar:after {
    border-radius: 0;
  }

  .mbsc-windows.mbsc-scroller-wheel-wrapper {
    color: #333;
    border-color: #e6e6e6;
  }

  .mbsc-windows.mbsc-scroller-wheel-line {
    background: rgba(0, 120, 215, 0.4);
  }

  .mbsc-windows.mbsc-scroller-wheel-item.mbsc-active,
  .mbsc-windows.mbsc-scroller-wheel-item.mbsc-focus,
  .mbsc-windows.mbsc-scroller-wheel-item.mbsc-hover {
    background: rgba(51, 51, 51, 0.1);
  }

  .mbsc-windows.mbsc-wheel-checkmark:after {
    border-color: #0078d7;
  }

  .mbsc-windows.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-selected {
    color: #0078d7;
  }

  .mbsc-windows-dark.mbsc-scroller-wheel-wrapper {
    color: #fff;
    border-color: #343434;
  }

  .mbsc-windows-dark.mbsc-scroller-wheel-line {
    background: rgba(0, 120, 215, 0.4);
  }

  .mbsc-windows-dark.mbsc-scroller-wheel-item.mbsc-active,
  .mbsc-windows-dark.mbsc-scroller-wheel-item.mbsc-focus,
  .mbsc-windows-dark.mbsc-scroller-wheel-item.mbsc-hover {
    background: hsla(0, 0%, 100%, 0.1);
  }

  .mbsc-windows-dark.mbsc-wheel-checkmark:after {
    border-color: #0078d7;
  }

  .mbsc-windows-dark.mbsc-scroller-pointer .mbsc-wheel-group-cont-single .mbsc-scroller-wheel-item.mbsc-selected {
    color: #0078d7;
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

  .mbsc-ios.mbsc-datetime-year-wheel .mbsc-scroller-wheel-item {
    min-width: 3.8em;
  }

  .mbsc-ios.mbsc-datetime-month-wheel .mbsc-scroller-wheel-item {
    text-align: left;
  }

  .mbsc-ios.mbsc-datetime-date-wheel .mbsc-scroller-wheel-item,
  .mbsc-ios.mbsc-datetime-day-wheel .mbsc-scroller-wheel-item,
  .mbsc-ios.mbsc-datetime-hour-wheel .mbsc-scroller-wheel-item {
    text-align: right;
  }

  .mbsc-windows.mbsc-datetime-date-wheel.mbsc-scroller-wheel-wrapper {
    min-width: 120px;
  }

  .mbsc-windows.mbsc-datetime-date-wheel .mbsc-scroller-wheel-item,
  .mbsc-windows.mbsc-datetime-month-wheel .mbsc-scroller-wheel-item {
    text-align: left;
  }

  .mbsc-windows.mbsc-datetime-date-wheel.mbsc-rtl .mbsc-scroller-wheel-item,
  .mbsc-windows.mbsc-datetime-month-wheel.mbsc-rtl .mbsc-scroller-wheel-item {
    text-align: right;
  }

  .mbsc-ios.mbsc-segmented {
    margin: 0.75em;
    padding: 0.0625em;
    position: relative;
    border-radius: 0.5625em;
  }

  .mbsc-ios.mbsc-segmented-item:before {
    content: "";
    position: absolute;
    border-left: 1px solid;
    top: 0.3125em;
    bottom: 0.3125em;
    opacity: 1;
    -webkit-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
  }

  .mbsc-ios.mbsc-segmented-item.mbsc-ltr:before {
    left: 0;
  }

  .mbsc-ios.mbsc-segmented-item.mbsc-rtl:before {
    right: 0;
  }

  .mbsc-ios.mbsc-segmented-item-selected + .mbsc-segmented-item:before,
  .mbsc-ios.mbsc-segmented-item-selected:before,
  .mbsc-ios.mbsc-segmented-item:first-child:before {
    opacity: 0;
  }

  .mbsc-ios.mbsc-segmented-selectbox {
    position: absolute;
    padding: 0.0625em;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 0.4375em;
  }

  .mbsc-ios.mbsc-segmented-selectbox-animate {
    -webkit-transition: -webkit-transform 0.2s ease-in-out;
    transition: -webkit-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  }

  .mbsc-ios.mbsc-segmented-selectbox-inner {
    height: 100%;
    border-radius: 0.4375em;
    -webkit-transition: -webkit-transform 0.1s ease-in-out;
    transition: -webkit-transform 0.1s ease-in-out;
    transition: transform 0.1s ease-in-out;
    transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    visibility: hidden;
  }

  .mbsc-ios.mbsc-segmented-selectbox-inner-visible {
    visibility: visible;
  }

  .mbsc-ios.mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
    -webkit-transform-origin: left;
    transform-origin: left;
  }

  .mbsc-ios.mbsc-segmented-item:last-child .mbsc-segmented-selectbox-inner {
    -webkit-transform-origin: right;
    transform-origin: right;
  }

  .mbsc-ios.mbsc-segmented-dragging .mbsc-segmented-selectbox-inner {
    -webkit-transform: scale(0.97, 0.95);
    transform: scale(0.97, 0.95);
  }

  .mbsc-ios.mbsc-segmented-dragging .mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
    -webkit-transform: scale(0.97, 0.95) translateX(0.0625em);
    transform: scale(0.97, 0.95) translateX(0.0625em);
  }

  .mbsc-ios.mbsc-segmented-dragging .mbsc-segmented-item:last-child .mbsc-segmented-selectbox-inner {
    -webkit-transform: scale(0.97, 0.95) translateX(-0.0625em);
    transform: scale(0.97, 0.95) translateX(-0.0625em);
  }

  .mbsc-ios.mbsc-segmented-button.mbsc-icon-button {
    height: 2.307693em;
  }

  .mbsc-ios.mbsc-segmented-button.mbsc-button {
    margin: 0;
    padding: 0 0.615385em;
    border-radius: 0;
    font-size: 0.8125em;
    line-height: 2.307693em;
    -webkit-transition: opacity 0.1s ease-out, background-color 0.1s ease-out, -webkit-transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-out, background-color 0.1s ease-out, -webkit-transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-out, background-color 0.1s ease-out, transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-out, background-color 0.1s ease-out, transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .mbsc-ios.mbsc-segmented-button.mbsc-button.mbsc-active,
  .mbsc-ios.mbsc-segmented-button.mbsc-button.mbsc-hover {
    opacity: 1;
  }

  .mbsc-ios.mbsc-segmented-dragging .mbsc-segmented-item-selected .mbsc-segmented-button {
    -webkit-transform: scale(0.97, 0.95);
    transform: scale(0.97, 0.95);
  }

  .mbsc-ios.mbsc-segmented-item-selected:first-child .mbsc-segmented-button {
    -webkit-transform-origin: left;
    transform-origin: left;
  }

  .mbsc-ios.mbsc-segmented-item-selected:last-child .mbsc-segmented-button {
    -webkit-transform-origin: right;
    transform-origin: right;
  }

  .mbsc-ios.mbsc-segmented {
    background: #dedede;
  }

  .mbsc-ios.mbsc-segmented-item:before {
    border-color: rgba(0, 0, 0, 0.2);
  }

  .mbsc-ios.mbsc-segmented-item.mbsc-focus .mbsc-segmented-selectbox {
    box-shadow: inset 0 0 0 0.0625em rgba(0, 0, 0, 0.5);
  }

  .mbsc-ios.mbsc-segmented-selectbox-inner {
    background: #fff;
  }

  .mbsc-ios.mbsc-segmented-selectbox-inner.mbsc-selected {
    box-shadow: 3px 3px 8px -4px #bababa;
  }

  .mbsc-ios.mbsc-segmented-button.mbsc-button {
    background: transparent;
    color: #000;
  }

  .mbsc-ios.mbsc-segmented-primary {
    background: #3f97f6;
  }

  .mbsc-ios.mbsc-segmented-secondary {
    background: #90979e;
  }

  .mbsc-ios.mbsc-segmented-success {
    background: #43be5f;
  }

  .mbsc-ios.mbsc-segmented-warning {
    background: #f8b042;
  }

  .mbsc-ios.mbsc-segmented-danger {
    background: #f5504e;
  }

  .mbsc-ios.mbsc-segmented-info {
    background: #5bb7c5;
  }

  .mbsc-ios.mbsc-segmented-light {
    background: #fff;
  }

  .mbsc-ios.mbsc-segmented-dark {
    background: #47494a;
  }

  .mbsc-ios-dark.mbsc-segmented {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-segmented-item:before {
    border-color: hsla(0, 0%, 100%, 0.2);
  }

  .mbsc-ios-dark.mbsc-segmented-item.mbsc-focus .mbsc-segmented-selectbox {
    box-shadow: inset 0 0 0 0.0625em hsla(0, 0%, 100%, 0.5);
  }

  .mbsc-ios-dark.mbsc-segmented-selectbox-inner {
    background: #5a5a5a;
  }

  .mbsc-ios-dark.mbsc-segmented-selectbox-inner.mbsc-selected {
    box-shadow: 3px 3px 8px -4px #000;
  }

  .mbsc-ios-dark.mbsc-segmented-button.mbsc-button {
    background: transparent;
    color: #fff;
  }

  .mbsc-ios-dark.mbsc-calendar-header .mbsc-ios-dark.mbsc-segmented,
  .mbsc-ios-dark.mbsc-datepicker .mbsc-segmented,
  .mbsc-ios-dark.mbsc-popup .mbsc-ios-dark.mbsc-segmented {
    background: #2b2b2b;
  }

  .mbsc-ios-dark.mbsc-segmented-primary {
    background: #3f97f6;
  }

  .mbsc-ios-dark.mbsc-segmented-secondary {
    background: #90979e;
  }

  .mbsc-ios-dark.mbsc-segmented-success {
    background: #43be5f;
  }

  .mbsc-ios-dark.mbsc-segmented-warning {
    background: #f8b042;
  }

  .mbsc-ios-dark.mbsc-segmented-danger {
    background: #f5504e;
  }

  .mbsc-ios-dark.mbsc-segmented-info {
    background: #5bb7c5;
  }

  .mbsc-ios-dark.mbsc-segmented-light {
    background: #fff;
  }

  .mbsc-ios-dark.mbsc-segmented-dark {
    background: #47494a;
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

  .mbsc-material.mbsc-segmented-item:first-child .mbsc-segmented-button.mbsc-rtl {
    border-radius: 0 0.25em 0.25em 0;
    border-right-width: 0.142858em;
  }

  .mbsc-material.mbsc-segmented-item:last-child .mbsc-segmented-button {
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    border-right-width: 0.142858em;
  }

  .mbsc-material.mbsc-segmented-item:last-child .mbsc-segmented-button.mbsc-rtl {
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

  .mbsc-windows.mbsc-segmented {
    padding: 0.75em;
  }

  .mbsc-windows.mbsc-segmented-selectbox {
    display: none;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button {
    margin: 0;
    border-color: transparent;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-hover {
    border-color: transparent;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-focus {
    z-index: 2;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-primary.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-primary.mbsc-selected {
    background: #3f97f6;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-secondary.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-secondary.mbsc-selected {
    background: #90979e;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-success.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-success.mbsc-selected {
    background: #43be5f;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-danger.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-danger.mbsc-selected {
    background: #f5504e;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-warning.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-warning.mbsc-selected {
    background: #f8b042;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-info.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-button-info.mbsc-selected {
    background: #5bb7c5;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button {
    background: #ccc;
    color: #333;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-active,
  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-hover {
    background: #d4d4d4;
  }

  .mbsc-windows.mbsc-segmented-button.mbsc-button.mbsc-selected {
    background: #7a7a7a;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-segmented-button.mbsc-button {
    background: #404040;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-segmented-button.mbsc-button.mbsc-active,
  .mbsc-windows-dark.mbsc-segmented-button.mbsc-button.mbsc-hover {
    background: #454545;
  }

  .mbsc-windows-dark.mbsc-segmented-button.mbsc-button.mbsc-selected {
    background: #ababab;
    color: #000;
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

  .mbsc-ios.mbsc-picker .mbsc-popup-overlay-bottom,
  .mbsc-ios.mbsc-picker .mbsc-popup-overlay-top {
    background: none;
  }

  .mbsc-ios.mbsc-datepicker-inline {
    border-top: 1px solid;
    border-bottom: 1px solid;
    margin-top: -1px;
    margin-bottom: -1px;
    z-index: 2;
    position: relative;
  }

  .mbsc-ios.mbsc-datepicker .mbsc-calendar-cell,
  .mbsc-ios.mbsc-datepicker .mbsc-calendar-cell-inner {
    border-color: transparent;
  }

  .mbsc-ios.mbsc-datepicker .mbsc-highlighted .mbsc-calendar-day-text,
  .mbsc-ios.mbsc-datepicker .mbsc-hover .mbsc-calendar-day-text,
  .mbsc-ios.mbsc-datepicker .mbsc-selected .mbsc-calendar-day-text {
    width: 1.444445em;
    height: 1.444445em;
    margin: 0.16667em;
    font-size: 1.125em;
    line-height: 1.444445em;
  }

  .mbsc-ios.mbsc-picker-header {
    line-height: 1.25em;
    padding: 0.75em 4.375em;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid;
  }

  .mbsc-ios.mbsc-range-control-wrapper {
    padding: 0 0.75em;
    overflow: hidden;
  }

  .mbsc-ios.mbsc-range-control-wrapper .mbsc-segmented {
    width: 17em;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mbsc-ios.mbsc-datepicker-control-calendar.mbsc-datepicker-control-time .mbsc-range-control-wrapper .mbsc-segmented,
  .mbsc-ios.mbsc-datepicker-control-date.mbsc-datepicker-control-time .mbsc-range-control-wrapper .mbsc-segmented,
  .mbsc-ios.mbsc-datepicker-control-datetime .mbsc-range-control-wrapper .mbsc-segmented {
    width: 25em;
  }

  .mbsc-ios.mbsc-range-control-wrapper .mbsc-segmented-button {
    display: block;
    padding: 0 0.5em;
  }

  .mbsc-ios.mbsc-range-control-wrapper .mbsc-range-value-nonempty .mbsc-segmented-button {
    padding: 0 2.0625em 0 0.5em;
  }

  .mbsc-ios.mbsc-range-control-wrapper .mbsc-range-value-nonempty .mbsc-segmented-button.mbsc-rtl {
    padding: 0 0.5em 0 2.0625em;
  }

  .mbsc-ios.mbsc-range-control-label,
  .mbsc-ios.mbsc-range-control-value {
    text-align: left;
    line-height: 1.538462em;
  }

  .mbsc-ios.mbsc-range-control-label.active,
  .mbsc-ios.mbsc-range-control-value.active {
    font-weight: 600;
  }

  .mbsc-ios.mbsc-range-control-label.mbsc-rtl,
  .mbsc-ios.mbsc-range-control-value.mbsc-rtl {
    text-align: right;
  }

  .mbsc-ios.mbsc-range-control-label {
    padding: 0.615385em 0.615385em 0;
  }

  .mbsc-ios.mbsc-range-control-value {
    padding: 0 0.615385em 0.615385em;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .mbsc-ios.mbsc-range-control-value.active {
    padding: 0 0.571429em 0.571429em;
    font-size: 1.076923em;
    line-height: 1.428572em;
  }

  .mbsc-ios.mbsc-range-label-clear {
    margin-top: -0.692308em;
    width: 1.307693em;
    height: 1.307693em;
  }

  .mbsc-ios.mbsc-range-label-clear.mbsc-ltr {
    right: 1em;
  }

  .mbsc-ios.mbsc-range-label-clear.mbsc-rtl {
    left: 1em;
  }

  .mbsc-ios.mbsc-picker .mbsc-popup-arrow,
  .mbsc-ios.mbsc-picker .mbsc-popup-body {
    background: #fff;
  }

  .mbsc-ios.mbsc-picker-header {
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-datepicker .mbsc-calendar,
  .mbsc-ios.mbsc-datepicker .mbsc-calendar-cell,
  .mbsc-ios.mbsc-datepicker .mbsc-calendar-slide {
    background: #fff;
  }

  .mbsc-ios.mbsc-datepicker-bottom.mbsc-datepicker-control-date,
  .mbsc-ios.mbsc-datepicker-top.mbsc-datepicker-control-date {
    background: #d1d5db;
  }

  .mbsc-ios.mbsc-datepicker-inline {
    background: #fff;
    border-color: #ccc;
  }

  .mbsc-ios.mbsc-range-control-value.active {
    color: #007aff;
  }

  .mbsc-ios.mbsc-range-control-text-empty,
  .mbsc-ios.mbsc-range-control-text-empty.active {
    color: rgba(0, 0, 0, 0.4);
  }

  .mbsc-ios.mbsc-range-label-clear {
    color: #ccc;
  }

  .mbsc-ios.mbsc-range-label-clear:hover {
    color: #b2b2b2;
  }

  .mbsc-ios-dark.mbsc-picker .mbsc-popup-arrow,
  .mbsc-ios-dark.mbsc-picker .mbsc-popup-body {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-picker-header {
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-datepicker-bottom.mbsc-datepicker-control-date,
  .mbsc-ios-dark.mbsc-datepicker-top.mbsc-datepicker-control-date,
  .mbsc-ios-dark.mbsc-datepicker .mbsc-calendar,
  .mbsc-ios-dark.mbsc-datepicker .mbsc-calendar-cell,
  .mbsc-ios-dark.mbsc-datepicker .mbsc-calendar-slide {
    background: #1c1c1c;
  }

  .mbsc-ios-dark.mbsc-datepicker-inline {
    background: #1c1c1c;
    border-color: #333;
  }

  .mbsc-ios-dark.mbsc-range-control-value.active {
    color: #ff9f0a;
  }

  .mbsc-ios-dark.mbsc-range-control-text-empty,
  .mbsc-ios-dark.mbsc-range-control-text-empty.active {
    color: hsla(0, 0%, 100%, 0.4);
  }

  .mbsc-ios-dark.mbsc-range-label-clear {
    color: #333;
  }

  .mbsc-ios-dark.mbsc-range-label-clear:hover {
    color: #4d4d4d;
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

  .mbsc-material.mbsc-range-control-wrapper .mbsc-segmented-button.mbsc-button.mbsc-font {
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

  .mbsc-material.mbsc-range-control-wrapper .mbsc-range-value-nonempty .mbsc-segmented-button.mbsc-ltr {
    padding-right: 2.642857em;
  }

  .mbsc-material.mbsc-range-control-wrapper .mbsc-range-value-nonempty .mbsc-segmented-button.mbsc-rtl {
    padding-left: 2.642857em;
  }

  .mbsc-material.mbsc-datepicker-control-calendar.mbsc-datepicker-control-time .mbsc-range-control-wrapper .mbsc-segmented,
  .mbsc-material.mbsc-datepicker-control-date.mbsc-datepicker-control-time .mbsc-range-control-wrapper .mbsc-segmented,
  .mbsc-material.mbsc-datepicker-control-datetime .mbsc-range-control-wrapper .mbsc-segmented {
    width: 25em;
  }

  .mbsc-material.mbsc-range-control-label {
    text-transform: uppercase;
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

  .mbsc-material.mbsc-range-control-wrapper .mbsc-material.mbsc-segmented-button.mbsc-selected {
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

  .mbsc-material-dark.mbsc-range-control-wrapper .mbsc-material-dark.mbsc-segmented-button.mbsc-selected {
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

  .mbsc-windows.mbsc-picker-header {
    padding: 0.5em;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid;
  }

  .mbsc-windows.mbsc-datepicker-tab {
    border-top: 1px solid;
    margin-top: -1px;
  }

  .mbsc-windows.mbsc-range-control-wrapper .mbsc-segmented {
    padding: 0;
    max-width: 100%;
    width: 18.5em;
  }

  .mbsc-windows.mbsc-range-control-wrapper .mbsc-segmented-button.mbsc-button.mbsc-font {
    background: none;
    border: 0;
    border-bottom: 2px solid transparent;
    padding: 0.625em 1em;
    line-height: 1.25em;
    display: block;
    text-align: left;
  }

  .mbsc-windows.mbsc-range-control-wrapper .mbsc-segmented-button.mbsc-rtl {
    text-align: right;
  }

  .mbsc-windows.mbsc-range-control-wrapper .mbsc-range-value-nonempty .mbsc-segmented-button.mbsc-ltr {
    padding-right: 1.875em;
  }

  .mbsc-windows.mbsc-range-control-wrapper .mbsc-range-value-nonempty .mbsc-segmented-button.mbsc-rtl {
    padding-left: 1.875em;
  }

  .mbsc-windows.mbsc-datepicker-control-calendar.mbsc-datepicker-control-time .mbsc-range-control-wrapper .mbsc-segmented,
  .mbsc-windows.mbsc-datepicker-control-date.mbsc-datepicker-control-time .mbsc-range-control-wrapper .mbsc-segmented,
  .mbsc-windows.mbsc-datepicker-control-datetime .mbsc-range-control-wrapper .mbsc-segmented {
    width: 26.25em;
  }

  .mbsc-windows.mbsc-range-control-label {
    font-size: 0.9375em;
    line-height: 1.6em;
  }

  .mbsc-windows.mbsc-range-control-value {
    font-size: 1.0625em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mbsc-windows.mbsc-range-label-clear {
    width: 1em;
    height: 1em;
    right: 0.4375em;
    margin-top: -0.5em;
  }

  .mbsc-windows.mbsc-range-label-clear.mbsc-ltr {
    right: 0.4375em;
  }

  .mbsc-windows.mbsc-range-label-clear.mbsc-rtl {
    left: 0.4375em;
  }

  .mbsc-windows.mbsc-datepicker-inline {
    background: #fff;
    color: #333;
  }

  .mbsc-windows.mbsc-datepicker-tab,
  .mbsc-windows.mbsc-picker-header {
    border-color: #e6e6e6;
  }

  .mbsc-windows.mbsc-range-control-wrapper {
    border-bottom: 1px solid #e6e6e6;
  }

  .mbsc-windows.mbsc-range-control-wrapper .mbsc-windows.mbsc-segmented-button.mbsc-selected {
    border-bottom-color: #0078d7;
  }

  .mbsc-windows.mbsc-range-control-wrapper .mbsc-windows.mbsc-segmented-button.mbsc-focus {
    box-shadow: inset 0 0 0 1px #333;
  }

  .mbsc-windows.mbsc-range-control-label.active,
  .mbsc-windows.mbsc-range-control-value.active {
    color: #0078d7;
  }

  .mbsc-windows.mbsc-range-control-text-empty,
  .mbsc-windows.mbsc-range-control-text-empty.active {
    color: rgba(51, 51, 51, 0.4);
  }

  .mbsc-windows.mbsc-range-label-clear {
    color: rgba(51, 51, 51, 0.6);
  }

  .mbsc-windows.mbsc-range-label-clear:hover {
    color: #333;
  }

  .mbsc-windows-dark.mbsc-datepicker-inline {
    background: #1a1a1a;
    color: #fff;
  }

  .mbsc-windows-dark.mbsc-datepicker-tab,
  .mbsc-windows-dark.mbsc-picker-header {
    border-color: #343434;
  }

  .mbsc-windows-dark.mbsc-range-control-wrapper {
    border-bottom: 1px solid #343434;
  }

  .mbsc-windows-dark.mbsc-range-control-wrapper .mbsc-windows-dark.mbsc-segmented-button.mbsc-selected {
    border-bottom-color: #0078d7;
  }

  .mbsc-windows-dark.mbsc-range-control-wrapper .mbsc-windows-dark.mbsc-segmented-button.mbsc-focus {
    box-shadow: inset 0 0 0 1px #fff;
  }

  .mbsc-windows-dark.mbsc-range-control-label.active,
  .mbsc-windows-dark.mbsc-range-control-value.active {
    color: #0078d7;
  }

  .mbsc-windows-dark.mbsc-range-control-text-empty,
  .mbsc-windows-dark.mbsc-range-control-text-empty.active {
    color: hsla(0, 0%, 100%, 0.4);
  }

  .mbsc-windows-dark.mbsc-range-label-clear {
    color: hsla(0, 0%, 100%, 0.6);
  }

  .mbsc-windows-dark.mbsc-range-label-clear:hover {
    color: #fff;
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

`;
