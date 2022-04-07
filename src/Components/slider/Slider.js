import React from 'react'
import Wrapper from './Slider.styled';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// import required modules
import { Autoplay, FreeMode } from "swiper";
import { SliderData } from './Slider.data';

function Slider() {

  return (
   <Wrapper>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}

        breakpoints={{
            320:{
            slidesPerView: 1,
             
            },
            490:{
                slidesPerView: 2,
                 
                },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

        modules={[Autoplay, FreeMode,]}
        className="mySwiper"
      >
        {
            SliderData.map((item)=>(
                <SwiperSlide key={item.id}>
                <div className='card'>
                    <img src={item.slideImg} alt="slider"/>

                </div>
                </SwiperSlide>
            ))
        }
      </Swiper>

   </Wrapper>
  )
}

export default Slider