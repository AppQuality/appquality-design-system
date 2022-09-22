import * as yup from "yup";

export const initialTextareaFormValues = {
  description: "",
};
export const textareaFormValidationSchema = {
  description: yup.string().required("This is a required field"),
};
