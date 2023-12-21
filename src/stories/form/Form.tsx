import {
  FieldProps,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from "formik";
import { ExclamationCircle } from "react-bootstrap-icons";
import styled from "styled-components";
import { FormGroup } from "./_style";
import { FieldInterface } from "./_types";
import { Checkbox } from "./checkBox/Checkbox";
import FormLabel from "./formlabel/FormLabel";
import Input from "./input/Input";
import { Radio } from "./radio/Radio";

const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.grid.sizes[2]};
`;

const BasicErrorMessage = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => (
  <div className={className}>
    <FormikErrorMessage name={name}>
      {(msg) => (
        <ErrorMessageWrapper>
          <ExclamationCircle title="Error" size={16} />
          {msg}
        </ErrorMessageWrapper>
      )}
    </FormikErrorMessage>
  </div>
);

export const ErrorMessage = styled(BasicErrorMessage)`
  color: ${(props) => props.theme.palette.danger};
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  &:empty {
    display: none;
  }
`;

export const Field = ({
  type = "text",
  placeholder,
  name,
  onChange,
  disabled,
  label,
  ...props
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
          <FormGroup className={className} {...props}>
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

export { Checkbox, FormGroup, FormLabel, Input, Radio };
