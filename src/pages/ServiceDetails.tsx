import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Container, Box, Button, Typography } from "@mui/material";
import serviceDetailSchema from "../validationSchema/serviceDetailSchema";
import { ServiceDetailInputs } from "../interfaces/formInterfaces";
import renderFormInputs from "../utils/renderFormInputs";
import { RenderFormInputArray } from "../interfaces/renderFormProps";

export default function ServiceDetails() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ServiceDetailInputs>({
    defaultValues: { vehicle_type: "type_1" },
    resolver: yupResolver(serviceDetailSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ServiceDetailInputs> = (data) =>
    navigate("/booking_details");

  const formInputs: RenderFormInputArray = [
    {
      type: "CommonDropDownField",
      name: "vehicle_type",
      label: "Vehicle Type",
      options: [
        { value: "type_1", label: "type_1" },
        { value: "type_2", label: "type_2" },
        { value: "type_3", label: "type_3" },
      ],
    },
    {
      type: "CommonInputField",
      name: "vehicle_model_no",
      label: "Vehicle Model No.",
    },
  ];

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Service Details
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderFormInputs({ inputs: formInputs, control, errors })}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </form>
      </Box>
    </Container>
  );
}
