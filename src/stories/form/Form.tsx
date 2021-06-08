import React, { ChangeEventHandler } from "react";
import { Field as FormikField, FieldProps } from "formik";
import "./form.scss";
import { Search } from "react-bootstrap-icons";

export interface GenericFieldInterface {
  name: string;
  label?: string;
  onChange?: ChangeEventHandler;
}

export interface FieldInterface extends GenericFieldInterface {
  type?: "text" | "email" | "password" | "number" | "url" | "tel" | "search";
  placeholder?: string;
}

export const Field = ({
  type = "text",
  placeholder,
  name,
  onChange,
  label,
}: FieldInterface) => {
  return (
    <FormikField name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors, status }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }: FieldProps) => {
        let fieldId = name;
        if (status && status.id) fieldId = `${status.id}-${name}`;
        let inputClassName = "form-control";
        if (meta.touched && meta.error) {
          inputClassName += " is-invalid";
        }
        return (
          <div className="form-group">
            {label && (
              <label htmlFor={fieldId} className="form-label">
                {label}
              </label>
            )}
            <div className="input-group">
              <input
                id={fieldId}
                type={type}
                placeholder={placeholder}
                className={inputClassName}
                {...field}
              />
              {type === "search" && (
                <span className="input-group-text" id="basic-addon2">
                  <Search />
                </span>
              )}
            </div>
            {meta.touched && meta.error && (
              <div className="invalid-feedback">{meta.error}</div>
            )}
          </div>
        );
      }}
    </FormikField>
  );
};

export const Checkbox = ({ name, onChange, label }: GenericFieldInterface) => {
  return (
    <FormikField name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors, status }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }: FieldProps) => {
        let fieldId = name;
        if (status && status.id) fieldId = `${status.id}-${name}`;
        let inputClassName = "form-check-input";
        if (meta.touched && meta.error) {
          inputClassName += " is-invalid";
        }
        return (
          <div className="form-check">
            {label && (
              <label htmlFor={fieldId} className="form-check-label">
                {label}
              </label>
            )}
            <input
              id={fieldId}
              type="checkbox"
              className={inputClassName}
              {...field}
            />
            {meta.touched && meta.error && (
              <div className="invalid-feedback">{meta.error}</div>
            )}
          </div>
        );
      }}
    </FormikField>
  );
};
