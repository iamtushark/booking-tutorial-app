import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs} from 'dayjs';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { DateValidationError } from '@mui/x-date-pickers';

interface CommonDateFieldProps {
  label: string;
  value: Date | null;
  onChange: (value: Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => void
  error?: boolean;
  helperText?: string;
}

const CommonDateField: React.FC<CommonDateFieldProps> = ({ label, value, onChange, error, helperText }) => {
  const shouldDisableDate = (date: Dayjs) => {
    const today = dayjs().startOf('day');
    return date.isBefore(today, 'day');
  };

  return (<>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label={label}
      value={null}
      onChange={onChange}
      slotProps={{ textField: { fullWidth: true } }}
      disablePast
      shouldDisableDate={shouldDisableDate}
    />
    </LocalizationProvider>
    <span>{helperText}</span>
    </>
  );
};

export default CommonDateField;
