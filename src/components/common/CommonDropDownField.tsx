import { FormControl, InputLabel, Select, MenuItem, FormHelperText, SelectChangeEvent} from '@mui/material';

interface CommonDropdownProps {
  label: string;
  value: string | number;
  options: Array<{ value: string | number, label: string }>;
  error?: boolean;
  helperText?: string;
  onChange: (event: SelectChangeEvent<string | number>, child: React.ReactNode) => void;
}

const CommonDropdown: React.FC<CommonDropdownProps> = ({ label, value, options, error, onChange, helperText }) => {
    return (
      <FormControl variant="filled" error={error} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange} label={label}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  };
  
  export default CommonDropdown;