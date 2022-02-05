import React from "react";
import Dots from "../Dots";
import StaffSvg from "./StaffSvg";
export const OurStaff = () => {
  return (
    <div className="mt-44 flex lg:flex-row flex-col items-center justify-between ">
      {/* Text */}
      <div>
        <div className="space-y-4">
          <div className="ml-28 space-y-4">
            <h1 className="text-4xl text-red-800 font-semibold">Our Staff</h1>
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
                "bg-red-800 text-sm md:text-base font-bold py-4 px-7 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none"
              }
            >
              See More
            </button>
          </div>
          <Dots className="w-80" />
        </div>
      </div>
      {/* Image */}
      <div className="w-1/2 flex items-center justify-center">
        <StaffSvg className="" />
      </div>
    </div>
  );
};
