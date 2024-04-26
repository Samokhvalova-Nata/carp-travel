"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive';

import title from '@/data/titles.json';
import slides from '@/data/gallery.json';
import Title from '@/components/ui-kit/Title';
import Image from 'next/image';


const Gallery = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });


  return (
    <section id='gallery' className='gallery section'>
      <div className='container text-center lg:text-left'>
        
      <Title text1={title.gallery1} text2={title.gallery2} />
      
        <Swiper 
        className='gallery-swiper h-[609px] md:h-[294px] lg:h-[430px] mt-[24px] md:mt-[72px] lg:mt-[15px]'
        slidesPerView={3} 
        spaceBetween={24}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-back',
        }}
        modules={[Keyboard, Navigation, EffectCoverflow]}
        direction={'vertical'}
        breakpoints={{
          768: {
            direction: 'horizontal',
          },
        }}
        wrapperTag='ul'
        a11y = {{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
        // effect={"coverflow"}
        // coverflowEffect={{
        //   // rotate: 50,
        //   // stretch: 0,
        //   // scale: 1,
        //   // depth: 100,
        //   // modifier: 1,
        //   slideShadows: true,
        // }}
        >

          {slides.map(({id, img, alt}) => (
            <SwiperSlide 
              key={id} 
              tag='li' 
              className='gallery-slider'>
                {
                  ({ isActive, isPrev, isNext   }) => (
                    <div
                      className={`${isActive ? 
                      'md:w-[415px] md:h-[294px] lg:w-[606px] lg:h-[429px]' : ''}
                      ${ (isPrev || isNext) ?
                      'lg:w-[313px] lg:h-[225px] opacity-75 shadow-lg bg-galleryNotActive' : ''}`}>
              <Image 
                alt={alt} 
                src={img} 
                loading='lazy'
                fill
                  sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 606px"
                  quality={90}
                  
                // width={280} 
                // height={213} 
                // className='w-full h-[187px] sm:w-[440px] md:w-[415px] md:h-[294px] lg:w-[606px] lg:h-[429px]'
                />
            </div>
                )}
                </SwiperSlide>
          ))}

          {!isMobile && 
          <div className='absolute font-thin text-33' >
            <button type='button' aria-label="Button back" className='button-next uppercase text-right hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300'>Back</button>
            <button type='button' aria-label="Button next" className='button-next uppercase  hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300'>Next</button>
          </div> }
        </Swiper>

      </div>
    </section>
  )
}

export default Gallery;
