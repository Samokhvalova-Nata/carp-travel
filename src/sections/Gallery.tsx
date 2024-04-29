'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Title from '@/components/ui-kit/Title';
import SliderButton from '@/components/Gallery/SliderButton';
import GallerySlider from '@/components/Gallery/GallerySlider';

import title from '@/data/titles.json';

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <section id="gallery" className="gallery section">
      <div className="container text-center lg:text-left">
        <Title text1={title.gallery1} text2={title.gallery2} />
        <div className="relative mt-[23px] md:mt-[66px] lg:mt-[15px]">
          <GallerySlider />
          {!isMobile && (
            <div className="absolute bottom-0 z-10 text-33 font-thin md:left-[37px] md:flex md:gap-[459px] lg:left-[128px] lg:gap-[651px]">
              <SliderButton
                text={'Back'}
                ariaLabel={'Button back'}
                pos={'button-prev'}
              />
              <SliderButton
                text={'Next'}
                ariaLabel={'Button next'}
                pos={'button-next'}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
