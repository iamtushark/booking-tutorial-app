import { Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import CommonDateField from "../components/common/CommonDateFIeld";
import CommonDropdown from "../components/common/CommonDropDownField";
import CommonTextField from "../components/common/CommonTextField";
import { RenderFormProps } from "../interfaces/renderFormProps";

export default function renderFormInputs({ inputs, control, errors }: RenderFormProps) {

    return (
        inputs.map((input) => {
            return (
                <Box key={input.name} sx={{ mb: 2 }}>
                    <Controller
                        name={input.name}
                        control={control}
                        render={({ field }) => {
                            switch (input.type) {
                                case "CommonInputField":
                                    return (
                                        <CommonTextField
                                            // TODO How to remove this any?
                                            {...field as any}
                                            label={input.label}
                                            error={!!errors[input.name]}
                                            helperText={errors[input.name]?.message}
                                        />
                                    );
                                case "CommonDropDownField":
                                    return (
                                        <CommonDropdown
                                            {...field as any}
                                            label={input.label}
                                            error={!!errors[input.name]}
                                            helperText={errors[input.name]?.message}
                                            // TODO: Make options dynamic, this is just for test purpose
                                            options={[
                                                { value: 'option1', label: 'Option 1' },
                                                { value: 'option2', label: 'Option 2' },
                                            ]}
                                        />
                                    );
                                case "CommonDateField":
                                    return (
                                        <CommonDateField
                                            {...field as any}
                                            label={input.label}
                                            error={!!errors[input.name]}
                                            helperText={errors[input.name]?.message}
                                        />
                                    );
                            }
                        }}
                    />
                </Box>)
        })
    )
}