import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroCarousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    const data = [
      {
        title: "Qualification and Employment Organizes a Photogram Workshop",
        text: "Tristique nulla aliquet enim tortor at. Accumsan sit amet nulla facilisi morbi tempus iaculis. Sit amet purus ",
        img: "../assets/img/Img1.jpg",
      },
      {
        title: "Qualification and Employment Organizes a Photogram Workshop",
        text: "Tristique nulla aliquet enim tortor at. Accumsan sit amet nulla facilisi morbi tempus iaculis. Sit amet purus ",
        img: "../assets/img/Img2.jpg",
      },
      {
        title: "Qualification and Employment Organizes a Photogram Workshop",
        text: "Tristique nulla aliquet enim tortor at. Accumsan sit amet nulla facilisi morbi tempus iaculis. Sit amet purus ",
        img: "../assets/img/Img3.jpg",
      },
      {
        title: "Qualification and Employment Organizes a Photogram Workshop",
        text: "Tristique nulla aliquet enim tortor at. Accumsan sit amet nulla facilisi morbi tempus iaculis. Sit amet purus ",
        img: "../assets/img/Img5.jpg",
      },
    ];
    return (
      <div>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex justify-around lg:flex-row flex-col-reverse items-center lg:space-x-20 m-10 md:m-20 lg:my-20 lg:mx-10 ">
                  {/* Text & BTN */}
                  <div className="lg:p-7 lg:w-1/2 space-y-3 ">
                    <h1 className={
                        "text-left block font-semibold leading-normal text-2xl lg:text-3xl xl:text-4xl text-red-800"
                      }>
                      {item.title}
                    </h1>
                    <p
                      className={
                        "block lg:w-5/6 w-full text-main text-sm text-left"
                      }>
                      {item.text}
                    </p>
                    <button
                      className={
                        "bg-red-800 text-sm md:text-base font-bold py-4 px-7 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none"
                      }>
                      Read More
                    </button>
                  </div>
                  {/* The Image */}
                  <div className="lg:w-1/2 mb-4 md:mb-10 lg:mb-0 overflow-hidden rounded-bl-[5rem] sm:rounded-bl-[8rem] md:rounded-bl-[10rem] 2xl:rounded-bl-[15rem]">
                    {/* IMG */}
                    <div className="max-w-[100rem] max-h-52 overflow-hidden lg:max-h-[36rem] bg-cover bg-center">
                      <img className="w-full h-screen"
                        src={require(`../../assets/img/Img${index + 1}.jpg`)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
// className={'flex flex-row w-full justify-center items-center'}
