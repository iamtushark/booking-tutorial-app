import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Button, Typography } from '@mui/material';
import CommonTextField from '../components/common/CommonTextField';
import personalDetailSchema from '../validationSchema/personalDetailSchema';

interface IFormInputs {
  name: string;
  email: string;
  phone_num: number;
  Address: string;
}

export default function PersonalDetails() {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(personalDetailSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    localStorage.setItem("name", data.name);
    navigate("/service_details");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Personal Details
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  label="Name"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="phone_num"
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  label="Phone No."
                  error={!!errors.phone_num}
                  helperText={errors.phone_num?.message}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="Address"
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  label="Address"
                  error={!!errors.Address}
                  helperText={errors.Address?.message}
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
