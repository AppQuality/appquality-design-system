import { Meta, StoryFn } from "@storybook/react";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { Select } from "../select/Select";
import { Text } from "../typography/Typography";
import { ErrorMessageWrapper, Field } from "./Form";
import { initialValues, validationSchema } from "./_data";
import { Checkbox } from "./checkBox/Checkbox";
import { Datepicker } from "./datepicker/Datepicker";
import FormLabel from "./formlabel/FormLabel";

export default {
  title: "Forms",
  component: Field,
} as Meta;

export const Template: StoryFn = () => (
  <>
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
          <Text small>
            The password must be at least 6 characters long, contain an
            uppercase letter, a lowercase letter and a number.
          </Text>
          <Checkbox
            id="subscribe"
            value="on"
            disabled
            label="I agree to receive earning opportunity emails from AppQuality"
          />
          <div className="aq-mb-3">
            <FormLabel htmlFor="date1" label="Date" />
            <Datepicker id="date1" select="date" />
          </div>
          <div className="aq-mb-3">
            <FormLabel htmlFor="range1" label="Date Range" />
            <Datepicker id="range1" select="range" control="calendar" />
          </div>
          <div className="aq-mb-3">
            <Select
              name="select"
              label="Select"
              menuPlacement="top"
              value={{ value: "1", label: "Option 1" }}
              options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
                { label: "Option 4", value: "4" },
                { label: "Option 5", value: "5" },
                { label: "Option 6", value: "6" },
              ]}
            />
          </div>
        </Form>
      )}
    </Formik>
    <div className="aq-mb-3">
      <ErrorMessageWrapper>Generic Error outside Formik</ErrorMessageWrapper>
    </div>
  </>
);
