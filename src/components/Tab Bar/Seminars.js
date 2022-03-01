import React from "react";
import {
    CalendarIcon,
    LocationMarkerIcon,
    UserIcon,
} from "@heroicons/react/outline";

const Seminars = () => {
    return (
        <div>
            <section
                className="text-gray-800 body-font flex lg:flex-row flex-col items-center justify-center space-y-5 lg:space-y-0  lg:space-x-4 lg:mx-4">
                {/* Card 1 */}
                <div className="container   mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4">
                            <div
                                className="h-64 shadow-lg w-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h1 className="title-font text-md font-medium text-gray-800 mb-3">
                                        Knowledge of the evaluation of economic research outputs
                                    </h1>
                                    {/* Date  -----------------------------------*/}
                                    <div className="flex flex-col">
                                        <div className="py-1 flex items-center space-x-2">
                                            <CalendarIcon className="text-main  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">2021-11-19</h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <LocationMarkerIcon className="text-main  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                College of Engineering
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-main  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                M.D. Emad Kassem
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-main  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                Dr. Mohammed Maher Rashid
                                            </h1>
                                        </div>
                                    </div>
                                    {/* ---------------------------------------- */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="container  mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4">
                            <div
                                className="h-64 shadow-lg w-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h1 className="title-font text-md font-medium text-gray-800 mb-3">
                                        The use of technology in education - a critical study
                                    </h1>
                                    {/* Date  -----------------------------------*/}
                                    <div className="flex flex-col">
                                        <div className="py-1 flex items-center space-x-2">
                                            <CalendarIcon className="text-main w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">2021-11-19</h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <LocationMarkerIcon className="text-main w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                College of Engineering
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-main w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                A.M.Dr. Ahmed Abdel-Saheb
                                            </h1>
                                        </div>
                                    </div>
                                    {/* ---------------------------------------- */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="container  mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4">
                            <div
                                className="h-64 shadow-lg w-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h1 className="title-font text-md font-medium text-gray-800 mb-3">
                                        Improving H-index for Researchers
                                    </h1>
                                    {/* Date  -----------------------------------*/}
                                    <div className="flex flex-col">
                                        <div className="py-1 flex items-center space-x-2">
                                            <CalendarIcon className="text-main w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">2021-11-19</h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <LocationMarkerIcon className="text-main w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                College of Engineering
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-main w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                Dr. Azmar Mahmoud
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-main w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                M.M Tamara Zuhair Fadel
                                            </h1>
                                        </div>
                                    </div>
                                    {/* ---------------------------------------- */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Seminars;
