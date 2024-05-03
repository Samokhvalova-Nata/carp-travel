import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormFields, IInput, InputOptions } from '@/types/formTypes';


interface InputProps {
  input: IInput;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

const Input = ({ input, register, errors }: InputProps) => {
  const {
    id,
    field,
    type,
    required,
    placeholder,
    error,
    label,
    pattern,
    minLength,
    maxLength,
  } = input;

  const options: InputOptions = {
    required: required,
    pattern: pattern,
    minLength: minLength,
    maxLength: maxLength,
  };

  return (
    <div
      className={`relative mb-[16px] flex w-full flex-col ${field === 'phone' && 'phone-input'}`}
    >
      <label
        htmlFor={id}
        className={`mb-[4px] leading-[2] tracking-2.4 first-line:text-12 ${errors[field] ? 'text-error' : 'text-white'}`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`input md:w-[222px] lg:w-full ${errors[field] ? 'text-error' : 'text-white'} `}
        {...register(field, options)}
      />
      {errors[field] && (
        <p className="error absolute bottom-[-24px] right-0 text-12 leading-[2] tracking-2.4 text-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
