import React from "react";
import Dots from "../Dots";
import DrAbbas from "../../assets/img/DrAbbas.jpg";
export const OurMessage = () => {
  return (
    <div className="mt-44 flex lg:flex-row flex-col items-center justify-between ">
      {/* Text */}
      <div>
        <div className="space-y-4">
          <div className="ml-28">
            <h1 className="text-4xl text-red-800 font-semibold">Our Message</h1>
            <p className="text-gray-600 w-96">
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
        <div className="rounded-bl-[200px] overflow-hidden h-[28rem] w-1/2 bg-cover bg-center ">
            <img className="w-full" src={DrAbbas} alt="DrAbbas" />
        </div>
    </div>
  );
};
