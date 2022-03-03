import React from "react";
import useAxios from "../../Hooks/useAxios";
import { CaroselPlaceHoldre } from "../SkeletonPlaceHolder/CaroselPlaceHoldre/CaroselPlaceHoldre";
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
    "https://mohammedhilal.pythonanywhere.com/api/articles?page=1&category=uni"
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
                  className="px-2 pt-8 pb-2 md:pb-4 lg:pb-5 xl:pb-7  md:px-10 md:pt-16 lg:px-12 lg:pt-20 xl:px-14 xl:pt-24"
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
