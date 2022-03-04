import React from "react";
import useAxios from "../../Hooks/useAxios";
import LatestArticlesPlaceHolder from "../SkeletonPlaceHolder/LatestArticlesPlaceHolder/LatestArticlesPlaceHolder";
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
  const { dataIn, loading, error } = useAxios("https://mohammedhilal.pythonanywhere.com/api/articles?page=1&category=uni");
  const i = 5;
  return (
    <div>
      {loading && (
        <div className="relative">
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
            {[...Array(i)].map((items, index) => {
              return (
                <SwiperSlide className="mt-7 px-8 py-5" key={index}>
                  <LatestArticlesPlaceHolder />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      {error && <div>{error}</div>}
      {dataIn && (
        <div>
          <Swiper
            spaceBetween={20}
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
              // px-8 py-5
              return (
                <SwiperSlide className="relative mt-7 mb-10 lg:mb-20 " key={index}>
                  <SwiperContent
                    title={
                      item.title.length > 50
                        ? `${item.title.substring(0, 50)} ...`
                        : item.title
                    }
                    text={
                      item.content.length > 80
                        ? `${item.content.substring(0, 80)} ...`
                        : item.content
                    }
                    date={item.published_at}
                    index={index}
                    id={item.id}
                    image={item.photos[0]}
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
export default LatestArticles;
