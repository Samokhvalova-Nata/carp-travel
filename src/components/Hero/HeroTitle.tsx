import React from 'react';
import data from '@/data/hero.json';

const HeroTitle = () => {
  return (
    <div className="max-w-full sm:max-w-[426px] lg:max-w-[646px]">
      <h1
        className="tracking-1.6 md:tracking-2.68 lg:tracking-3.92 flex flex-col text-[40px] font-thin uppercase leading-[1.4] md:text-[67px] md:leading-normal lg:text-[98px]"
      >
        <span className="font-medium">{data.title1}</span>
        {data.title2}
      </h1>
    </div>
  );
};

export default HeroTitle;
