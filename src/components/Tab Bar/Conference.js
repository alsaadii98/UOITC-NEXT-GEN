import React from "react";
import {CalendarIcon, AtSymbolIcon} from "@heroicons/react/outline";

export const Conference = () => {
    return (
        <div
            className="lg:h-56 h-full w-80 lg:w-auto rounded-2xl flex lg:flex-row flex-col items-center justify-center lg:justify-between lg:space-x-10 bg-white shadow-lg">
            {/* Left Side */}
            <div
                className="bg-color h-48 lg:h-full lg:w-2/5 w-full flex justify-center rounded-t-2xl lg:rounded-l-2xl bg-gradient-to-r">
                <div className="flex justify-center items-center">
                    <img
                        className="w-40"
                        src="https://ntict.uoitc.edu.iq/img/uoitc.png"
                        alt="UOITC"
                    />
                </div>
            </div>
            {/* Right Side */}
            <div className="lg:w-3/5 w-auto lg:p-4 p-7 space-y-2">
                <h1 className="text-sm ">
                    5th International Conference on New Trends in Information and
                    Communications Technology Applications NTICT'2021
                </h1>
                {/* Content */}
                <div>
                    <div className="py-1 lg:py-0 flex items-center space-x-2">
                        <CalendarIcon className="text-gray-600 md:w-4 w-3 md:h-4 h-3 font-light"/>
                        <h1 className="text-gray-600 text-sm md:text-lg font-light">
                            Form :
                        </h1>
                        <h1 className="text-red-800 text-sm md:text-lg font-light">
                            2021-11-17
                        </h1>
                    </div>
                    <div className="py-1 lg:py-0 flex items-center space-x-2">
                        <CalendarIcon className="text-gray-600  md:w-4 w-3 md:h-4 h-3 font-light"/>
                        <h1 className="text-gray-600 text-sm md:text-lg font-light">
                            To :
                        </h1>
                        <h1 className="text-red-800 text-sm md:text-lg font-light">
                            2021-11-19
                        </h1>
                    </div>
                    <div className="py-1 lg:py-0 flex items-center space-x-2">
                        <AtSymbolIcon className="text-gray-600 md:w-4 w-3 md:h-4 h-3 font-light"/>
                        <h1 className="text-gray-600 text-sm md:text-lg font-light">
                            Email :
                        </h1>
                        <h1 className="text-red-800 text-sm md:text-lg font-light">
                            ntict@uoitc.edu.iq
                        </h1>
                    </div>
                    <button className="cursor-pointer underline underline-offset-4 text-sm text-red-800 font-light">
                        See more details
                    </button>
                </div>
            </div>
        </div>
    );
};
