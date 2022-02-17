import React from "react";
import Dots from "../Dots";
import DrAbbas from "../../assets/img/DrAbbas.jpg";
export const OurMessage = () => {
  return (
    <div className="mt-32 flex lg:flex-row flex-col md:items-center justify-between space-y-7 md:space-y-0 ">
      {/* Text */}
      <div>
        <div className="space-y-4">
          <div className="md:ml-28 ml-5 space-y-2">
            <h1 className="text-4xl text-red-800 font-semibold">Our Message</h1>
            <p className="text-gray-600 text-sm md:text-md w-80 md:w-96 ">
              University of Information Technology and Communications (UoITC)
              founded in 2014 to becomes the first specialized University in
              Iraq and region. The University foundation is to keeping up the
              fast transformation in ICT.
            </p>
          </div>
          <Dots className="w-80" />
        </div>
      </div>
      {/* Image */}
        <div className="m-5 md:m-0  rounded-bl-[120px] md:rounded-bl-[200px] overflow-hidden md:h-[28rem] md:w-1/2 bg-cover bg-center ">
            <img className="w-full" src={DrAbbas} alt="DrAbbas" />
        </div>
    </div>
  );
};
