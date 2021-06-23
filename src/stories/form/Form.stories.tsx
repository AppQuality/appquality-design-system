import { Checkbox, Field } from "./Form";
import { Story, Meta } from "@storybook/react";
import { Formik, Form, FormikProps } from "formik";
import { validationSchema, initialValues } from "./_data";
import * as yup from "yup";
import { Paragraph } from "../typography/Typography";
import { Datepicker } from "./datepicker/Datepicker";
import { GeneralStyledInput } from "./_style";
import { DatepickerGlobalStyle } from "./datepicker/_style";
import FormLabel from "./formlabel/FormLabel";

export default {
  title: "Forms",
  component: Field,
} as Meta;

export const Template: Story = () => (
  <>
    <DatepickerGlobalStyle />
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object(validationSchema)}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form id="testForm">
          <Field type="text" name="name" label="Name" placeholder="Name" />
          <Field type="text" name="surname" label="Surname" disabled={true} />
          <Field type="text" name="withvalue" label="Surname" disabled={true} />
          <Field type="email" name="email" label="Email" />
          <Field type="password" name="password" label="Password" />
          <Paragraph small>
            The password must be at least 6 characters long, contain an
            uppercase letter, a lowercase letter and a number.
          </Paragraph>
          <Checkbox
            name="subscribe"
            label="I agree to receive earning opportunity emails from AppQuality"
          />
          <GeneralStyledInput className="aq-mb-3">
            <FormLabel htmlFor="date1" label="Date" />
            <Datepicker id="date1" select="date" />
          </GeneralStyledInput>
          <GeneralStyledInput className="aq-mb-3">
            <FormLabel htmlFor="range1" label="Date Range" />
            <Datepicker id="range1" select="range" control="calendar" />
          </GeneralStyledInput>
        </Form>
      )}
    </Formik>
  </>
);
