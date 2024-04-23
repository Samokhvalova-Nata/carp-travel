'use client';

import React from 'react'
import { Link } from 'react-scroll';


import data from '@/data/hero.json';

import HeroTitle from './HeroTitle'
import Slogan from './Slogan'
import HeroButton from '../ui-kit/HeroButton';

const HeroContent = () => {
  

  return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between pb-[56px] md:pb-[64px] lg:py-[24px]'>

      <div className='md:hidden text-right'>
        <Slogan />
      </div>

      <div className='flex flex-col gap-6 md:gap-0 md:justify-between'>
        <HeroTitle />
        <p className='text-[10px] md:text-sm lg:text-base leading-[1.6] md:leading-[1.14] lg:leading-[1.5] md:tracking-1.26 lg:tracking-1.44 w-[157px] md:w-[263px] lg:w-full'>{data.locations}</p>
      </div>

      <div className='flex flex-col gap-6 md:gap-0 items-center md:w-[230px] lg:w-[294px]'>
        <div className='hidden md:flex flex-col w-full'>
          <Slogan />
        </div>
        <p className='text-justify leading-[1.42] md:text-base lg:text-lg md:leading-[1.25] lg:leading-[1.33] w-full md:w-[230px] lg:w-[294px] md:mt-[56px] md:mb-[28px] lg:mt-[181px]'>{data.description}</p>
        <HeroButton text='JOIN NOW'>
          <Link to="contacts" smooth={true} duration={500}/>
        </HeroButton>
      </div>
    </div>
  )
}

export default HeroContent
