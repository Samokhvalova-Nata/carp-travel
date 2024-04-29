'use client';

import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { formData } from '../../data/career';
import Paragrath from '../ui-kit/Paragrath';
import Input from '../ui-kit/Input';
import TextArea from '../ui-kit/TextArea';
import Check from '../ui-kit/Check';
import FormButton from '../ui-kit/FormButton';
import { FormFields } from '@/types/formTypes';



const CareerForm = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors }} = useForm<FormFields>();

  useEffect(() => {
    const storageData = localStorage.getItem("career");
    if (storageData !== null) {
      const result = JSON.parse(storageData);
      setValue("name", result.name);
      setValue("email", result.email);
      setValue("position", result.position);
      setValue("phone", result.phone);
      setValue("message", result.message);
    }
  }, [setValue])

  const { description, forma: { inputs, textarea, check }} = formData;

  const onSubmit = (data: FormFields) => {
    localStorage.setItem("career", JSON.stringify(data));
    reset();
    toast.success('Your data have been send. We will contact you soon');

  };

  return (
    <div className='md:flex flex-col md:mt-[113px] lg:mt-[24px] lg:w-[50%]'>
      <div className='ml-auto mb-[24px] w-[179px] md:w-[188px] lg:w-[234px] md:text-left md:mb-[32px] md:ml-0 lg:mb-[14px]'>
        <Paragrath text={description}/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
        <div className='md:flex md:gap-[20px] '>
          <div className='lg:w-[50%]'>
          {inputs.map((input) => (
          <Input key={input.id} input={input} register={register} errors={errors}/>
        ))}
        </div>
        
        <TextArea textArea={textarea} register={register} section="career"/>
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
