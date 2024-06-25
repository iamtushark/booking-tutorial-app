import excludeVariablesFromRoot from '@mui/material/styles/excludeVariablesFromRoot';
import * as yup from 'yup';

export const serviceDetailSchema = yup.object().shape({
  vehicle_model_no: yup.string().required('Model No. is required').min(8, 'Model No. must be at least 8 characters long'),
  vehicle_type: yup.string().required('Type is required'),
});

export default serviceDetailSchema;
