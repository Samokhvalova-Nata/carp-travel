'use client';

import React from 'react';
import { Link } from 'react-scroll';

import HeroTitle from './HeroTitle';
import Slogan from './Slogan';
import HeroButton from '../ui-kit/HeroButton';

import data from '@/data/hero.json';

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-0">
      <div className="text-right md:hidden">
        <Slogan />
      </div>

      <div className="flex flex-col gap-6 md:justify-between md:gap-0">
        <HeroTitle />
        <p className="w-[157px] text-[10px] leading-[1.6] md:w-[263px] md:text-sm md:leading-[1.14] md:tracking-1.26 lg:w-full lg:text-base lg:leading-[1.5] lg:tracking-1.44">
          {data.locations}
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 md:w-[230px] md:gap-0 lg:w-[294px]">
        <div className="hidden w-full flex-col md:flex">
          <Slogan />
        </div>
        <p className="w-full text-justify leading-[1.42] md:mb-[28px] md:mt-[56px] md:w-[230px] md:text-base md:leading-[1.25] lg:mt-[181px] lg:w-[294px] lg:text-lg lg:leading-[1.33]">
          {data.description}
        </p>
        <HeroButton>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="px-[50px] py-[12px]"
          >
            {'JOIN NOW'}
          </Link>
        </HeroButton>
      </div>
    </div>
  );
};

export default HeroContent;
