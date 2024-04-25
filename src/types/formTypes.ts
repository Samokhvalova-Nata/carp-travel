import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";


type InputType = "text" | "email" | "tel";


export type fieldsOptions =
  | "name"
  | "email"
  | "position"
  | "phone"
  | "message"
  | "policy";

export interface IInput {
  id: string;
  field: fieldsOptions;
  name: string;
  type: InputType;
  required: boolean;
  label: string;
  placeholder: string;
  error: string;
  ariaLabel: string;
  pattern?: RegExp; 
}

export interface ITextarea {
  name: string;
  field: string;
  required: boolean;
  label: string;
  ariaLabel: string;
}

export interface ICheck {
  name: string;
  field: string;
  type: string;
  required: boolean;
  error: string;
  text: string;
  ariaLabel: string;
}

export interface IFormData {
  description: string;
  form: {
    inputs: IInput[];
    textarea?: ITextarea;
    check: ICheck;
  };
}



