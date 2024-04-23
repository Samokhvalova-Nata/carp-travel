import React from 'react'
import data from '@/data/hero.json';


const Slogan = () => {
  return (
    <>
      <p className='text-[37px] md:text-[67px] lg:text-[98px] tracking-1.665 md:tracking-8.71 lg:tracking-normal font-thin uppercase leading-none'>
        <span className='font-medium'>{data.slogan1}</span>
        {data.slogan2}
      </p>
      <p className='text-xs md:text-sm lg:text-base tracking-9.48 md:tracking-25.9 lg:tracking-36.48 leading-none font-thin'>{data.slogan3}</p>
    </>
  );
}

export default Slogan;
