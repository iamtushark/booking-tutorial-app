import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Container, Box, Button, Typography } from "@mui/material";
import bookingDetailSchema from "../validationSchema/bookingDetailSchema";
import { BookingDetailInputs } from "../interfaces/formInterfaces";
import { generateTimeSlots } from "../utils/time";
import renderFormInputs from "../utils/renderFormInputs";
import { RenderFormInputArray } from "../interfaces/renderFormProps";

export default function ServiceDetails() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingDetailInputs>({
    resolver: yupResolver(bookingDetailSchema),
    defaultValues: { appointment_time: "00:30" },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BookingDetailInputs> = (data) => {
    localStorage.setItem("appointment_time", data.appointment_time);
    localStorage.setItem(
      "appointment_date",
      data.appointment_date.toDateString(),
    );
    navigate("/success");
  };

  const formInputs: RenderFormInputArray = [
    {
      type: "CommonDateField",
      name: "appointment_date",
      label: "Appointment Date",
    },
    {
      type: "CommonDropDownField",
      name: "appointment_time",
      label: "Appointment Time",
      options: generateTimeSlots().map((time) => ({
        value: time,
        label: time,
      })),
    },
  ];

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Book an Appointment
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderFormInputs({ inputs: formInputs, control, errors })}
          <Button type="submit" variant="contained" color="primary">
            Book
          </Button>
        </form>
      </Box>
    </Container>
  );
}
