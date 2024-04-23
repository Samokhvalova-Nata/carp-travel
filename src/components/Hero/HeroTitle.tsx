import React from 'react';
import data from '@/data/hero.json';

const HeroTitle = () => {
  return (
    <div className="max-w-full sm:max-w-[426px] lg:max-w-[646px]">
      <h1
        className="flex flex-col font-thin uppercase text-[40px] md:text-[67px] lg:text-[98px] tracking-1.6 md:tracking-2.68 lg:tracking-3.92 leading-[1.4] "
      >
        <span className="font-medium">{data.title1}</span>
        {data.title2}
      </h1>
    </div>
  );
};

export default HeroTitle;
