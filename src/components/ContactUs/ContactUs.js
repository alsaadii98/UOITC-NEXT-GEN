import React from "react";
import Dots from "../Dots";
import Loc from "./Loc";
import { ContactIcon } from "./ContactIcon";
export const ContactUs = () => {
  return (
    <div className="mt-44 flex lg:flex-row flex-col items-center justify-between ">
      {/* Text */}
      <div>
        <div className="space-y-4">
          <div className="ml-28 space-y-4">
            <h1 className="text-4xl text-red-800 font-semibold">Contact US</h1>
            <p className="text-gray-600 w-96">
              Do have a question ? Feel free to Contact US
            </p>
            <h4 className="text-xl text-red-800 font-semibold">Contact Info</h4>
            <div className="space-y-2">
              <ContactIcon text="info@uoitc.edu.iq" />
              <ContactIcon text="complain@uoitc.edu.iq" />
              <ContactIcon text="cau.uoitc@uoitc.edu.iq" />
            </div>
            <h4 className="text-xl text-red-800 font-semibold">
              Where to Find Us
            </h4>
            <p className="text-gray-600 w-96">Iraq, Baghdad, Al-Nidhal St. </p>
          </div>
          <Dots className="w-80" />
        </div>
      </div>
      {/* Image */}
      <div className="w-1/2 flex items-center justify-center">
        <Loc className="w-full h-[36rem] rounded-tl-[200px] overflow-hidden" />
      </div>
    </div>
  );
};
