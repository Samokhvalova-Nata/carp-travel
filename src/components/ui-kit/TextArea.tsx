import { UseFormRegister } from 'react-hook-form';

import { FormFields, ITextarea } from '@/types/formTypes';


interface TextAreaProps {
  textArea: ITextarea;
  register: UseFormRegister<FormFields>;
  section: 'career' | 'contacts';
};

const TextArea = ({ textArea, register, section }: TextAreaProps) => {
  const { id, field, label } = textArea;

  return (
    <div
      className={`mb-[16px] flex flex-col ${section === 'contacts' ? '' : 'lg:w-[50%]'} `}
    >
      <label
        htmlFor={id}
        className="mb-[4px] leading-[2] tracking-2.4 first-line:text-12"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`textarea 
          ${
            section === 'contacts'
              ? 'h-[193px] md:h-[221px] md:w-[463px] lg:h-[174px] lg:w-[607px]'
              : 'h-[196px] md:h-full md:w-[222px] lg:w-full'
          }`}
        {...register(field)}
      ></textarea>
    </div>
  );
};

export default TextArea;
