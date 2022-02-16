import React from "react";
import './styles.css'
export const SwiperContent = (props) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-2 justify-center lg:justify-between overflow-hidden">
      {/* Text & Btn */}
      <div className="mt-2 sm:mt-5 lg:mt-0 w-2/3 lg:w-1/2 space-y-4 flex flex-col justify-start items-start">
        <h1 className="title-class lg:w-2/3 text-left block font-semibold text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-red-800">
          {props.title}
        </h1>
        <p className="w-4/5 block text-main text-sm xl:text-md text-left">{props.text}</p>
        <button
          className={
            "bg-red-800 text-sm md:text-base font-semibold py-4 px-5 xl:px-7 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none"
          }
        >
          Read More
        </button>
        
      </div>
      {/* Img & Shape */}
      <div className="lg:w-3/5 2xl:w-1/2 flex justify-center">
        {/* Circle */}
        <div className="bg-[#DFE9FE] hidden lg:block mt-2 rounded-l-full  lg:w-20 xl:w-24 2xl:w-16 lg:h-32"></div>
        {/* Img */}
        <div className="w-96 h-72 lg:h-[27.014rem] lg:w-[38.51rem] xl:h-[31.014rem] xl:w-[44.51rem] 2xl:h-[37.014rem] 2xl:w-[54.51rem] bg-center">
          <img
            className="p-10 sm:p-0 rounded-bl-[8.5rem] lg:rounded-bl-[12.5rem]"
            src={require(`../../assets/img/Img${props.index + 1}.jpg`)}
          />
        </div>
        {/* Rectangle */}
        <div className="bg-[#F3FEE2] hidden lg:block absolute lg:bottom-8 lg:right-36 xl:bottom-12 xl:right-48 2xl:bottom-12 2xl:right-96 rounded-br-[5rem] w-36 2xl:w-48 h-20"></div>
      </div>
    </div>
  );
};
export default SwiperContent;
