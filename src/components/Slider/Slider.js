import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import './slider.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Slide from './Slide/Slide';

const Slider = () => {
  const slide2 = 'https://i.ibb.co/qmBZVbN/2.jpg';
  const slide3 = 'https://i.ibb.co/JBTWH8X/3.jpg';
  const slide4 = 'https://i.ibb.co/CBVcV5d/1.jpg';
  const slide1 = 'https://i.ibb.co/6WTtSjq/4.jpg';
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#aaa',
          '--swiper-pagination-color': '#fff',
        }}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, EffectCoverflow, Keyboard, Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <Slide url={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide url={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide url={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide url={slide4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
