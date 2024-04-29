import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import slides from '@/data/gallery.json';


const GallerySlider = () => {
  return (
    <Swiper
      className="gallery-swiper h-[609px] md:h-[295px] lg:h-[430px]"
      wrapperTag="ul"
      slidesPerView={3}
      spaceBetween={24}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      modules={[Navigation, Keyboard]}
      navigation={{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }}
      keyboard={{
        enabled: true,
      }}
      direction={'vertical'}
      breakpoints={{
        768: {
          direction: 'horizontal',
        },
      }}>
      {slides.map(({ id, img, alt }) => (
        <SwiperSlide tag="li" key={id} className="gallery-slider">
          {({ isActive }) => (
            <div className={`image-wrapper relative h-[187px] transition-all duration-300
                ${isActive
                ? 'before:hidden  md:w-[415px] md:h-[294px] lg:w-[606px] lg:h-[429px]'
                : 'md:w-[121px] md:h-[87px] lg:w-[213px] lg:h-[125px]'
              }`}>
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 606px"
                quality={90}
                priority />
            </div>)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
