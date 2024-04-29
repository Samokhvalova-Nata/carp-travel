'use client';

import { contactsFormData } from '@/data/contacts';
import { FormFields } from '@/types/formTypes';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

import Input from '../ui-kit/Input';
import TextArea from '../ui-kit/TextArea';
import FormButton from '../ui-kit/FormButton';


function ContactsForm() {
  const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm<FormFields>();

  const {  forma: { inputs, textarea }} = contactsFormData;

  const onSubmit = (data: FormFields) => {
    localStorage.setItem("contacts", JSON.stringify(data));
    reset();
    toast.success('Your data have been send. We will contact you soon');
  };


  useEffect(() => {
    const storageData = localStorage.getItem("contacts");
    if (storageData !== null) {
      const result = JSON.parse(storageData);
      setValue("name", result.name);
      setValue("email", result.email);
      setValue("message", result.message);
    }
  }, [setValue])
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:mt-[64px]'>
        <div className='md:flex md:gap-[20px] lg:flex-col lg:gap-[40px]'>
          <div className='md:flex md:flex-col  lg:flex-row lg:gap-[20px] lg:justify-between'>
          {inputs.map((input) => (
          <Input key={input.id} input={input} register={register} errors={errors}/>
        ))}
          </div>
          <TextArea textArea={textarea} register={register} section="contacts"/>
        </div>
        <div className='md:ml-auto'>
          <FormButton text='SEND'/>
        </div>
        
      </form>
  )
}

export default ContactsForm