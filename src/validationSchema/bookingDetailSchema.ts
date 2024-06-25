import * as yup from "yup";

const bookingDetailSchema = yup.object().shape({
  appointment_date: yup
    .date()
    .nullable()
    .required("Appointment date is required")
    .test(
      "is-tomorrow-or-later",
      "Appointment date must be tomorrow or later",
      (value) =>
        value
          ? value >= new Date(new Date().setDate(new Date().getDate() + 1))
          : false,
    ),
  appointment_time: yup.string().required("Appointment time is required"),
});

export default bookingDetailSchema;
