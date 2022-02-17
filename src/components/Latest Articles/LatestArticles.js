import React, { useRef, useState } from "react";
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
  const data = [
    {
      id: 1,
      date: "22-22-2022",
      title: "Qualification and Employment Organizes a Photogram Workshop",
      text: "The Continuing Education Center at the university held an virtual  workshop entitled Instructions for Scientific Promotion in Iraqi Universities, Reality and Ambition",
      img: "../assets/img/Img1.jpg",
    },
    {
      id: 2,
      date: "22-22-2022",
      title: "Continuing Education holds a workshop on the instructions ",
      text: "The University of Information Technology and communication entered transparency classification for the month of January 2022 . The reference to the Transparent Ranking is one of the axes ",
      img: "../assets/img/Img2.jpg",
    },
    {
      id: 3,
      date: "22-22-2022",
      title:
        "The Continuous Education Center concludes the Teaching Methods",
      text: "The Continuous Education Center at the University of Information Technology and Communications concluded the Teaching Methods Course, which was held for the",
      img: "../assets/img/Img3.jpg",
    },
    {
      id: 4,
      date: "22-22-2022",
      title:
        "The Biomedical Informatics College holds a scientific exhibition in the field of medical systems",
      text: "Students of the faculties of Business Informatics, Engineering, and Biomedical Informatics at the University took their attendance exams for the first semester ",
      img: "../assets/img/Img5.jpg",
    },
    {
      id: 5,
      date: "22-22-2022",
      title:
        "The Biomedical Informatics College holds a scientific exhibition in the field of medical systems",
      text: "Students of the faculties of Business Informatics, Engineering, and Biomedical Informatics at the University took their attendance exams for the first semester ",
      img: "../assets/img/Img5.jpg",
    },
    
  ];
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
        
        {data.map((item, index) => {
          return (
            <SwiperSlide
              className="mt-7 px-8 py-5"
              key={index}
            >
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
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
export default LatestArticles;
