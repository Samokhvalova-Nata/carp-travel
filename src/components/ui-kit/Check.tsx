'use client';

import { CheckProps } from '@/types/formTypes'


const Check = ({check, register}:CheckProps) => {
  const { id, field, type, required, ariaLabel, text} = check;

  return (
    <div className='relative'>
      <input 
        type={type}
        id={id}
        required={required}
        aria-label={ariaLabel}
        className='check-input visually-hidden'
        {...register(field, {required: required})}/>

        <label htmlFor={id}
        className='check-label cursor-pointer text-12 leading-[1.83] flex content-start gap-[16px]'>
          <span className="inline-block w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] border border-white absolute"></span>
          <span className='md:w-[192px] '>
            {text}
          </span>
        </label>
        
    </div>
  );
};

export default Check;

// lg:w-[258px]