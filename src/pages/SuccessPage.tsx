import React from "react";
import { Container, Box, Typography } from "@mui/material";

export default function SuccessPage() {
  const name = localStorage.getItem("name");
  const appointmentDate = localStorage.getItem("appointment_date");
  const appointmentTime = localStorage.getItem("appointment_time");

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Booking Confirmation
        </Typography>
        <Typography variant="h6">
          Hey {name}, your booking date is scheduled at
        </Typography>
        <Typography variant="h6" color="primary">
          {appointmentDate} {appointmentTime}
        </Typography>
      </Box>
    </Container>
  );
}
