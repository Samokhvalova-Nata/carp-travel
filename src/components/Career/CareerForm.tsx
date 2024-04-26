'use client';

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';

import { formData } from '../../data/career';
import Paragrath from '../ui-kit/Paragrath';
import Input from '../ui-kit/Input';
import TextArea from '../ui-kit/TextArea';
import Check from '../ui-kit/Check';
import FormButton from '../ui-kit/FormButton';

export interface FormFields {
  name: string;
  email: string;
  position?: string;
  phone?: string;
  message: string;
  policy?: boolean;
};

const CareerForm = () => {
  const { register, handleSubmit, watch, reset, setValue, formState: { errors }} = useForm<FormFields>();
  useFormPersist("careerFormData", {
    watch,
    setValue,
    // storage: window.localStorage,
  });

  const { description, forma: { inputs, textarea, check }} = formData;

  console.log('errors', errors)
  
  const onSubmit = (data: FormFields) => {
    reset();
    console.log(data);
    alert("Your data have been send");
  };

  return (
    <div className='md:flex flex-col md:mt-[113px] lg:mt-[24px]'>
      <div className='ml-auto mb-[24px] w-[179px] md:w-[188px] lg:w-[234px] md:text-left md:mb-[32px] md:ml-0 lg:mb-[14px]'>
        <Paragrath text={description}/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
        <div className='md:flex md:gap-[20px]'>
          <div className=''>
          {inputs.map((input) => (
          <Input key={input.id} input={input} register={register} errors={errors}/>
        ))}
        </div>
        <TextArea textArea={textarea} register={register}/>
        </div>
        

        <div className='md:flex md:justify-between md:items-start'>
          <Check check={check} register={register}/>
          <FormButton text='SEND'/>
        </div>
        
      </form>
      
    </div>
  )
}

export default CareerForm;
