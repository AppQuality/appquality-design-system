import {
  Field as FormikField,
  FieldProps,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import styled from "styled-components";
import { FormGroup } from "./_style";
import { FieldInterface } from "./_types";
import FormLabel from "./formlabel/FormLabel";
import Input from "./input/Input";
import { Checkbox } from "./checkBox/Checkbox";
import { Radio } from "./radio/Radio";

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
        return (
          <FormGroup className={className}>
            {label && <FormLabel htmlFor={fieldId} label={label} />}
            <div className="input-group">
              <Input
                id={fieldId}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                isInvalid={meta.touched && typeof meta.error == "string"}
                extra={{ ...field }}
              />
            </div>
            <ErrorMessage name={name} />
          </FormGroup>
        );
      }}
    </FormikField>
  );
};

export { FormGroup, Checkbox, FormLabel, Input, Radio };
