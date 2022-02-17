import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperContent from "./SwiperContent";
import Dots from '../Dots'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";

export default function App() {
  const data = [
    {
      id: 1,
      title: "Qualification and Employment Organizes a Photogram Workshop",
      text: "The Continuing Education Center at the university held an virtual  workshop entitled Instructions for Scientific Promotion in Iraqi Universities, Reality and Ambition",
      img: "../assets/img/Img1.jpg",
    },
    {
      id: 2,
      title: "Continuing Education holds a workshop on the instructions for scientific promotions in Iraqi universities",
      text: "The University of Information Technology and communication entered transparency classification for the month of January 2022 . The reference to the Transparent Ranking is one of the axes ",
      img: "../assets/img/Img2.jpg",
    },
    {
      id: 3,
      title: "The Continuous Education Center concludes the Teaching Methods Course",
      text: "The Continuous Education Center at the University of Information Technology and Communications concluded the Teaching Methods Course, which was held for the",
      img: "../assets/img/Img3.jpg",
    },
    {
      id: 4,
      title: "The Biomedical Informatics College holds a scientific exhibition in the field of medical systems",
      text: "Students of the faculties of Business Informatics, Engineering, and Biomedical Informatics at the University took their attendance exams for the first semester ",
      img: "../assets/img/Img5.jpg",
    },
  ];
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
        {data.map((item, index) => {
          return (
            <SwiperSlide className="px-2 py-8 md:px-10 md:py-16 lg:px-16 lg:py-28 xl:px-20 xl:py-32" key={index}>
              <SwiperContent
                title={item.title}
                text={item.text}
                index={index}
              />
            </SwiperSlide>
          );
        })}
        <Dots className="hidden lg:absolute bottom-32 xl:bottom-36  w-80 xl:w-96"/>
      </Swiper>
    </div>
  );
}
