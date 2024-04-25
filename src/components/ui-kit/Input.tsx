'use client';


import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

import { IInput } from '@/types/formTypes'
import React, { FC } from 'react'
// import { FormFields } from "../Career/CareerForm";

export type InputOptions = {
  required: boolean;
  pattern?: ValidationRule<RegExp>;
};



export interface FormFields {
  name: string;
  email: string;
  position?: string;
  phone?: string;
  message: string;
  policy?: boolean;
};

export interface InputProps {
  input: IInput;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

const Input = ({input, register, errors}:InputProps) => {
  const {id, name, field, type, required, placeholder, error, label, pattern} = input;

  const options: InputOptions = {
  required: required,
  pattern: pattern,
}
  return (
    <>
      <label htmlFor={id} className=''>
        {label}
      </label>
      <input 
        type={type} 
        required={required} 
        // name={name} 
        placeholder={placeholder} 
        className='bg-transparent'
        {...register(field, options)}
        />
      
      {/* <p className=''>{error}</p> */}
    </>
  )
}

export default Input
