import React from "react";
import Dots from "../Dots";
export const CareerDev = () => {
  return (
    <div className="lg:mt-44">
      {/* Right Dots */}
      
        
    
      {/* Center Text */}
      <div className="m-14 flex justify-center  items-center">
        <div className=" space-y-4 text-center">
          <h1 className="text-4xl lg:text-5xl text-red-800 font-semibold">
            Career Development Center
          </h1>
          <p className="text-gray-600 text-sm w-full 2xl:w-[80rem] tlg:ext-center">
            We have established a follow-up site for our graduates to believe
            that every student graduated from the University of Information
            Technology deserves to be given the opportunity to be at the level
            of the requirements of the labor market by following the news of the
            site of courses or seminars or workshops provided by the university
            or any external entity in cooperation with the University. We can
            also pursue the job opportunities that we announce to the university
            to qualify and employ our dear students
          </p>
          <button className="bg-red-800 font-semibold py-5 px-7 text-white rounded-full hover:bg-red-700 hover:transition-all duration-500 outline-none">
            Visit The Official Website
          </button>
        </div>
      </div>
      
      <Dots className="w-96  hidden lg:block" />
    </div>
  );
};
