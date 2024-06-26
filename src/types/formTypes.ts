import { FieldErrors, UseFormRegister, ValidationRule } from 'react-hook-form';

type InputType = 'text' | 'email' | 'tel';

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
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
}

export interface ITextarea {
  id: string;
  name: string;
  label: string;
  ariaLabel: string;
  field: fieldsOptions;
}

export interface ICheck {
  id: string;
  name: string;
  field: fieldsOptions;
  type: string;
  required: boolean;
  error: string;
  text: string;
  ariaLabel: string;
}

export interface IFormData {
  description: string;
  forma: {
    inputs: IInput[];
    textarea: ITextarea;
    check: ICheck;
  };
}

export interface FormFields {
  name: string;
  email: string;
  message: string;
  position?: string;
  phone?: string;
  policy?: boolean;
}

export type fieldsOptions =
  | 'name'
  | 'email'
  | 'position'
  | 'phone'
  | 'message'
  | 'policy';

export interface InputOptions {
  required: boolean;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
}

export interface IContactsFormData {
  forma: {
    inputs: IInput[];
    textarea: ITextarea;
  };
}
