import React, { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { CaroselPlaceHoldre } from "../SkeletonPlaceHolder/CaroselPlaceHoldre/CaroselPlaceHoldre";
// The Shape
import { CircleGrid } from "react-awesome-shapes";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperContent from "./SwiperContent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";

export default function App() {
  // Fetching the data
  const { dataIn, loading, error } = useAxios(
    "http://mohammedhilal.pythonanywhere.com/api/articles?page=1&category=uni"
  );
  return (
    <div>
      {loading && (
        <div className="relative">
          <div className="px-2 py-8 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-14 xl:py-24">
            <CaroselPlaceHoldre />
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
      {dataIn && (
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
                  className="px-2 py-8 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-14 xl:py-24"
                  key={index}
                >
                  <SwiperContent
                    title={item.title}
                    text={
                      item.content.length > 150
                        ? `${item.content.substring(0, 300)} ...`
                        : item.content
                    }
                    index={index}
                    id={item.id}
                    image={item.images[0]}
                  />
                  
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
}
