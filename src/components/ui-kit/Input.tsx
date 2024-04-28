'use client';

// import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";
import {InputOptions, InputProps } from '@/types/formTypes'
import React from 'react'


const Input = ({input, register, errors}:InputProps) => {
  const {id, field, type, required, placeholder, error, label, pattern, ariaLabel, minLength, maxLength} = input;

  const options: InputOptions = {
  required: required,
  pattern: pattern,
  minLength: minLength,
  maxLength: maxLength
}

  return (
    <div className={`flex flex-col w-full relative mb-[16px] ${field === 'phone' && 'phone-input'}`}>
      <label htmlFor={id} className={`mb-[4px] first-line:text-12 tracking-2.4 leading-[2] ${errors[field] ? 'text-error': 'text-white'}`}>
        {label}   
      </label>
      <input 
        id={id}
        type={type} 
        required={required} 
        aria-label={ariaLabel}
        placeholder={placeholder} 
        className={`input md:w-[222px] lg:w-full ${errors[field] ? 'text-error': 'text-white'} `}
        {...register(field, options)}
        />
      
      {errors[field] && <p className='error text-error text-12 leading-[2] tracking-2.4 absolute right-0 bottom-[-24px]'>{error}</p>}
    </div>
  )
}

export default Input
