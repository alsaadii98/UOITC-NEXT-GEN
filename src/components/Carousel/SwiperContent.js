import React from "react";
import { Link } from "react-router-dom";
import Shape from "../Shape";
import "./styles.css";
export const SwiperContent = (props) => {
  const imageCont = String(
    `https://mohammedhilal.pythonanywhere.com/` + props.image
  );
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-4 lg:justify-center  overflow-hidden">
      {/* Text & Btn */}
      <div className="mt-5 lg:mt-0 w-72 md:w-96 lg:w-1/2 space-y-4 flex flex-col justify-start items-start">
        <h1 className="title-class lg:w-2/3 text-left block font-semibold text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-red-800">
          {props.title}
        </h1>
        <p className="w-4/5 block text-main text-sm xl:text-md text-left">
          {props.text}
        </p>
        <Link to={`/articles/${props.id}`}>
          <button
            className={
              "bg-red-800 text-sm md:text-base font-semibold py-4 px-5 xl:px-7 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none"
            }
          >
            Read More
          </button>
        </Link>
        <Shape />
      </div>
      {/* Img & Shape */}
      <div className="lg:w-1/2 flex justify-center lg:ml-10">
        <div className="grid gris-cols-2 grid-rows-1 relative overflow-visible">
          <div className="flex">
            {/* Circle */}
            {/* props.images */}
            <div className="bg-[#DFE9FE] hidden lg:block mt-7  rounded-l-full lg:w-10 lg:h-20 xl:w-16 xl:h-28"></div>
            {/* Img */}
            <div className="bg-center object-center w-72 md:w-96 h-44 md:h-56 lg:w-[48.51rem] lg:h-[23.014rem] xl:h-[27.014rem] 2xl:h-[35.014rem] 2xl:w-[64.51rem]">
              <img alt={props.title}
                className="rounded-bl-[4.5rem] md:rounded-bl-[6.5rem] lg:rounded-bl-[8.5rem] xl:rounded-bl-[12.5rem]"
                src={imageCont}
              />
            </div>
          </div>
          {/* Rectangle */}
          <div className="flex items-end justify-end 2xl:mr-52 xl:mr-52 lg:mr-60 ">
            <div className="bg-[#F3FEE2] hidden lg:block rounded-br-[5rem] w-36 2xl:w-48 h-16 xl:h-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwiperContent;
