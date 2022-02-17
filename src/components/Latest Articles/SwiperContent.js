import React from "react";
import "./styles.css";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
export const SwiperContent = (props) => {
  return (
    <div>
      {/* Card */}
      <div className=" bg-white shadow-lg rounded-3xl overflow-hidden w-[26rem] h-[480px]">
        {/* Img */}
        <div className="h-60 overflow-hidden">
          <img
            src={require(`../../assets/img/Img${props.index + 1}.jpg`)}
            alt=""
          />
        </div>
        {/* Text & Btn */}
        <div className="mt-4 px-6 py-2">
          <div className="my-2 text-right">
            <h2 className="text-gray-400 text-sm">{props.date}</h2>
          </div>
          <h1 className="text-left text-sm font-semibold">{props.title}</h1>
          <p className="text-left text-sm font-extralight">{props.text}</p>
          {/* Btn */}
          <div className="absolute bottom-14 right-32 flex items-center justify-end cursor-pointer text-blue-700 space-x-2 hover:scale-125	 hover:text-blue-500 transform-all duration-500 ease-in-out ">
            <button>Read More</button>
            <ArrowNarrowRightIcon className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwiperContent;