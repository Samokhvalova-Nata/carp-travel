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

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.realIndex);
      });
    }
  }, [swiper]);

  const handleMenuButtonClick = (slideIndex: number) => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };

  return (
    <section id="services" className='section'
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `image-set(
        url("/images/services/bg/services-bg-${activeIndex + 1}-${device}-1x.png") 1x,
        url("/images/services/bg/services-bg-${activeIndex + 1}-${device}-2x.png") 2x
      )`
    }}>
      <div className='container'>
        <Title text1={title.services1} text2={title.services2}/>
        <Swiper 
          effect={'fade'}
          modules={[EffectFade]}
          onSwiper={(swiper: any) => {
            console.log(swiper); 
            setSwiper(swiper);
            }}
          slidesPerView={1}
          >
            
        </Swiper>

      </div>
    </section>
  );
};

export default Services;