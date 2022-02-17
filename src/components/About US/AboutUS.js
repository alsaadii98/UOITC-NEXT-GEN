import React from "react";
import Dots from "../Dots";
import { OurVisionCard } from "./OurVisionCard";
import { OurGoalsCard } from "./OurGoalsCard";
import { OurMissionCard } from "./OurMissionCard";
export const AboutUS = () => {
  return (
    <div className="mt-48  flex lg:flex-row flex-col md:items-center justify-center lg:justify-between space-y-10">
      {/* Text */}
      <div className="space-y-4">
        <div className="lg:ml-32 ml-5">
          <h1 className="text-4xl text-red-800 font-semibold">About US</h1>
          <p className="text-gray-600">Our Vision, Mission, Goals</p>
        </div>
        <Dots className="w-80" />
      </div>
      {/* Images */}
      <div className="lg:w-1/2 w-full p-10 md:p-0 md:h-[28rem] lg:rounded-tl-[200px] bg-gray-100 md:relative ">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center md:space-x-4 sm:-rotate-12 sm:absolute md:-top-16 lg:-top-24 right-10 sm:right-20 md:right-36 lg:right-10">
          <div className="space-y-4">
            <OurVisionCard />
            <OurGoalsCard />
          </div>
          <OurMissionCard />
        </div>
      </div>
    </div>
  );
};
