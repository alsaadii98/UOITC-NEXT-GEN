import React from "react";
import Dots from "../Dots";
export const CareerDev = () => {
  return (
    <div className=" mt-44 flex justify-between items-center space-x-24">
      {/* Right Dots */}
      <div className="mt-56">
        <Dots className="w-96" />
      </div>
      {/* Center Text */}
      <div>
        <div className="ml-28 space-y-4 text-center">
          <h1 className="text-4xl text-red-800 font-semibold">
            Career Development Center
          </h1>
          <p className="text-gray-600 w-[80rem] text-center">
            We have established a follow-up site for our graduates to believe
            that every student graduated from the University of Information
            Technology deserves to be given the opportunity to be at the level
            of the requirements of the labor market by following the news of the
            site of courses or seminars or workshops provided by the university
            or any external entity in cooperation with the University. We can
            also pursue the job opportunities that we announce to the university
            to qualify and employ our dear students
          </p>
          <button className="bg-red-800 text-sm md:text-base font-light py-4 px-7 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none">
            Visit The Official Website
          </button>
        </div>
      </div>
      {/* Left Dots */}
      <div className="mb-56">
        <Dots className="w-96" />
      </div>
    </div>
  );
};
