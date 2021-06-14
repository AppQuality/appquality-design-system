import { Checkbox, Field } from "./Form";
import { Story, Meta } from "@storybook/react";
import { Formik, Form, FormikProps } from "formik";
import { validationSchema, initialValues } from "./_data";
import * as yup from "yup";
import { Paragraph, SmallTitle } from "../typography/Typography";
import { BSCol, BSGrid, Container } from "../layout/Layout";
import { Card } from "../card/Card";
import { Datepicker } from "./datepicker/Datepicker";
import { GeneralStyledInput } from "./_style";

export default {
  title: "Forms",
  component: Field,
} as Meta;

export const Template: Story = () => (
  <Container>
    <BSGrid>
      <BSCol size="col-sm-12">
        <Card>
          <Formik
            initialValues={initialValues}
            validationSchema={yup.object(validationSchema)}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {(props: FormikProps<any>) => (
              <Form id="testForm">
                <SmallTitle as="h5">Create an account</SmallTitle>
                <Field
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Name"
                />
                <Field
                  type="text"
                  name="surname"
                  label="Surname"
                  disabled={true}
                />
                <Field
                  type="text"
                  name="withvalue"
                  label="Surname"
                  disabled={true}
                />
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
                  <div className="form-label">Date</div>
                  <Datepicker id="date1" select="date" />
                </GeneralStyledInput>
                <GeneralStyledInput className="aq-mb-3">
                  <div className="form-label">Date Range</div>
                  <Datepicker id="range1" select="range" control="calendar" />
                </GeneralStyledInput>
                <GeneralStyledInput className="aq-mb-3 is-invalid">
                  <div className="form-label">Invalid input example</div>
                  <Datepicker
                    id="date2"
                    select="date"
                    placeholder="select a date"
                  />
                  <div className="invalid-feedback">
                    This is a required field
                  </div>
                </GeneralStyledInput>
              </Form>
            )}
          </Formik>
        </Card>
      </BSCol>
    </BSGrid>
  </Container>
);
