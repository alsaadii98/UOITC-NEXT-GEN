import React from "react";
import { LightBulbIcon } from "@heroicons/react/outline";
export const OurVisionCard = () => {
  return (
    <div className="bg-white h-72 flex flex-col justify-center rounded-2xl py-10 px-4 shadow-lg hover:scale-125 transform-all duration-500 ease-in-out">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        {/* Icon */}
        <div className="bg-red-300  p-4 rounded-2xl items-center">
          <LightBulbIcon className="w-10 h-10  stroke-white" />
        </div>
        <div className="text-center mx-3 space-y-2">
          <h1 className="text-red-800 text-lg font-semibold">Our Vision</h1>
          <p className="text-gray-300  font-light text-[12px] w-48 text-center">
            leading gate in the region for the technology of information and
            communications serve the community through meeting the needs of the
            labor market.
          </p>
        </div>
      </div>
    </div>
  );
};
