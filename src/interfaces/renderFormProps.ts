import * as FormInterfaces from "./../interfaces/formInterfaces";
import { Control } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

export type FormInterface = FormInterfaces.BookingDetailInputs &
  FormInterfaces.PersonalDetailInputs &
  FormInterfaces.ServiceDetailInputs;
  
export type SingleFormInterface =
  | FormInterfaces.BookingDetailInputs
  | FormInterfaces.PersonalDetailInputs
  | FormInterfaces.ServiceDetailInputs;

export type RenderFormInputArray = Array<{
  type: "CommonInputField" | "CommonDropDownField" | "CommonDateField";
  name: keyof FormInterface;
  label: string;
  // #TODO : Add definitive type (Import options from dropdown and do some operations on it)
  options?: Array<any>;
}>;

export interface RenderFormProps {
  inputs: RenderFormInputArray;
  // TODO: Assign a more definitive type below
  control: Control<any, any>;
  errors: FieldErrors<FormInterface>;
}
