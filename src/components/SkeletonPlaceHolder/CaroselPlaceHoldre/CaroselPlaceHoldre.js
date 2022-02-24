import React from "react";
import "../animtion.css";
export const CaroselPlaceHoldre = () => {
  return (
    <div className="mx-auto max-w-7xl 2xl:max-w-[120rem] flex flex-col-reverse lg:flex-row items-center lg:space-x-4 justify-center  overflow-hidden">
      {/* Text & Btn */}
      <div className="shimmer mt-5 lg:mt-0 w-72 md:w-96 lg:w-1/2 space-y-4 flex flex-col justify-start items-start">
        <p className="w-64 lg:w-80 h-6 lg:h-10 rounded-full block bg-gray-300"></p>
        <p className="w-4/5 h-2 rounded-full block bg-gray-300"></p>
        <p className="w-3/5 h-2 rounded-full block bg-gray-300"></p>
        <p className="w-2/5 h-2 rounded-full block bg-gray-300"></p>
        <button
          className={
            "bg-gray-300 py-4 px-5 xl:px-10 w-24 h-10 lg:h-14 xl:w-32  rounded-full hover:transition-all duration-500 outline-none"
          }
        ></button>
      </div>
      {/* Img & Shape */}
      <div className="lg:w-1/2 flex justify-center lg:ml-10">
        <div className="shimmer flex">
          {/* Img */}
          <div className="shimmer bg-gray-300 rounded-bl-[4.5rem] md:rounded-bl-[6.5rem] lg:rounded-bl-[8.5rem] xl:rounded-bl-[12.5rem] w-72 md:w-96 h-44 md:h-56 lg:w-[48.51rem] lg:h-[23.014rem] xl:h-[27.014rem] 2xl:h-[35.014rem] 2xl:w-[50.51rem]"></div>
        </div>
      </div>
    </div>
  );
};

// <div className="shimmer ml-0 lg:ml-16 mt-5 lg:mt-0 w-72 md:w-96 lg:w-1/2 space-y-4 flex flex-col justify-start items-start">
//         <p className="w-80 h-10 rounded-full block bg-gray-300"></p>
//         <p className="w-4/5 h-2 rounded-full block bg-gray-300"></p>
//         <p className="w-3/5 h-2 rounded-full block bg-gray-300"></p>
//         <p className="w-2/5 h-2 rounded-full block bg-gray-300"></p>
//         <button
//           className={
//             "bg-gray-300 py-4 px-5 xl:px-10 w-24 h-10 lg:h-14 xl:w-32  rounded-full hover:transition-all duration-500 outline-none"
//           }
//         ></button>

<div className="shimmer flex">
  {/* Img */}
  <div className="shimmer bg-gray-300 rounded-bl-[4.5rem] md:rounded-bl-[6.5rem] lg:rounded-bl-[8.5rem] xl:rounded-bl-[12.5rem] w-72 md:w-96 h-44 md:h-56 lg:w-[48.51rem] lg:h-[23.014rem] xl:h-[27.014rem] 2xl:h-[35.014rem] 2xl:w-[50.51rem]"></div>
</div>;
