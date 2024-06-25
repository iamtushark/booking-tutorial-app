import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";
import * as yup from "yup";

export const personalDetailSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  phone_num: yup
    .number()
    .required("Phone number is required")
    .typeError("Phone number must be a number")
    .test(
      "len",
      "Phone number must be exactly 10 digits",
      (val) =>
        val !== undefined && val !== null && val.toString().length === 10,
    ),
  Address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters long"),
});

export default personalDetailSchema;
