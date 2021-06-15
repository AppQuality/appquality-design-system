import * as yup from "yup";

export const initialValues = {
  name: "",
  withvalue: "With value",
  surname: "",
  email: "",
  password: "",
  subscribe: "",
  date2: "",
};
export const validationSchema = {
  name: yup.string().required("This is a required field"),
  surname: yup.string().required("This is a required field"),
  email: yup.string().email().required("This is a required field"),
  password: yup
    .string()
    .min(6, "Must be at least 6 character long")
    .matches(/[0-9]/, "Must contain at least a number")
    .matches(/[A-Z]/, "Must contain at least an uppercase letter")
    .matches(/[a-z]/, "Must contain at least a lowercase letter")
    .required("This is a required field"),
  subscribe: yup
    .boolean()
    .oneOf([true], "This is a required field")
    .required("This is a required field"),
  date2: yup.string().required(),
};
