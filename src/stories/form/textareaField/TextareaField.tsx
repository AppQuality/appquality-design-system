import { Field as FormikField, FieldProps } from "formik";
import { ErrorMessage } from "../Form";
import FormLabel from "../formlabel/FormLabel";
import { StyledTextareaField } from "./_styles";
import { TextareaFieldProps } from "./_types";

export const TextareaField = ({
  name,
  label,
  className,
  placeholder,
  disabled,
  resize,
  height,
  autoResize,
}: TextareaFieldProps) => {
  return (
    <FormikField name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <StyledTextareaField
            className={className}
            resize={resize}
            isInvalid={meta.touched && typeof meta.error == "string"}
            height={height}
            autoResize={autoResize}
          >
            {label && <FormLabel htmlFor={field.name} label={label} />}
            <textarea
              id={field.name}
              name={field.name}
              value={field.value}
              placeholder={placeholder}
              disabled={disabled}
              onChange={(e) => field.onChange(e)}
              onBlur={(e) => field.onBlur(e)}
              onInput={
                autoResize
                  ? (e) => {
                      e.currentTarget.style.height = "1px";
                      e.currentTarget.style.height =
                        e.currentTarget.scrollHeight + "px";
                    }
                  : undefined
              }
            />
            <ErrorMessage name={field.name} />
          </StyledTextareaField>
        );
      }}
    </FormikField>
  );
};
