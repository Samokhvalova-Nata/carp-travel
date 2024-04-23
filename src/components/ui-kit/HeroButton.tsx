import React from 'react';

export interface HeroButtonProps {
  text: string;
  children: React.JSX.Element
}

const HeroButton = ({ text, children}: HeroButtonProps) => {
  return (
    <button
      type="button"
      className="btn w-full uppercase focus:outline-1 focus:outline-white bg-btnBgdLight md:bg-btnBgd h-[53px] lg:h-[71px] text-lg lg:text-[32px] font-bold leading-[2.66] md:leading-normal relative hover:bg-btnBgdHover focus:bg-btnBgdHover transition-all duration-300"
    >{children}
      {text}
    </button>
  );
};


export default HeroButton;