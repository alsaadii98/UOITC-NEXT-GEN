import React from "react";
import Shape from "../Shape";
import DrAbbas from "../../assets/img/DrAbbas.jpg";
export const OurMessage = () => {
  return (
    <div className="mt-20 lg:mt-32 flex lg:flex-row flex-col lg:items-center justify-between space-y-7 lg:space-y-0 ">
      {/* Text */}
      <div>
        <div className="space-y-4">
          <div className="lg:ml-28 ml-5 space-y-2">
            <h1 className="text-4xl lg:text-5xl text-red-800 font-semibold">Our Message</h1>
            <p className="text-main text-sm md:text-md w-80 md:w-96 ">
              University of Information Technology and Communications (UoITC)
              founded in 2014 to becomes the first specialized University in
              Iraq and region. The University foundation is to keeping up the
              fast transformation in ICT.
            </p>
            <Shape/>
          </div>
          
        </div>
      </div>
      {/* Image */}
        <div className="lg:w-1/2 xl:max-w-6xl bg-center object-fill flex items-center   lg:rounded-bl-[12.5rem] overflow-hidden h-80 md:h-[26rem] lg:h-[32rem]">
            <img className="w-full h-[28.5rem]  xl:h-[32.5rem] 2xl:h-[37.5rem]" src={DrAbbas} alt="DrAbbas" />
        </div>
    </div>
  );
};