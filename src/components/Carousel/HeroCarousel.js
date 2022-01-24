import React, {Component} from "react";
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
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
                img: "../assets/img/Img1.jpg",
            },
            {
                title: "Tristique nulla aliquet enim tortor ",
                text: "Tristique nulla aliquet enim tortor at. Accumsan sit amet nulla facilisi morbi tempus iaculis. Sit amet purus gravida quis blandit turpis cursus. Rhoncus dolor purus non enim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Orci a scelerisque purus semper",
                img: "../assets/img/Img2.jpg",
            },
            {
                title: "Tneque aliquam vestibulum morbi blandit cursus",
                text: "Amet nisl suscipit adipiscing bibendum est ultricies integer. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Turpis in eu mi bibendum neque egestas. Mauris in aliquam sem fringilla ut. Diam vulputate ut pharetra",
                img: "../assets/img/Img3.jpg",
            },
        ];
        return (
            <div>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <div
                                className={"pt-20 md:px-20 flex justify-center item-center "}
                                key={index}
                            >
                                <div
                                    className={
                                        " flex lg:flex-row flex-col-reverse w-full justify-center items-center  "
                                    }
                                >
                                    <div className={" p-4 px-10  lg:space-y-7 space-y-2 "}>
                                        <h1 className={'text-left font-semibold leading-normal text-2xl md:text-3xl lg:text-4xl text-red-800'}>{item.title}</h1>
                                        <p className={"text-main w-full text-left"}>{item.text}</p>
                                        <button
                                            className={
                                                "bg-red-800 font-bold md:py-4 md:px-7 py-3 px-4 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500  "
                                            }
                                        >
                                            Read More
                                        </button>
                                    </div>

                                    <div className="flex relative">
                                        <div
                                            className={
                                                "w-14 h-14 sm:w-20 sm:h-20   md:w-24  md:h-24 lg:w-28 lg:h-28 xl:w-44 xl:h-44 bg-red-300 rounded-full absolute lg:-left-16 md:-left-12 -left-7 sm:-left-10 top-1  xl:-left-24  "
                                            }
                                        ></div>


                                        <div
                                            className={
                                                "container mb-16 lg:mb-32 z-20 bg-cover bg-center  w-[21rem] h-[16rem] sm:w-[25rem] sm:h-[17rem] md:w-[30rem] md:h-[23rem] xl:w-[40rem] xl:h-[28rem] 2xl:w-[50rem] 2xl:h-[32rem] rounded-bl-[100px] sm:rounded-bl-[125px] md:rounded-bl-[175px] lg:rounded-bl-[200px] xl:rounded-bl-[250px] shadow-md overflow-hidden relative"
                                            }
                                        >
                                            <img
                                                className={"w-full h-full"}
                                                src={require(`../../assets/img/Img${index + 1}.jpg`)}
                                                alt={item.title}
                                            />
                                        </div>

                                        <div
                                            className={
                                                "w-14 h-14 sm:w-20 sm:h-20   md:w-24  md:h-24 lg:w-28 lg:h-28  xl:w-44 xl:h-44 bg-green-200 rounded-br-[25px] md:rounded-br-[45px] lg:rounded-br-[65px] xl:rounded-br-[80px]   absolute z-10 top-56 left-48 sm:top-60 sm:left-72 sm:top-60 sm:left-72 md:top-80 md:left-80 lg:top-80 lg:left-80 xl:top-80 xl:mt-10 xl:left-96 2xl:top-96 2xl:mt-10 2xl:ml-20 2xl:left-96"
                                            }
                                        ></div>
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
