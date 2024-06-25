import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Container, Box, Button, Typography } from "@mui/material";
import personalDetailSchema from "../validationSchema/personalDetailSchema";
import { PersonalDetailInputs } from "../interfaces/formInterfaces";
import renderFormInputs from "../utils/renderFormInputs";
import { RenderFormInputArray } from "../interfaces/renderFormProps";

export default function PersonalDetails() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PersonalDetailInputs>({
    resolver: yupResolver(personalDetailSchema),
  });
  const navigate = useNavigate();

  const formInputs: RenderFormInputArray = [
    { type: "CommonInputField", name: "name", label: "Name" },
    { type: "CommonInputField", name: "email", label: "Email" },
    { type: "CommonInputField", name: "phone_num", label: "Phone No." },
    { type: "CommonInputField", name: "Address", label: "Address" },
  ];

  const onSubmit: SubmitHandler<PersonalDetailInputs> = (data) => {
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
          {renderFormInputs({ inputs: formInputs, control, errors })}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Next
          </Button>
        </form>
      </Box>
    </Container>
  );
}
