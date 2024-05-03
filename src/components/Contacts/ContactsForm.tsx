'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Input from '../ui-kit/Input';
import TextArea from '../ui-kit/TextArea';
import FormButton from '../ui-kit/FormButton';

import { contactsFormData } from '@/data/contacts';
import { FormFields } from '@/types/formTypes';
import useFormPersist from 'react-hook-form-persist';

function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset, watch,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const {
    forma: { inputs, textarea },
  } = contactsFormData;

  useFormPersist('contacts', {
    watch,
    setValue,
  });

  const onSubmit = (data: FormFields) => {
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
