import { Story, Meta } from "@storybook/react";
import { Form, Formik, FormikProps } from "formik";
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
      <Form id="textareaForm">
        <TextareaField
          className="aq-mb-3"
          name="description"
          label="Description"
          placeholder="Enter description"
        />
      </Form>
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
      <Form id="textareaForm">
        <TextareaField
          className="aq-mb-3"
          name="description"
          label="Description"
          placeholder="Enter description"
          height="2.55rem"
          autoResize={true}
        />
      </Form>
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
      <Form id="textareaForm">
        <TextareaField
          className="aq-mb-3"
          name="description"
          label="Description"
          placeholder="Enter description"
          height="2.55rem"
          disabled
        />
      </Form>
    )}
  </Formik>
);
