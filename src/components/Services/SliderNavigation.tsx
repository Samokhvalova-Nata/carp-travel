import React, { FC } from 'react';
import {navigationList} from '../../data/services';


export interface SliderNavigationProps {
  activeIndex: number;
  handleNavigationClick: (index: number) => void;
}

const SliderNavigation: FC<SliderNavigationProps> = ({activeIndex = 0, handleNavigationClick}) => {     
  return (
    <ul className='flex flex-col pt-[24px] md:pt-0 gap-[16px] lg:gap-[24px]'>
      {navigationList.map((el, index) => (
        <li key={el} className='flex gap-[8px] items-center'>
          {(activeIndex === index) && <div className='w-[6px] h-[6px] bg-white rotate-45'></div>}
          <button type='button' 
          className={`uppercase text-left gap-[8px] text-20 md:text-22 lg:text-28 leading-[0.85] md:leading-[0.82] lg:leading-[0.86] md:w-[186px] xl:w-[236px]
          ${(activeIndex === index) ?
          'opacity-100 font-medium'
          : 'opacity-50 hover:opacity-100 focus:opacity-100 focus:font-medium focus:outline-1 focus:outline-white transition-all duration-300'}`} 
          onClick={() => handleNavigationClick(index)}>
            {el}
          </button>
        </li>))}
    </ul>
  )
}

export default SliderNavigation;
