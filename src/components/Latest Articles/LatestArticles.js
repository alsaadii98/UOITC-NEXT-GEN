import React, {Component} from "react";
import Slider from "react-slick";


export default class Responsive extends Component {
    render() {
        var settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        const data = [
            {
                title: "Title 1",
                text: "The Business Informatics College at the University of Information Technology and Communications, in cooperation with Zain Iraq for Communications",
                img: "../assets/img/Img1.jpg",
            },
            {
                title: "Title 2",
                text: "The Business Informatics College at the University of Information Technology and Communications, in cooperation with Zain Iraq for Communications",
                img: "../assets/img/Img2.jpg",
            },
            {
                title: "Title 3",
                text: "The Business Informatics College at the University of Information Technology and Communications, in cooperation with Zain Iraq for Communications",
                img: "../assets/img/Img3.jpg",
            },
            {
                title: "Title 4",
                text: "The Business Informatics College at the University of Information Technology and Communications, in cooperation with Zain Iraq for Communications",
                img: "../assets/img/Img4.jpg",
            },
            {
                title: "Title 5",
                text: "The Business Informatics College at the University of Information Technology and Communications, in cooperation with Zain Iraq for Communications",
                img: "../assets/img/Img4.jpg",
            },
        ];
        return (
            <div className="mt-20 relative ">
                <div className="flex justify-between items-center">
                    <div className="space-y-2 ml-28">
                        <h1 className="text-5xl font-semibold text-red-800">
                            Latest Articles
                        </h1>
                        <h5 className="text-xl text-gray-800 ">
                            Our latest articles and news
                        </h5>
                    </div>
                    <div className="mr-32">
                        <h1 className="text-xl underline text-gray-400">See More Articles</h1>
                    </div>
                </div>

                <Slider className={''}  {...settings}>
                    {data.map((item, index) => {
                        return (
                            <div className="grid lg:grid-cols-3 justify-items-center mt-10">
                                <div className="mx-2 w-[22rem] mx-28 mb-2 rounded-xl shadow-lg">
                                    <img
                                        className="w-full h-56 rounded-t-xl"
                                        src={require(`../../assets/img/Img${index + 1}.jpg`)}
                                        alt={item.title}
                                    />
                                    <div className="px-6 py-4">
                                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                                            {item.title}
                                        </h4>
                                        <p className="leading-normal text-gray-700">{item.text}</p>
                                        <div className="flex justify-end ">
                                            <h1 className="text-blue-500 cursor-pointer">
                                                Read More
                                            </h1>
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
