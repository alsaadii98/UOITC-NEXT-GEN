import React from "react";
import Loc from "./Loc";
import { ContactIcon } from "./ContactIcon";
import Shape from "../Shape";
export const ContactUs = () => {
  return (
    <div className="mt-20 lg:mt-44 flex lg:flex-row flex-col lg:items-center justify-between ">
      {/* Text */}
      <div>
        <div className="space-y-4">
          <div className="lg:ml-28 ml-5 space-y-4">
            <h1 className="text-4xl lg:text-5xl text-red-800 font-semibold">
              Contact US
            </h1>
            <p className="text-main w-96">
              Do have a question ? Feel free to Contact US
            </p>
            <h4 className="text-xl lg:text-2xl text-red-800 font-semibold">
              Contact Info
            </h4>
            <div className="space-y-2">
              <ContactIcon text="info@uoitc.edu.iq" />
              <ContactIcon text="complain@uoitc.edu.iq" />
              <ContactIcon text="cau.uoitc@uoitc.edu.iq" />
            </div>
            <h4 className="text-xl lg:text-2xl text-red-800 font-semibold">
              Where to Find Us
            </h4>
            <p className="text-main w-96">Iraq, Baghdad, Al-Nidhal St. </p>
            <Shape />
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="lg:w-1/2 w-full mt-7 lg:mt-0 ">
        <Loc className="w-full p-0 lg:p-2 h-[500px] lg:rounded-tl-[200px] overflow-hidden" />
      </div>
    </div>
  );
};
