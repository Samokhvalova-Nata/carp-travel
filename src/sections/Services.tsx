"use client";

import Title from "@/components/ui-kit/Title";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import title from '@/data/titles.json';
import data from '@/data/services.json';
import SlideCounter from "@/components/Services/SlideCounter";
import SlideCard from "@/components/Services/SlideCard";
import SliderSlogan from "@/components/Services/SliderSlogan";
import SliderNavigation from "@/components/Services/SliderNavigation";
import Paragrath from "@/components/ui-kit/Paragrath";

export const sliderSlogan = [
  "Feel the adrenaline rush",
  "Destroy your limitations",
  "Get Inspired",
  "Overcome your fears",
  "Trust the flow",
];

export const sliderDescription = [
  "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
  "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
  "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
  "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
];

const Services  = () => {
  const [device, setDevice] = useState('mobile');
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    if (isMobile) {
      setDevice('mobile');
    } else if (isTablet) {
      setDevice('tablet');
    } else if (isDesktop) {
      setDevice('desktop');
    } 
  }, [isMobile, isTablet, isDesktop]);


  const handleNavigationClick = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <section id="services" className='section'
    style={{
      backgroundImage: `image-set(
        url("/images/services/bg/services-bg-${activeIndex + 1}-${device}-1x.png") 1x,
        url("/images/services/bg/services-bg-${activeIndex + 1}-${device}-2x.png") 2x
      )`
    }}>
      <div className='container'>
        <div className="md:flex items-center md:gap-[170px] lg:gap-[162px]">
          <Title text1={title.services1} text2={title.services2}/>
          <SlideCounter index={activeIndex + 1}/>
        </div>
        
        <Swiper 
          modules={[EffectFade]}
          effect='fade'
          slidesPerView={1}
          onSlideChange={(swiper) => handleNavigationClick(swiper.activeIndex)}
          onSwiper={(swiper: any) => {
            setSwiper(swiper);
            }}>
          {
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <SlideCard item={item} handleNavigationClick={handleNavigationClick} activeIndex={activeIndex}/>
              </SwiperSlide>
            ))
          }
        </Swiper>

        {isMobile && <SliderSlogan text={sliderSlogan[activeIndex]}/>}
      <SliderNavigation 
        handleNavigationClick={handleNavigationClick} 
        activeIndex={activeIndex}/>
      <div className="mt-[34px]">
        <Paragrath text={sliderDescription[activeIndex]}/>
      </div>

      </div>
    </section>
  );
};

export default Services;