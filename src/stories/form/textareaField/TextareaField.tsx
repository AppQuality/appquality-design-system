import { Field as FormikField, FieldProps } from "formik";
import { ErrorMessage } from "../Form";
import FormLabel from "../formlabel/FormLabel";
import { Counter, StyledTextareaField } from "./_styles";
import { TextareaFieldProps } from "./_types";
import { useState } from "react";

export const TextareaField = ({
  name,
  label,
  className,
  placeholder,
  disabled,
  resize,
  height,
  autoResize,
  counterMax,
  ...props
}: TextareaFieldProps) => {
  const [isFocus, setIsFocus] = useState(false);
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
            {...props}
          >
            {label && <FormLabel htmlFor={field.name} label={label} />}
            <div style={{ position: "relative" }}>
              <textarea
                id={field.name}
                name={field.name}
                value={field.value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(e) => field.onChange(e)}
                onBlur={(e) => {
                  field.onBlur(e);
                  setIsFocus(false);
                }}
                onFocus={() => setIsFocus(true)}
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
              {counterMax && (
                <Counter
                  isFocus={isFocus}
                  isInvalid={meta.touched && typeof meta.error == "string"}
                >
                  <span>{field.value?.length || 0}</span>/{counterMax}
                </Counter>
              )}
            </div>
            <ErrorMessage name={field.name} />
          </StyledTextareaField>
        );
      }}
    </FormikField>
  );
};
