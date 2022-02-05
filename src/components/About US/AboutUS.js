import React from "react";
import Dots from "../Dots";
import { OurVisionCard } from "./OurVisionCard";
import { OurGoalsCard } from "./OurGoalsCard";
import { OurMissionCard } from "./OurMissionCard";
export const AboutUS = () => {
  return (
    <div className="mt-48  flex lg:flex-row flex-col lg:items-center justify-start lg:justify-between space-y-20">
      {/* Text */}
      <div className="space-y-4">
        <div className="ml-32">
          <h1 className="text-4xl text-red-800 font-semibold">About US</h1>
          <p className="text-gray-600">Our Vision, Mission, Goals</p>
        </div>
        <Dots className="w-80" />
      </div>
      {/* Images */}
      <div className=" md:w-1/2 w-full h-[28rem] rounded-tl-[200px] bg-gray-100 md:relative ">
        <div className="flex items-center justify-center space-x-4 -rotate-12 absolute lg:-top-24  md:right-44">
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
