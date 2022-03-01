import React from "react";
import { RiAwardLine } from "react-icons/ri";
export const OurGoalsCard = () => {
  return (
    <div className="bg-white h-72 flex flex-col justify-center rounded-2xl py-10 px-4 shadow-lg hover:scale-125 transform-all duration-500 ease-in-out">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        {/* Icon */}
        <div className="bg-green-300 text-white p-4 rounded-2xl items-center">
          <RiAwardLine className="w-10 h-10" />
        </div>
        <div className="text-center mx-3 space-y-2">
          <h1 className="text-green-500 md:text-lg font-semibold">Our Goals</h1>
          <p className="text-main  font-light text-xs w-48 text-center">
            High quality educational programs. Continuous development of
            curriculum and study planning. Preparing the graduate to work in the
            national & international market
          </p>
        </div>
      </div>
    </div>
  );
};
