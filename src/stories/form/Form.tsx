import {
  Field as FormikField,
  FieldProps,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import { Search } from "react-bootstrap-icons";
import styled from "styled-components";
import { FormCheck, FormGroup } from "./_style";
import { FieldInterface, GenericFieldInterface } from "./_types";

const BasicErrorMessage = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => (
  <div className={className}>
    <FormikErrorMessage name={name} />{" "}
  </div>
);

export const ErrorMessage = styled(BasicErrorMessage)`
  color: ${(props) => props.theme.palette.danger};
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
`;

export const Field = ({
  type = "text",
  placeholder,
  name,
  onChange,
  disabled,
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
        let className = "aq-mb-3";
        if (meta.touched && meta.error) {
          className += " is-invalid";
        }
        return (
          <FormGroup className={className}>
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
                className="form-control"
                disabled={disabled}
                {...field}
              />
              {type === "search" && (
                <span className="input-group-text" id="basic-addon2">
                  <Search />
                </span>
              )}
            </div>
            <ErrorMessage name={name} />
          </FormGroup>
        );
      }}
    </FormikField>
  );
};

export const Checkbox = ({
  name,
  onChange,
  label,
  disabled,
}: GenericFieldInterface) => {
  return (
    <FormikField name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors, status }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }: FieldProps) => {
        let fieldId = name;
        if (status && status.id) fieldId = `${status.id}-${name}`;
        let className = "aq-mb-3";
        if (meta.touched && meta.error) {
          className += " is-invalid";
        }
        return (
          <FormCheck className={className}>
            {label && (
              <label htmlFor={fieldId} className="form-check-label">
                {label}
              </label>
            )}
            <input
              id={fieldId}
              type="checkbox"
              disabled={disabled}
              className="form-check-input"
              {...field}
            />
            <ErrorMessage name={name} />
          </FormCheck>
        );
      }}
    </FormikField>
  );
};
