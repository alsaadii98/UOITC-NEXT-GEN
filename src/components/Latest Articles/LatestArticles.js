import React from "react";
import useAxios from "../../Hooks/useAxios";
import SwiperContent from "./SwiperContent";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode } from "swiper";

function LatestArticles() {
  // Fetching the data
  const { dataIn } = useAxios("http://localhost:8000/articles");
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1396: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1725: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {dataIn.map((item, index) => {
          return (
            <SwiperSlide className="mt-7 px-8 py-5" key={index}>
              <SwiperContent
                title={
                  item.title.length > 80
                    ? `${item.title.substring(0, 50)} ...`
                    : item.title
                }
                text={
                  item.text.length > 150
                    ? `${item.text.substring(0, 80)} ...`
                    : item.text
                }
                date={item.date}
                index={index}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
export default LatestArticles;
