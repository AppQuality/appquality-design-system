import { Story, Meta } from "@storybook/react";
import { Formik, FormikProps } from "formik";
import { TextareaField } from "./TextareaField";
import {
  initialTextareaFormValues,
  textareaFormValidationSchema,
} from "./_data";
import * as yup from "yup";

export default {
  title: "Textarea Field",
  component: TextareaField,
} as Meta;

export const Simple: Story = () => (
  <Formik
    initialValues={initialTextareaFormValues}
    validationSchema={yup.object(textareaFormValidationSchema)}
    onSubmit={(data) => {
      console.log(data);
    }}
  >
    {(props: FormikProps<any>) => (
      <TextareaField
        className="aq-mb-3"
        name="description"
        label="Description"
        placeholder="Enter description"
      />
    )}
  </Formik>
);

export const Autoresize: Story = () => (
  <Formik
    initialValues={initialTextareaFormValues}
    validationSchema={yup.object(textareaFormValidationSchema)}
    onSubmit={(data) => {
      console.log(data);
    }}
  >
    {(props: FormikProps<any>) => (
      <TextareaField
        className="aq-mb-3"
        name="description"
        label="Description"
        placeholder="Enter description"
        height="2.55rem"
        autoResize={true}
      />
    )}
  </Formik>
);

export const Disabled: Story = () => (
  <Formik
    initialValues={initialTextareaFormValues}
    validationSchema={yup.object(textareaFormValidationSchema)}
    onSubmit={(data) => {
      console.log(data);
    }}
  >
    {(props: FormikProps<any>) => (
      <TextareaField
        className="aq-mb-3"
        name="description"
        label="Description"
        placeholder="Enter description"
        height="2.55rem"
        disabled
      />
    )}
  </Formik>
);

export const CounterMax: Story = () => (
  <Formik
    initialValues={initialTextareaFormValues}
    validationSchema={yup.object({
      description: yup
        .string()
        .max(100, "Max 100 characters")
        .required("mandatory field"),
    })}
    onSubmit={(data) => {
      console.log(data);
    }}
  >
    {(props: FormikProps<any>) => (
      <div style={{ padding: "20px" }}>
        <TextareaField
          className="aq-mb-3"
          name="description"
          label={
            <div>
              <span style={{ fontWeight: "600" }}>this is</span> a Description
            </div>
          }
          placeholder="Enter description"
          counterMax={100}
        />
      </div>
    )}
  </Formik>
);
