import React from "react";
import Dots from "../Dots";
import StaffSvg from "./StaffSvg";
export const OurStaff = () => {
  return (
    <div className="mt-20 flex lg:flex-row flex-col lg:items-center justify-between space-y-10 ">
      {/* Text */}
      <div>
        <div className="space-y-4">
          <div className="lg:ml-28 ml-5 space-y-4">
            <h1 className="text-4xl lg:text-5xl text-red-800 font-semibold">Our Staff</h1>
            <p className="text-gray-600 w-96">
              We have staff members who are responsible for keeping the
              University a well-organised and efficient institution. Responsible
              for all non-academic activities including marketing, alumni
              relations, estates and facilities, finance, HR, governance and IT.
              Our lecturers and research staff are responsible for developing
              our teaching and research programmes.
            </p>
            <button
              className={
                "bg-red-800 text-md font-bold py-5 px-8 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none"
              }
            >
              See More
            </button>
          </div>
          <Dots className="w-80" />
        </div>
      </div>
      {/* Image */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <StaffSvg className="w-80 lg:w-[26rem]" />
      </div>
    </div>
  );
};
