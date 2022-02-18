import React from "react";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperContent from "./SwiperContent";
import Dots from "../Dots";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";

export default function App() {
  // Fetching the data
  const { dataIn } = useAxios("http://localhost:8000/articles");
  return (
    <div className="relative">
      <Swiper
        loop={true}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {dataIn.map((item, index) => {
          return (
            <SwiperSlide
              className="px-2 py-8 md:px-10 md:py-16 lg:px-16 lg:py-28 xl:px-20 xl:py-32"
              key={index}
            >
              <SwiperContent
                title={item.title}
                text={item.text}
                index={index}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
        <Dots className="hidden lg:absolute bottom-32 xl:bottom-36  w-80 xl:w-96" />
      </Swiper>
    </div>
  );
}
