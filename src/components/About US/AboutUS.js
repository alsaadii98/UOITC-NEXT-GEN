import React from "react";
import { OurVisionCard } from "./OurVisionCard";
import { OurGoalsCard } from "./OurGoalsCard";
import { OurMissionCard } from "./OurMissionCard";
export const AboutUS = () => {
  return (
    <div className="mt-48  flex items-center justify-between">
      {/* Text */}
      <div>
        <h1>About US</h1>
        <p>Our Vision, Mission, Goals</p>
      </div>
      {/* Images */}
      <div className=" w-1/2 h-[28rem] rounded-tl-[200px] bg-gray-100 relative ">
        <div className="flex items-center justify-center space-x-4 -rotate-12 absolute -top-24 right-44">
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
