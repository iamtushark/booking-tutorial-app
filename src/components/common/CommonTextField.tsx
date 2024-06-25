import React from "react";
import TextField from "@mui/material/TextField";

interface CommonTextFieldProps {
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error?: boolean;
  helperText?: string;
}

const CommonTextField = React.forwardRef<
  HTMLInputElement,
  CommonTextFieldProps
>(({ label, value, onChange, onBlur, error, helperText }, ref) => {
  return (
    <TextField
      label={label}
      variant="filled"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      fullWidth
      inputRef={ref}
    />
  );
});

export default CommonTextField;
