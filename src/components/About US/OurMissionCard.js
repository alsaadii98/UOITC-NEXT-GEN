import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
export const OurMissionCard = () => {
  return (
    <div className="bg-white items-center flex flex-col justify-center h-72 rounded-2xl py-10 px-4 shadow-lg hover:scale-125 transform-all duration-500 ease-in-out">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        {/* Icon */}
        <div className="bg-blue-300 w-16 p-2 rounded-2xl items-center">
          <HeartIcon className="stroke-white" />
        </div>
        <div className="text-center mx-3 space-y-2">
          <h1 className="text-blue-500 text-lg font-semibold">Our Mission</h1>
          <p className="text-gray-300  font-light text-xs w-48 text-center">
            Make the student prepared to find and run out solutions for the
            problems of ICT in national labor market
          </p>
        </div>
      </div>
    </div>
  );
};
