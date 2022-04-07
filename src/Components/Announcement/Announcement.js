import React from "react";
import Wrapper from "./Announcement.styled";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
// import banner data
import { SliderData } from "./slide.data";
function Announcement() {
  return (
    <Wrapper>
      <div className="title" id="announcements">
        <h3>announcements</h3>
      </div>
      <div className="slider-container">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          loop={true}
        >
          {SliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="card">
                <div className="card-img">
                  <img src={slide.slideImg} alt="icon" />
                </div>
                <div className="body">
                  <h4>{slide.title}</h4>
                  <p className="subtitle">{slide.subtitle}</p>
                  <p className="description">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
}

export default Announcement;
