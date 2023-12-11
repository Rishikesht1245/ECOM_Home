import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css/bundle";

export default function Banner() {

  SwiperCore.use([Navigation]);
  return (
    <div className="w-[100vw] max-w-[1550px] mt-5">
      {/* Swipers */}
      <Swiper navigation>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20"
            alt="Swiper image"
            className="object-contain w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20"
            alt="Swiper image"
            className="object-contain  w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f61e2097eb7bac82.jpg?q=20"
            alt="Swiper image"
            className="object-contain  w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

