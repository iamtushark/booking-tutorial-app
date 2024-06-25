import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, Typography } from '@mui/material';
import CommonDropdown from '../components/common/CommonDropDownField';
import CommonDateField from '../components/common/CommonDateFIeld';
import bookingDetailSchema from '../validationSchema/bookingDetailSchema';
import { BookingDetailInputs } from '../interfaces/formInterfaces';
import { generateTimeSlots } from '../utils/time';


export default function ServiceDetails() {
  const { handleSubmit, control, formState: { errors } } = useForm<BookingDetailInputs>({
    resolver: yupResolver(bookingDetailSchema),
    defaultValues: { appointment_time: "00:30" }
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BookingDetailInputs> = (data) => {
    localStorage.setItem("appointment_time", data.appointment_time);
    localStorage.setItem("appointment_date", data.appointment_date.toDateString());
    navigate("/success");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Book an Appointment
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="appointment_date"
              control={control}
              render={({ field }) => (
                <CommonDateField
                  {...field}
                  label="Appointment Date"
                  error={!!errors.appointment_date}
                  helperText={errors.appointment_date?.message}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="appointment_time"
              control={control}
              render={({ field }) => (
                <CommonDropdown
                  {...field}
                  label="Appointment Time"
                  options={generateTimeSlots().map(time => ({ value: time, label: time }))}
                  error={!!errors.appointment_time}
                  helperText={errors.appointment_time?.message}
                />
              )}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Book
          </Button>
        </form>
      </Box>
    </Container>
  );
}
