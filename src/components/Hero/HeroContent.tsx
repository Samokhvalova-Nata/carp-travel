'use client';

import React from 'react'
import { Link } from 'react-scroll';


import data from '@/data/hero.json';

import HeroTitle from './HeroTitle'
import Slogan from './Slogan'
import HeroButton from './HeroButton';

const HeroContent = () => {
  

  return (
    <div className='flex flex-col gap-6'>
      <div className='md:hidden text-right '>
        <Slogan />
      </div>
      <HeroTitle />
      <p className='text-[10px] md:text-sm lg:text-base leading-[1.6] md:leading-[1.14] lg:leading-[1.5] md:tracking-1.26 lg:tracking-1.44 w-[157px] md:w-[263px] lg:w-full'>{data.locations}</p>
      <p className='text-justify leading-[1.42] md:text-base lg:text-lg md:leading-[1.25] lg:leading-[1.33] w-full md:w-[230px] lg:w-[294px]'>{data.description}</p>
      <HeroButton text='JOIN NOW'>
        <Link to="contacts" smooth={true} duration={500}/>
      </HeroButton>
    </div>
  )
}

export default HeroContent
