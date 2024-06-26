'use client';

import React, { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import Title from '@/components/ui-kit/Title';
import Paragrath from '@/components/ui-kit/Paragrath';
import Features from '@/components/Career/Features';
import CareerForm from '@/components/Career/CareerForm';

import title from '@/data/titles.json';
import { features } from '../data/career';

const Career = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <>
      <section id="career" className="career section bg-top">
        <div className="container">
          <div className="items-center justify-between md:flex">
            <Title text1={title.career1} text2={title.career2} />
            <div className="ml-auto mt-[24px] w-[179px] md:mt-0 md:w-[221px] lg:w-[293px]">
              <Paragrath text={features.description} />
            </div>
          </div>
          <div className="md:flex md:gap-[20px] lg:gap-[24px]">
            <Features />
            {!isMobile && <CareerForm />}
          </div>
        </div>
      </section>

      {isMobile && (
        <section className="career section bg-top">
          <div className="container">
            <CareerForm />
          </div>
        </section>
      )}
    </>
  );
};

export default Career;
