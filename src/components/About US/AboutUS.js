import React from "react";
import { OurVisionCard } from "./OurVisionCard";
import { OurGoalsCard } from "./OurGoalsCard";
import { OurMissionCard } from "./OurMissionCard";
import Shape from "../Shape";
export const AboutUS = () => {
  return (
    <div className="mt-20  lg:mt-44 flex lg:flex-row flex-col lg:items-center justify-center lg:justify-between space-y-10">
      {/* Text */}
      <div className="space-y-4">
        <div className="lg:ml-32 ml-5">
          <h1 className="text-4xl md:text-5xl  text-red-800 font-semibold">
            About US
          </h1>
          <p className="text-gray-600">Our Vision, Mission, Goals</p>
          <Shape/>
        </div>
      </div>
      {/* Images */}
      <div className="lg:w-1/2 xl:max-w-6xl object-fill bg-center w-full p-10 lg:p-0 lg:h-[28rem] xl:h-[32rem] lg:rounded-tl-[200px] bg-gray-50 md:relative ">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-center lg:space-x-4 lg:absolute lg:inset-x-0 lg:bottom-1  lg:-rotate-12">
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
