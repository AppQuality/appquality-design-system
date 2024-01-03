import {
  ErrorMessageProps,
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

export const ErrorMessageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <StyledErrorMessage>
    <ExclamationCircle className="error-message-icon" title="Error" size={16} />
    {children}
  </StyledErrorMessage>
);

const StyledErrorMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.grid.sizes[2]};
  color: ${(props) => props.theme.palette.danger};
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  .error-message-icon {
    margin-top: 2px;
    flex-shrink: 0;
  }
  &:empty {
    display: none;
  }
`;

export const ErrorMessage = ({ ...props }: ErrorMessageProps) => (
  <FormikErrorMessage {...props}>
    {(msg) => <ErrorMessageWrapper>{msg}</ErrorMessageWrapper>}
  </FormikErrorMessage>
);

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
