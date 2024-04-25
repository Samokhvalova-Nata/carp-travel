'use client';

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { formData } from '../../data/career';
import Paragrath from '../ui-kit/Paragrath';
// import { FormData } from '@/types/formTypes';
import Input from '../ui-kit/Input';

export interface FormFields {
  name: string;
  email: string;
  position?: string;
  phone?: string;
  message: string;
  policy?: boolean;
};

const CareerForm = () => {
  const { register, handleSubmit, watch, reset, setValue, formState: { errors }} = useForm<FormFields>()
  
  const onSubmit = (data: FormFields) => {
    reset();
    console.log(data);
    alert("Your data have been send")
  };

  return (
    <div>
      <div className='ml-auto mb-[24px] md:mb-0 w-[179px] md:w-[221px] lg:w-[234px]'>
        <Paragrath text={formData.description}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[16px]'>
        {formData.form.inputs.map((input) => (
          <Input key={input.id} input={input} register={register} errors={errors}/>
        ))}
      </form>
    </div>
  )
}

export default CareerForm
