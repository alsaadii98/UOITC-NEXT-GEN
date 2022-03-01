import React from "react";
import Shape from "../Shape";
import Shape2 from "../Shape2";
import Shape3 from "../Shape3";
// The Floating 
import '../Floating.css'
export const CareerDev = () => {
  return (
    <div className="lg:mx-32 mt-20 lg:mt-44">
      {/* Square Dots */}
      <div className="flex flex-col items-end justify-end">
        <div className="relative">
          <div className=" relative">
            <Shape />
          </div>
          <div className="floating absolute left-10 top-20 shadow-lg shadow-gray-400">
            <Shape3 />
          </div>
        </div>
      </div>
      {/* Center Text */}
      <div className="m-14 flex justify-center  items-center">
        <div className=" space-y-4 text-center">
          <h1 className="text-4xl lg:text-5xl text-red-800 font-semibold">
            Career Development Center
          </h1>
          <p className="text-main text-sm w-full 2xl:w-[80rem] lg:text-center">
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
            <a href="https://alumni.uoitc.edu.iq/" target={"_blank"}>
              Visit The Official Website
            </a>
          </button>
        </div>
      </div>
      {/* Circle Shape */}
      <div className="relative">
        <div className=" relative">
          <Shape />
        </div>
        <div className="floating absolute left-10 bottom-20 shadow-lg shadow-gray-400">
          <Shape2 />
        </div>
      </div>
    </div>
  );
};
