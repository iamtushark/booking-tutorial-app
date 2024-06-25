import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, Typography } from '@mui/material';
import CommonTextField from '../components/common/CommonTextField';
import CommonDropdown from '../components/common/CommonDropDownField';
import serviceDetailSchema from '../validationSchema/serviceDetailSchema';

interface IFormInputs {
  vehicle_type: string;
  vehicle_model_no: string;
}

export default function ServiceDetails() {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    defaultValues: { vehicle_type: 'type_1' },
    resolver: yupResolver(serviceDetailSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => navigate('/booking_details');

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Service Details
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="vehicle_type"
              control={control}
              render={({ field }) => (
                <CommonDropdown
                  {...field}
                  label="Vehicle Type"
                  options={[
                    { value: 'type_1', label: 'type_1' },
                    { value: 'type_2', label: 'type_2' },
                    { value: 'type_3', label: 'type_3' },
                  ]}
                  error={!!errors.vehicle_type}
                  helperText={errors.vehicle_type?.message}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="vehicle_model_no"
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  label="Vehicle Model No."
                  error={!!errors.vehicle_model_no}
                  helperText={errors.vehicle_model_no?.message}
                />
              )}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </form>
      </Box>
    </Container>
  );
}
