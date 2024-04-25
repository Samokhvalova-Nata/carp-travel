'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Title from "@/components/ui-kit/Title";
import Paragrath from "@/components/ui-kit/Paragrath";

import title from '@/data/titles.json';
import { features } from '../data/career';
import Features from '@/components/Career/Features';
import CareerForm from '@/components/Career/CareerForm';



const Career = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id="career" className='career section'>
      <div className='container'>
        <div className='md:flex items-center justify-between'>
          <Title text1={title.career1} text2={title.career2}/>
          <div className='ml-auto mt-[24px] md:mt-0 w-[179px] md:w-[221px] lg:w-[293px]'>
            <Paragrath text={features.description}/>
          </div>
        </div>
        <Features/>
        <CareerForm/>
      </div>
    </section>
  )
}

export default Career;
