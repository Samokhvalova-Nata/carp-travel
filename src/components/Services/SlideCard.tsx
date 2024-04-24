import Image from "next/image"
import { useMediaQuery } from 'react-responsive';

import SliderNavigation from "./SliderNavigation";
import SliderSlogan from "./SliderSlogan";
import Paragrath from "../ui-kit/Paragrath";

export interface SlideCardProps {
  item: {
    id: string;
    img: string;
    alt: string;
    title: string;
    slogan: string;
    description: string;
  };
  activeIndex: number;
  handleNavigationClick: (slideIndex: number) => void;
}

const SlideCard = ({item, activeIndex, handleNavigationClick}: SlideCardProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { id, img, alt, slogan, description } = item;

  return (
    <div>
      <Image 
        alt={alt} 
        loading='lazy' 
        src={img}  
        width={280}
        height={213}
        className="mb-[12px] md:mb-0 w-full h-full md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px]"
      />
      {/* {isMobile && <SliderSlogan text={slogan}/>}
      <SliderNavigation 
        handleNavigationClick={handleNavigationClick} 
        activeIndex={activeIndex}/>
      <div className="mt-[34px]">
        <Paragrath text={description}/>
      </div> */}

    </div>
  )
}

export default SlideCard
