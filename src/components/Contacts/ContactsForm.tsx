'use client';

import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Input from '../ui-kit/Input';
import TextArea from '../ui-kit/TextArea';
import FormButton from '../ui-kit/FormButton';

import { contactsFormData } from '@/data/contacts';
import { FormFields } from '@/types/formTypes';

function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const {
    forma: { inputs, textarea },
  } = contactsFormData;

  useEffect(() => {
    const storageData = localStorage.getItem('contacts');
    if (storageData !== null) {
      const result = JSON.parse(storageData);
      setValue('name', result.name);
      setValue('email', result.email);
      setValue('message', result.message);
    }
  }, [setValue]);

  const onSubmit = (data: FormFields) => {
    localStorage.setItem('contacts', JSON.stringify(data));
    reset();
    toast.success('Your data have been send. We will contact you soon');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:mt-[64px]"
    >
      <div className="md:flex md:gap-[20px] lg:flex-col lg:gap-[40px]">
        <div className="md:flex md:flex-col lg:flex-row lg:justify-between lg:gap-[20px]">
          {inputs.map(input => (
            <Input
              key={input.id}
              input={input}
              register={register}
              errors={errors}
            />
          ))}
        </div>
        <TextArea textArea={textarea} register={register} section="contacts" />
      </div>
      <div className="md:ml-auto">
        <FormButton text="SEND" />
      </div>
    </form>
  );
};

export default ContactsForm;
