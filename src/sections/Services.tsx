"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';

import Title from "@/components/ui-kit/Title";
import SlideCounter from "@/components/Services/SlideCounter";
import SlideCard from "@/components/Services/SlideCard";
import SliderSlogan from "@/components/Services/SliderSlogan";
import SliderNavigation from "@/components/Services/SliderNavigation";
import Paragrath from "@/components/ui-kit/Paragrath";

import title from '@/data/titles.json';
import {sliderCards, sliderSlogan, sliderDescription} from '../data/services';


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
        <div className="md:flex md:gap-[20px] justify-start">
          <Swiper 
            modules={[EffectFade]}
            effect='fade'
            slidesPerView={1}
            onSlideChange={(swiper) => handleNavigationClick(swiper.activeIndex)}
            onSwiper={(swiper: any) => {setSwiper(swiper)}} 
            className="services-slider">
            {sliderCards.map((item) => (
              <SwiperSlide key={item.id}>
                <SlideCard item={item}/>
              </SwiperSlide>
            ))}
          </Swiper>
        <div className="md:flex md:flex-col md:justify-between lg:w-1/2">
          <div className="md:flex md:flex-col-reverse md:gap-[25px] lg:flex-row-reverse lg:justify-between">
            <SliderSlogan text={sliderSlogan[activeIndex]}/>
            <SliderNavigation handleNavigationClick={handleNavigationClick} activeIndex={activeIndex}/>
          </div>
          <div className="text-justify mt-[34px] md:mt-0 md:w-[221px] lg:w-[293px] lg:ml-auto">
            <Paragrath text={sliderDescription[activeIndex]}/>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
