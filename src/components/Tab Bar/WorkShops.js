import React from "react";
import {
    CalendarIcon,
    LocationMarkerIcon,
    UserIcon,
} from "@heroicons/react/outline";

const WorkShops = () => {
    return (
        <div>
            <section
                className="text-gray-600 body-font flex lg:flex-row flex-col  items-center lg:justify-center space-y-5 lg:space-y-0 lg:space-x-4 lg:mx-4">
                {/* Card 1 */}
                <div className="container   mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4">
                            <div
                                className="h-64 shadow-lg w-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h1 className="title-font text-md font-medium text-gray-900 mb-3">
                                        Science writing research for non native speakers of English
                                    </h1>
                                    {/* Date  -----------------------------------*/}
                                    <div className="flex flex-col">
                                        <div className="py-1 flex items-center space-x-2">
                                            <CalendarIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">2019-04-30</h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <LocationMarkerIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                College of Engineering
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                M.M Saad Ahmed Diab
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                M.M Ghada Emad
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
                                    <h1 className="title-font text-md font-medium text-gray-900 mb-3">
                                        SQL server
                                    </h1>
                                    {/* Date  -----------------------------------*/}
                                    <div className="flex flex-col">
                                        <div className="py-1 flex items-center space-x-2">
                                            <CalendarIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">2021-11-19</h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <LocationMarkerIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                College of Engineering
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                M.M Saed Ahmad Dhiab
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                M.M Athyr Maeruf Mahmud
                                            </h1>
                                        </div>
                                        <div className="py-1 flex items-center space-x-2">
                                            <UserIcon className="text-gray-600  w-4 h-4 font-light"/>
                                            <h1 className="text-red-800 font-light">
                                                M.M Sana Sabah
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

export default WorkShops;
