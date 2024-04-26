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
    <div className={`flex flex-col relative mb-[16px] ${field === 'phone' && 'phone-input'}`}>
      <label htmlFor={id} className={`mb-[4px] first-line:text-12 tracking-2.4 leading-[2] ${errors[field] ? 'text-error': 'text-white'}`}>
        {label}   
      </label>
      <input 
        id={id}
        type={type} 
        required={required} 
        aria-label={ariaLabel}
        placeholder={placeholder} 
        className={`bg-inputBgd pl-[8px] py-[2px] text-13 lg:text-20 leading-[1.85] text-justify md:w-[222px] lg:w-full placeholder:text-13 placeholder:leading-[1.85] lg:placeholder:leading-[1.2] placeholder:opacity-20 hover:bg-inputBgdFilled focus:bg-inputBgdFilled focus:placeholder:text-white focus:placeholder:opacity-100 transition-all duration-300 outline-none focus:outline-none  ${errors[field] ? 'text-error': 'text-white'} `}
        {...register(field, options)}
        />
      
      {errors[field] && <p className='error text-error text-12 leading-[2] tracking-2.4 absolute right-0 bottom-[-24px]'>{error}</p>}
    </div>
  )
}

export default Input
