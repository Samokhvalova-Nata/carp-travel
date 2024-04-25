'use client';

import { CheckProps } from '@/types/formTypes'
import React, { useState } from 'react'
import checkIcon from '../../../public/icons/checked.svg';
import Image from 'next/image';

const Check = ({check, register}:CheckProps) => {
  const { id, field, type, required, error, ariaLabel, text} = check;
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className='relative'>
      <input 
        type={type}
        id={id}
        required={required}
        aria-label={ariaLabel}
        checked={isChecked}
        className='visually-hidden'
        {...register(field, {
          required: required
        })}/>
        <label htmlFor={id} className='text-12 leading-[1.83] pl-[30px] relative flex'>
          <Image alt='Checkbox unchecked' src="/icons/unchecked.svg" width="22" height="22"/>


          {/* <div className='mr-[8px] absolute left-0 top-[4px]'>
            <span className="inline-block w-[22px] h-[22px] border border-white absolute"></span>
            <span className="inline-block w-[16px] h-[16px] bg-inputBgdFilled absolute left-[4px] top-[4px]"></span>
          </div> */}
          {text}
        
          {/* <svg width="22" height="22" className='w-[22px] h-[22px] '>
            <use href={checkIcon}></use>
          </svg> */}

          
        </label>
    </div>
  )
}

export default Check
